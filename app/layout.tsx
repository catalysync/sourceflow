import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sourceflow | Home",
  description: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-light-sepia text-lg leading-5 text-pure-dark-gray`}
      >
        {children}
      </body>
    </html>
  );
}
