import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { constructMetadata } from "@/lib/utils";
import Header from "@/components/header/Header";
import ComponentWrapper from "@/components/ComponentWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata({
  title: "North Waghi DDA",
  description: "North Waghi District Offical Website",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pl-2 pr-2`}>
        <Header />
        {/* <ComponentWrapper className="pl-2 pr-2"> */}
        {children}
        {/* </ComponentWrapper> */}
        <Footer />
      </body>
    </html>
  );
}
