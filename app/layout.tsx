import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { satoshi } from "@/fonts/font";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Utsav Bhattarai - Portfolio",
  description: "A Nextjs Developer, Student and Open-Source contributor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
