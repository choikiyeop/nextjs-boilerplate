import { Header } from "./header";
import { Footer } from "./footer";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-dvh mt-14">{children}</div>
      <Footer />
    </>
  );
};
