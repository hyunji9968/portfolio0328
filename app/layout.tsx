import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyeonji Kim | Developer Portfolio",
  description:
    "A single-page developer portfolio built with Next.js, featuring selected projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
