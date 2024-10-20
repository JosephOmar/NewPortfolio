import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { useTranslations } from "next-intl";

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

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    locale: string;
  }
}

export const metadata: Metadata = {
  title: "Joseph MT",
  description: "Joseph Omar Meza Torres Dev",
};

export default function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>) {
  const t = useTranslations('Navbar');
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar title={t('home')} about={t('about')} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
