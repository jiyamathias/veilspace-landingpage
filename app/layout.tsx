import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeilSpace — Speak Freely. Stay Unseen.",
  description: "A safe space for honest conversations. Post anonymously in topic-based Spaces, connect without judgment, and finally say what you actually mean.",
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
