import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const instrumentalSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrumentalSans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-site.com"),
  title: {
    template: "%s | Raviteja Daggupati",
    default: "Raviteja Daggupati",
  },
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${instrumentalSans.variable} font-primary`}>
        {children}
      </body>
      <Toaster richColors position="bottom-center" />
    </html>
  );
}
