import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "TAKA094.COM — Game Lounge", description: "TAKA094.COM game lounge and rewards experience" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
