"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import { login } from "@/services/auth/actions";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch} className="flex flex-col space-y-3 w-[350px]">
      <div className="space-y-1">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="이메일"
          required
          autoFocus
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          required
        />
      </div>
      <p className="text-sm text-red-500">{errorMessage}</p>
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
