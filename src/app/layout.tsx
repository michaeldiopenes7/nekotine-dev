import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nekotine-dev.vercel.app"),
  title: "Christine Flores | UX/UI Designer",
  description:
    "Portfolio of Christine Flores — aspiring UX/UI designer crafting clean, intentional digital experiences.",
  openGraph: {
    title: "Christine Flores | UX/UI Designer",
    description:
      "Portfolio of Christine Flores — aspiring UX/UI designer crafting clean, intentional digital experiences.",
    url: "/",
    siteName: "Christine Flores",
    type: "website",
    images: [
      {
        url: "/assets/hero-wide.png",
        width: 2245,
        height: 1132,
        alt: "Christine Flores — UX/UI Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christine Flores | UX/UI Designer",
    description:
      "Portfolio of Christine Flores — aspiring UX/UI designer crafting clean, intentional digital experiences.",
    images: ["/assets/hero-wide.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable}`} id="top">
        {children}
      </body>
    </html>
  );
}
