import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DockNavigation } from "@/components/ui/dock-navigation";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto sm:mx-auto  px-6 py-6 sm:px-24 md:py-24">
            {children}
          </main>
          <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-10">
            <DockNavigation />
          </nav>
        </ThemeProvider>
      </body>
    </html>
  );
}
