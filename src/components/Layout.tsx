import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Project Title */}
          <h1 className="text-2xl font-bold tracking-wide cursor">
  <Link href="/">Midterm Project</Link>
</h1>

          {/* Navigation Links */}
          <div className="space-x-6">
            <Link href="/products" className="hover:text-gray-300 transition duration-200">
              Products
            </Link>
            <Link href="/todos" className="hover:text-gray-300 transition duration-200">
              ToDos
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 p-6">
        {children}
      </div>
    </>
  );
};

export default Layout;
