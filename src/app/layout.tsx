// src/app/layout.tsx
import "@/styles/globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/sidebar"; // note the import alias

export const metadata = {
  title: "MedFlow",
  description: "Therapy Practice Management App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 text-gray-900">
        <aside className="w-64 bg-white border-r p-4">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
