import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-Powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        afterSignOutUrl="/"
        appearance={{
          variables:{colorPrimary:'#624cf5'},
          layout: {
            logoImageUrl:'/assets/images/logo-icon.svg'
          },
        }} 
      >
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
