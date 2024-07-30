import type { Metadata } from "next";
import {Footer, Navbar} from '@/components/index'
import "./globals.css";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "One Stop Shop for Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
