import Link from "next/link";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="p-4 bg-gray-100 flex justify-center gap-4 text-black">
        <Link href="/">Home</Link>
        <Link href="/user/contact">Contact</Link>
      </nav>
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
