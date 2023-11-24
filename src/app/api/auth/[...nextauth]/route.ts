import NextAuth from "next-auth";
import { prismaAuthOptions } from "@/libs";

const handler = NextAuth(prismaAuthOptions);
export { handler as GET, handler as POST };
