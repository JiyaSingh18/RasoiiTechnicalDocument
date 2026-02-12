import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasoii — Technical Documentation",
  description: "Comprehensive technical documentation for Rasoii app architecture, RevenueCat integration, and implementation details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.node;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
