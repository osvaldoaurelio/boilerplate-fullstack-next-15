"use server";

import { signIn } from "@/lib/auth";
import { ActionState } from "@/types/auth";
import { LoginInput, loginSchema } from "@/validations/auth";
import { CredentialsSignin } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function loginAction(prevState: ActionState<LoginInput>, formData: FormData) {
  const formDataObj = {
    email: formData.get("email")?.toString() ?? '',
    password: formData.get("password")?.toString() ?? '',
  };
  const { success, data, error } = loginSchema.safeParse(formDataObj);
  if (!success) return {
    ...prevState,
    data: { ...prevState.data, ...formDataObj },
    message: 'Errors.invalidFields',
    errors: error.flatten().fieldErrors,
  };

  try {
    return await signIn("credentials", {
      ...data,
      redirect: true,
      redirectTo: "/",
    });
  } catch (err) {
    if (isRedirectError(err)) throw err;

    if (err instanceof CredentialsSignin) {
      return {
        ...prevState,
        data: { ...prevState.data, ...formDataObj },
        message: "Errors.invalidCredentials",
        errors: {},
      };
    }

    return {
      ...prevState,
      data: { ...prevState.data, ...formDataObj },
      message: "Errors.unknownError",
      errors: {},
    };
  }
};
