import { cn } from "../../../lib/utils";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
export default function DefaultLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Header />
      <main className={cn("relative flex-1 flex-grow", className)}>
        <div className="h-full w-full my-20">{children}</div>
      </main>
      <Footer />
    </>
  );
}
