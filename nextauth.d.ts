import { DefaultSession } from "next-auth";
import { TUser, TToken } from "@/entities";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export * from "next-auth__augment";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: TUser;
  }
}

declare module "next-auth/core/types" {
  interface User extends Partial<TUser> {
    user?: TUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: TUser;
    role?: {
      name?: string;
      id?: string;
    };
  }

  interface AdapterUser {
    user: TUser;
  }
}
