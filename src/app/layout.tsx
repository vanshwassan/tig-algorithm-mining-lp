import type { Metadata } from "next";
import { Instrument_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Algorithm Mining Fellowship",
  description: "Rigorous benchmarking and reproducible algorithmic improvements for neural network training and inference efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
