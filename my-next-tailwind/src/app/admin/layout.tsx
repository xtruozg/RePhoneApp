"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/admin/dashboard" className={path.includes("dashboard") ? "text-blue-400" : ""}>
            Dashboard
          </Link>
          <Link href="/admin/users" className={path.includes("users") ? "text-blue-400" : ""}>
            Users
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
