"use client";

import Footer from "./layout/footer";
import Header from "./layout/header";
import { SearchProvider } from "../contexts/SearchContext";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <div className="w-full h-full bg-white flex flex-col gap-12">
        <div className="w-full h-[150px] fixed top-0 left-0 z-50">
          <Header />
        </div>
        <main className="min-h-screen pt-[150px] bg-white">
          {children}
        </main>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </SearchProvider>
  );
}
