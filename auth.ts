import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "이메일" },
        password: { label: "패스워드", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = await signInSchema.parseAsync(credentials);

        const user = await prisma.user.findUnique({
          where: { email: email },
        });
        if (!user)
          throw new Error("User not found.", {
            cause: { message: "이메일 또는 비밀번호를 잘못 입력했습니다." },
          });

        if (password !== user.password)
          throw new Error("Password Incorrect", {
            cause: { message: "이메일 또는 비밀번호를 잘못 입력했습니다." },
          });

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
