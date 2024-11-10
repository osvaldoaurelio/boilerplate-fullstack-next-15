"use server";

import { prisma } from "@/lib/prisma";

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  });
}
