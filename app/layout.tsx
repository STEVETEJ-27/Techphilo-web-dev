import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TechPhilo — Empowering the Next Generation of Tech Leaders",
  description:
    "A multi-page premium EdTech SaaS platform equipping schools, teachers, and students with AI, Coding, Robotics, and futuristic STEM learning ecosystems.",
  keywords: [
    "TechPhilo",
    "EdTech",
    "AI Education",
    "STEM Learning",
    "Coding for Kids",
    "School Curriculum",
  ],
  openGraph: {
    title: "TechPhilo — Empowering the Next Generation of Tech Leaders",
    description:
      "Transforming education through AI, Coding, and Robotics programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <Navbar />
          <main style={{ minHeight: "80vh" }}>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
