import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/site/language-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://esc-expo.example"),
  title: "معرض سلاسل إمداد الطاقة وتقنيات المستقبل — ESC Expo 2026 | SPARK",
  description:
    "معرض B2B حصري في قطاع الطاقة بمدينة الملك سلمان للطاقة (SPARK). يضم عمالقة النفط والغاز، تقنيات المستقبل Industry 4.0، المقاولات واللوجستيات. احجز مساحتك الآن. An exclusive B2B energy exhibition at King Salman Energy Park (SPARK).",
  keywords: [
    "معارض الطاقة في السعودية",
    "Energy Exhibition Saudi Arabia",
    "ESC Expo 2026",
    "SPARK",
    "مدينة الملك سلمان للطاقة",
    "B2B energy expo",
    "supply chain exhibition",
    "oil and gas exhibition",
    "صناعة الطاقة",
    "المحتوى المحلي",
    "GREEN PROJECTS",
  ],
  authors: [{ name: "GREEN PROJECTS" }],
  openGraph: {
    title: "ESC Expo 2026 — Energy Supply Chains & Future Technologies",
    description:
      "The premier B2B energy exhibition at King Salman Energy Park (SPARK). Where technologies turn into supply contracts.",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESC Expo 2026",
    description: "Energy Supply Chains & Future Technologies Exhibition at SPARK.",
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* IBM Plex Sans Arabic — single professional font family covering
            both Arabic and Latin scripts (no font mixing/overlapping). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-navy-950 text-slate-100">
        <LanguageProvider />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
