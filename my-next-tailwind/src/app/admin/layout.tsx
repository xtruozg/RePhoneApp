"use client";

import { usePathname } from "next/navigation";
import HeaderAdmin from "./layout/header";
import Navbar from "./layout/navbar";
import AdminAuthGuard from "./components/AdminAuthGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <AdminAuthGuard>
      {isLoginPage ? (
        <>{children}</>
      ) : (
        <div className="flex min-h-screen justify-between">
          <div className="w-[10%] border-r border-gray-300">
            <Navbar />
          </div>
          <div className="w-[90%] flex flex-col">
            <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] h-[100px]">
              <div className="w-[95%] m-auto flex items-center h-full">
                <HeaderAdmin />
              </div>
            </div>
            <div className="w-[95%] h-full m-auto pt-10">
              <main>{children}</main>
            </div>
          </div>
        </div>
      )}
    </AdminAuthGuard>
  );
}
