import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "오카시오 디자인 | 감각적인 인테리어 & 시설유지보수",
  description: "오카시오 디자인은 감각적이고 실용적인 인테리어 디자인과 시설유지보수 서비스를 제공합니다. 공간에 가치를 더하는 전문가와 상담하세요.",
  keywords: "인테리어, 시설유지보수, 오카시오 디자인, 공간 디자인, 리모델링",
  openGraph: {
    title: "오카시오 디자인 | 감각적인 인테리어",
    description: "공간에 가치를 더하는 감각적인 인테리어 전문 업체",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
