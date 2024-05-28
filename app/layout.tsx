import type { Metadata } from "next";
import "./globals.css";
import { fontSans } from "@/constants/configs/fonts";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
