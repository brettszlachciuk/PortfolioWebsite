import NavComponent from "./navComponent";

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
