import { AuthRegisterModule, FormSkeleton } from "@/modules";
import { NextPage } from "next";
import { ReactElement, Suspense } from "react";

const AuthLoginPage: NextPage = (): ReactElement => {
  return (
    <Suspense fallback={<FormSkeleton />}>
      <AuthRegisterModule />
    </Suspense>
  );
};

export default AuthLoginPage;
