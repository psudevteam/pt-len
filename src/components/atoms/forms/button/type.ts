import { ButtonHTMLAttributes } from "react";

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "error" | "warning" | "cancel" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
};
