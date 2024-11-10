"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(name: string, email: string, hashedPass: string) {
  return prisma.user.create({
    data: {
      name,
      email,
      hashedPass,
    },
  });
}
