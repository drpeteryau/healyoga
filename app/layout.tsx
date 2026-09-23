import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Heal Yoga | Movement for Every Body",
  description: "Accessible, instructor-led yoga demonstrations and public health conversations from the University of Glasgow Heal Yoga initiative.",
  icons: {
    icon: "./favicon.svg",
    shortcut: "./favicon.svg",
  },
  openGraph: {
    title: "Heal Yoga | Movement for Every Body",
    description: "Accessible yoga practice and public health conversations for youth, older adults, and every body.",
    images: [{ url: "./og.jpg", width: 1200, height: 630, alt: "Heal Yoga — Movement for every body." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heal Yoga | Movement for Every Body",
    description: "Accessible yoga practice and public health conversations for youth, older adults, and every body.",
    images: ["./og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
