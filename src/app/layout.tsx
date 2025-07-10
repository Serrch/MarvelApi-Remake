import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout-components/header/header";
import Footer from "@/components/layout-components/footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marvel API",
  description: "Marvel Api hecha por Serrrch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow pt-40 pb-20 px-4 sm:px-8 md:px-20 lg:px-40">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
