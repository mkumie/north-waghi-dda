import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { constructMetadata } from "@/lib/utils";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata({
  title: "North Waghi DDA",
  description: "North Waghi District offical website",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


// border as well as header for mobile nav
// think of a wrapper or something to do with items-center