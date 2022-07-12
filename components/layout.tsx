import Navigation from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-100% h-100% bg-slate700">
      {children}
      <Navigation />
    </div>
  );
};

export default Layout;
