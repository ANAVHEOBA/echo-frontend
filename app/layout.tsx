import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echo - Autonomous CRM",
  description: "Make your existing CRM autonomous. Reap the benefits of a well-kept CRM without the headache of managing one.",
  icons: {
    icon: [
      { url: "/images/ox5Y6MC8yeG6MMXF17EzDqCCrHY.png", media: "(prefers-color-scheme: light)" },
      { url: "/images/ZKP6MNo9PpxFlLIMN8FTgRzxH8.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/images/FZeCVLnfHurhDXgyEfe7OY9PtTQ.png",
  },
  openGraph: {
    type: "website",
    title: "Echo",
    description: "Make your existing CRM autonomous. Reap the benefits of a well-kept CRM without the headache of managing one.",
    images: ["/images/FD3VMuR9IVzJjE9ubGfoi6QGgOE.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo",
    description: "Make your existing CRM autonomous. Reap the benefits of a well-kept CRM without the headache of managing one.",
    images: ["/images/FD3VMuR9IVzJjE9ubGfoi6QGgOE.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
