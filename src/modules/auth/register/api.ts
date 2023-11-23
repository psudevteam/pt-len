import { api } from "@/libs";
import { TVSRegister } from "./schema";

export const registerRequest = async (params: TVSRegister): Promise<TVSRegister> => {
  const { data } = await api.post<TVSRegister>("/auth/register", params);
  return data;
};
