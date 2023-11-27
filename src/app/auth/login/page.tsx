import { AuthLoginModule, FormSkeleton } from "@/modules";
import { NextPage } from "next";
import { ReactElement, Suspense } from "react";

const AuthLoginPage: NextPage = (): ReactElement => {
  return <AuthLoginModule />;
};

export default AuthLoginPage;
