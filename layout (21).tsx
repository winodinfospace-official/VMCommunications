import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IrisOverlay from "@/components/ui/IrisOverlay";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vision Media Communications — Empowering Brands. Connecting People.",
  description:
    "Vision Media Communications delivers integrated digital, media and IEC solutions for government departments, NGOs, educational institutions and private organizations.",
  openGraph: {
    title: "Vision Media Communications",
    description: "Empowering Brands. Connecting People.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased overflow-x-hidden">
        <IrisOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
