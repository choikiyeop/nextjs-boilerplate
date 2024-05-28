"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Spinner } from "../feedbacks/spinner";
import { Button } from "../ui/button";
import { login } from "@/services/auth/actions";

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch} className="flex flex-col">
      <input
        type="email"
        name="email"
        placeholder="이메일"
        required
        autoFocus
      />
      <input type="password" name="password" placeholder="비밀번호" required />
      <p>{errorMessage}</p>
      <LoginButton />
    </form>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <Button disabled={pending} type="submit" onClick={handleClick}>
      {pending ? <Spinner /> : "로그인"}
    </Button>
  );
};
