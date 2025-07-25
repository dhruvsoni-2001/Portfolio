import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({subsets: ["latin"]});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Dhruv's Portfolio",
  description: "Mordern Portfolio Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}      >
        {children}
      </body>
    </html>
  );
}
