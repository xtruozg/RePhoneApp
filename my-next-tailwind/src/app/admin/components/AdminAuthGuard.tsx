"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isLoggedIn } from "@/app/utils/auth";

export default function AdminAuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if current path is login page
    if (pathname === "/admin/login") {
      setIsChecking(false);
      return;
    }

    // Check if user is logged in
    if (!isLoggedIn()) {
      router.push("/admin/login");
      return;
    }

    setIsChecking(false);
  }, [pathname, router]);

  // Show loading while checking authentication
  if (isChecking && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-blue-600 rounded-full animate-spin-slow mx-auto" style={{ animationDirection: 'reverse' }}></div>
          </div>
          <p className="mt-4 text-gray-600 font-medium">Đang kiểm tra quyền truy cập...</p>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 1.5s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
