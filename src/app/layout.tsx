import type { Metadata } from "next";
import { Syne, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const syne = Syne({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CLiCKCO | Logo Design & Web Development",
  description: "CLiCKCO designs bold logos and high-performing websites that help brands stand out and convert.",
  keywords: ["logo design", "web design", "web development", "brand identity", "CLiCKCO"],
  openGraph: {
    title: "CLiCKCO | Logo Design & Web Development",
    description: "CLiCKCO designs bold logos and high-performing websites that help brands stand out and convert.",
    url: "https://clickco.vercel.app",
    siteName: "CLiCKCO",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CLiCKCO - Logo Design & Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLiCKCO | Logo Design & Web Development",
    description: "CLiCKCO designs bold logos and high-performing websites that help brands stand out and convert.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLiCKCO | Logo Design & Web Development",
    description: "CLiCKCO designs bold logos and high-performing websites that help brands stand out and convert.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickCo | Logo Design & Web Development",
    description: "ClickCo designs bold logos and high-performing websites that help brands stand out and convert.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
