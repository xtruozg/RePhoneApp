"use client";

import HeaderAdmin from "./layout/header";
import Navbar from "./layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <HeaderAdmin />
        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
