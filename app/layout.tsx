import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeilSpace — Speak Freely. Stay Unseen.",
  description:
    "A sanctuary for real thoughts. Post anonymously in topic-based Spaces, connect without judgment, and finally say what you actually mean.",
  metadataBase: new URL("https://veils.space"),
  openGraph: {
    title: "VeilSpace — Speak Freely. Stay Unseen.",
    description:
      "A sanctuary for real thoughts. Post anonymously in topic-based Spaces, connect without judgment.",
    url: "https://veils.space",
    siteName: "VeilSpace",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "VeilSpace Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VeilSpace — Speak Freely. Stay Unseen.",
    description:
      "A sanctuary for real thoughts. Post anonymously in topic-based Spaces.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
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
