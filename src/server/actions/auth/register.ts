"use server";

import { signIn } from "@/lib/auth";
import { createUser, getUserByEmail } from "@/server/services/user";
import { ActionState } from "@/types/auth";
import { RegisterInput, registerSchema } from "@/validations/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function registerAction(prevState: ActionState<RegisterInput>, formData: FormData) {
  const formDataObj = {
    name: formData.get("name")?.toString() ?? '',
    email: formData.get("email")?.toString() ?? '',
    password: formData.get("password")?.toString() ?? '',
  };

  const { success, data, error } = registerSchema.safeParse(formDataObj);
  if (!success) return {
    ...prevState,
    data: { ...prevState.data, ...formDataObj },
    message: 'Errors.invalidFields',
    errors: error.flatten().fieldErrors,
  };

  try {
    const userExist = await getUserByEmail(data.email);
    if (userExist) return {
      ...prevState,
      data: { ...prevState.data, ...formDataObj },
      message: 'Errors.userAlreadyExist',
      errors: { email: 'Errors.userAlreadyExist' },
    }

    await createUser(data);
    return await signIn("credentials", {
      ...data,
      redirect: true,
      redirectTo: "/",
    });
  } catch (err) {
    if (isRedirectError(err)) throw err;

    return {
      ...prevState,
      data: { ...prevState.data, ...formDataObj },
      message: 'Errors.unknownError',
      errors: {},
    };
  }
}
