import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fact In Media — Political Campaign & Media Agency | Let's Win Together",
  description:
    "Fact In Media is India's premier political campaign, branding and new-media agency. Strategy, war rooms, digital dominance and ground operations across Andhra Pradesh & Telangana. Your Election, Our Mission.",
  keywords: [
    "Fact In Media",
    "political agency India",
    "election campaign management",
    "political consulting Andhra Pradesh",
    "political strategist Telangana",
    "war room election",
    "digital campaign India",
    "booth level management",
  ],
  authors: [{ name: "Fact In Media" }],
  icons: {
    icon: "/fim/logo.jpg",
  },
  openGraph: {
    title: "Fact In Media — Let's Win Together",
    description:
      "Premier political campaign & new-media agency. Strategy. Content. Ground game. War rooms. Your Election, Our Mission.",
    siteName: "Fact In Media",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1526",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased bg-navy-950 text-cream selection:bg-kesari selection:text-navy-950`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
