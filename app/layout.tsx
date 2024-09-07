import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatScript from "./components/chatScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WSA Council",
  description: "World Standardization and Accreditation Council",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="content">
          {children}
        </div>
        <ChatScript /> {/* Insert the client-side chat script here */}
      </body>
    </html>
  );
}
