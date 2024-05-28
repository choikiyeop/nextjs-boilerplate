"use server";

import { signIn } from "@/auth";
import { cookies } from "next/headers";

export async function login(_currentState: unknown, formData: FormData) {
  return await signIn("credentials", formData).catch(
    (err) => err.cause.message
  );
}

export async function logout() {
  const cookie = cookies();
  cookie.delete("access-token");
}
