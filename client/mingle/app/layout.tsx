import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mingle Chat App",
  description: "Real-time chat application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/login" className="hover:text-purple-500">Login</Link>
          <Link href="/register"className="hover:text-purple-500">Register</Link>
          <Link href="/forgot-password" className="hover:text-purple-500">Forgot</Link>
          <Link href="/chat" className="hover:text-purple-500">Chat</Link>
        </nav>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
