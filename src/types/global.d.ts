import type { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;

  namespace NodeJS {
    interface ProcessEnv {
      AUTH_SECRET: string;
      DATABASE_URL: string;
    }
  }
}

export { };
