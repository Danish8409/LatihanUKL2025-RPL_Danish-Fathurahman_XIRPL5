import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Presensi App",
  description: "Frontend Presensi Online",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
