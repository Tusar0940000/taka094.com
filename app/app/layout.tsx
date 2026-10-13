
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taka094.com",
  description: "Welcome to Taka094.com",
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
