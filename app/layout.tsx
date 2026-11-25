import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPOT Inverter Repairs | We Fix What Others Replace",
  description:
    "Specialist Deye and Sunsynk inverter repairs in KwaMhlanga, Mpumalanga and Gauteng. Same-day diagnosis and a 30-day repair warranty.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "SPOT Inverter Repairs | We Fix What Others Replace",
    description:
      "Specialist Deye and Sunsynk inverter repairs. Clear diagnosis, honest recommendations, and a repair-first approach.",
    type: "website",
    locale: "en_ZA",
    siteName: "SPOT Inverter Repairs",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPOT Inverter Repairs | We Fix What Others Replace",
    description:
      "Specialist Deye and Sunsynk inverter repairs in Mpumalanga and Gauteng.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
