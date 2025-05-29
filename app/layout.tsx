import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import AppWalletProvider from "@/components/AppWalletProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "No Yeah",
  description: "A decentralized prediction market platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <AppWalletProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Toaster richColors theme="dark" position="bottom-right" />
        </body>
      </html>
      </AppWalletProvider>
    </ClerkProvider>
  );
}
