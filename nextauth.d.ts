import { DefaultSession } from "next-auth";
import { TUser, TToken } from "@/entities";
export * from "next-auth__augment";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: TUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends TUser {
    access_token: string;
    refresh_token: string;
    exp: string;
  }
}

declare module "next-auth/core/types" {
  interface User extends Partial<TUser> {
    user?: TUser;
  }
}
