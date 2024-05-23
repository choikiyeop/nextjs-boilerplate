import { ReactNode } from "react";

export default function AuthenticateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-dvh">{children}</div>
  );
}
