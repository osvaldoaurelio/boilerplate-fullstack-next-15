import { NextAuthConfig } from "next-auth";
import { credencialsProvider } from "./credentials-provider";

export const authConfig: NextAuthConfig = {
  providers: [credencialsProvider],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
};
