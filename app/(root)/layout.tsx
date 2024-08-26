import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-col min-h-screen pt-5 px-6 pb-6">
          <div className="w-full max-w-5xl mx-auto mt-16">{children}</div>
        </section>
      </div>
      Toaster
    </main>
  );
};

export default Layout;
