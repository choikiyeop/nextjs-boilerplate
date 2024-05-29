import { Header } from "./header";
import { Footer } from "./footer";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-dvh pt-14">{children}</div>
      <Footer />
    </>
  );
};
