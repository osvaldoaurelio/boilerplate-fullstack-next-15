"use server";

import { signIn } from "@/lib/auth";
import { CredentialsSignin } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export type LoginActionState = {
  message: string;
  success: boolean;
} | null;

export async function loginAction(state: LoginActionState, formData: FormData) {
  const email = formData.get("email")?.toString() ?? '';
  const password = formData.get("password")?.toString() ?? '';

  try {
    return await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: "/",
    });
  } catch (err) {
    if (isRedirectError(err)) throw err;

    if (err instanceof CredentialsSignin) {
      return {
        message: "Erros.invalidCredentials",
        success: false,
      };
    }

    return {
      message: "Erros.unknownError",
      success: false,
    };
  }
};
