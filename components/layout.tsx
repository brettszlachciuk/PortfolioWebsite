import NavComponent from "./navComponent";
import type { ReactElement } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <NavComponent />
      <main>{children}</main>
    </>
  );
}
