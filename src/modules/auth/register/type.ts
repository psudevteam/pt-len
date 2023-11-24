import { TVSRegister } from "./schema";

export type TRegisterRequest = Pick<TVSRegister, "fullname" | "email" | "password">;
