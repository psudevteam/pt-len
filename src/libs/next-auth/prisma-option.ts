import { TUser } from "@/entities";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const prismaAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      id: "login",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password!))) {
          throw new Error("Invalid email or password");
        }

        console.log(user?.roleId);

        return {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
          role: {
            id: await prisma.role.findFirst({ where: { id: user.roleId } }).then((x) => x?.id),
            name: await prisma.role.findFirst({ where: { id: user.roleId } }).then((x) => x?.name),
          },
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          fullname: token.fullname,
          role: {
            name: token?.role?.name,
            id: token?.role?.id,
          },
          id: token.id,
        },
      };
    },

    jwt: ({ token, user }) => {
      if (user) {
        const u = user as TUser;
        return {
          ...token,
          fullname: u.fullname,
          role: {
            name: u.role.name,
            id: u.role.id,
          },
          id: u.id,
        };
      }
      return token;
    },
  },
};
