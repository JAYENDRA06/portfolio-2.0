import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Navbar from "@/components/custom/navbar/navbar";
import Footer from "@/components/custom/footer";
import { Toaster } from "sonner";

const syne = Syne({
  subsets: ['latin'],
  weight: [
    '400', // Regular
    '500', // Medium
    '600', // SemiBold
    '700', // Bold
    '800'  // ExtraBold
  ],
  style: ['normal'], // If you want both normal and italic
  display: 'swap',
  variable: '--font-syne', // Optional: for CSS variable usage
});

export const metadata: Metadata = {
  title: "JAYENDRA AWASTHI",
  description: "Your friendly neighborhood software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${syne.className} antialiased`}
      >
        <Navbar />
        <Toaster />
        <div className="flex flex-col items-center pb-10 mb-5 gap-15">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
