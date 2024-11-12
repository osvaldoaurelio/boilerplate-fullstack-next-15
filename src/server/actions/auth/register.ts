"use server";

import { signIn } from "@/lib/auth";
import { createUser, getUserByEmail } from "@/server/services/user";
import { hash } from "bcryptjs";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

type RegisterActionState = {
  message: string;
  success: boolean;
} | null;

export async function registerAction(state: RegisterActionState, formData: FormData) {
  const name = formData.get("name")?.toString() ?? '';
  const email = formData.get("email")?.toString() ?? '';
  const password = formData.get("password")?.toString() ?? '';

  if (!name || !email || !password) return {
    message: 'Errors.requiredFields',
    success: false,
  };

  const userExist = await getUserByEmail(email);
  if (userExist) return {
    message: 'Errors.userAlreadyExist',
    success: false,
  }

  try {
    const hashedPass = await hash(password, 10);
    await createUser(name, email, hashedPass);

    return await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: "/",
    });
  } catch (err) {
    if (isRedirectError(err)) throw err;

    return {
      message: 'Errors.unknownError',
      success: false,
    };
  }
}
