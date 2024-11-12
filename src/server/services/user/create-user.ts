"use server";

import { prisma } from "@/lib/prisma";
import type { CreateUserDto } from "@/types/auth";
import { hash } from "bcryptjs";

export async function createUser({ name, email, password }: CreateUserDto) {
  const hashedPass = await hash(password, 10);

  return prisma.user.create({
    data: {
      name,
      email,
      hashedPass,
    },
  });
}
