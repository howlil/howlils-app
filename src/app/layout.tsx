import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GridBackground from "@/components/ui/Grid";

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
        className={`sm:mx-24 mx-8 ${geistSans.variable} overflow-hidden ${geistMono.variable} antialiased`}
      >
       <GridBackground size={96} lineColor="rgba(247, 247, 247, 0.1)" opacity="0.5" />
        <nav className="flex mt-6 justify-center">
          <Navbar />
        </nav>
        <main className="mt-12">
        {children}
        </main>
      </body>
    </html>
  );
}
