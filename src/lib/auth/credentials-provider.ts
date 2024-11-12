import { getUserByEmail } from "@/server/services/user";
import { compare } from "bcryptjs";
import CredentialsProviderConfig from "next-auth/providers/credentials";

export const credencialsProvider = CredentialsProviderConfig({
  credentials: {
    email: {},
    password: {},
  },
  async authorize(credentials) {
    console.log({ credentials });

    if (typeof credentials?.email !== 'string' || typeof credentials?.password !== 'string') return null;

    const user = await getUserByEmail(credentials.email);
    if (!user?.hashedPass) return null;

    const passwordMatch = await compare(credentials.password, user.hashedPass);
    if (!passwordMatch) return null;

    return user;
  },
});
