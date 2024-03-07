import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mannu Coaching",
  description: "Mannu Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 text-white font-poppins" >{children}</body>
    </html>
  );
}
