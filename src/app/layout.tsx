import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Howlil | Software Engineer",
  description: "Sofware Engineer based in the Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`sm:mx-24 mx-8 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-center">
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
