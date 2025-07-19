import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quizzy",
  description: "Digital Marketing Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
