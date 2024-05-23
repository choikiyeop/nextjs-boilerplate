"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(_currentState: unknown, formData: FormData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }
  );

  if (!response.ok) return "Invalid Credentials";

  const data = await response.json();
  cookies().set("access-token", data.accessToken, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 3,
  });

  return redirect("/");
}

export async function logout() {
  const cookie = cookies();
  cookie.delete("access-token");
}
