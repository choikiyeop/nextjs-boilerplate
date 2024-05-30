import { PageLayout } from "@/components/layouts/page-layout";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}
