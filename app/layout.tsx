import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageRoot } from "@/contexts/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageRoot>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </LanguageRoot>
      </body>
    </html>
  );
}