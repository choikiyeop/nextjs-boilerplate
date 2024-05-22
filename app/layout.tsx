import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/constants/configs/fonts";

export const metadata: Metadata = {
  title: "Nextjs Boilerplate",
  description: "boilerplate for nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
