import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TVSRegister } from "./schema";
import { registerRequest } from "./api";
import { TMetaErrorResponse } from "@/entities";
import { TRegisterRequest } from "./type";

export const useRegister = (): UseMutationResult<
  TRegisterRequest,
  TMetaErrorResponse,
  TRegisterRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (params) => await registerRequest(params),
  });
};
