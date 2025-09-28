import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jayesh Shinde - Data Analyst & Full Stack Developer",
    template: "%s | Jayesh Shinde"
  },
  description: "Data Analyst & Full Stack Developer specializing in Qlik, Snowflake, Python, and React. Building scalable data pipelines and modern web applications.",
  keywords: [
    "Data Analyst",
    "Full Stack Developer",
    "Python Developer", 
    "React Developer",
    "Qlik",
    "Snowflake",
    "ETL",
    "Data Engineering",
    "Next.js",
    "Portfolio"
  ],
  authors: [{ name: "Jayesh Shinde" }],
  creator: "Jayesh Shinde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jayesh.dev",
    title: "Jayesh Shinde - Data Analyst & Full Stack Developer",
    description: "Data Analyst & Full Stack Developer specializing in Qlik, Snowflake, Python, and React.",
    siteName: "Jayesh Shinde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Shinde - Data Analyst & Full Stack Developer",
    description: "Data Analyst & Full Stack Developer specializing in Qlik, Snowflake, Python, and React.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
