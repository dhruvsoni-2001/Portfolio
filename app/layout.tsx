import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
  title: "Dhruv's Portfolio",
  description: "Modern Portfolio Template",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
