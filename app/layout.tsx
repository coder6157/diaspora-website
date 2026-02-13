import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diaspora - Financial Reasoning Layer for Outpatient Clinics",
  description: "Pre-admission reimbursement prediction for behavioral health outpatient clinics. Turn reimbursement from a post-care surprise into a pre-admission decision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>{children}</body>
    </html>
  );
}
