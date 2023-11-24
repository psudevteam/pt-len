import { api } from "@/libs";
import { TVSRegister } from "./schema";
import { TRegisterRequest } from "./type";

export const registerRequest = async (params: TRegisterRequest): Promise<TVSRegister> => {
  const { data } = await api.post<TVSRegister>("/auth/register", params);
  return data;
};
