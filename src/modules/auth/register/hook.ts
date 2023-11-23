import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TVSRegister } from "./schema";
import { registerRequest } from "./api";
import { TMetaErrorResponse } from "@/entities";

export const useRegister = (): UseMutationResult<
  TVSRegister,
  TMetaErrorResponse,
  TVSRegister,
  unknown
> => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (params) => await registerRequest(params),
  });
};
