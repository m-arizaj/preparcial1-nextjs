import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Bookstore", description: "Autores" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} app-root`} suppressHydrationWarning>
        <header className="topbar">
          <div className="container">
            <h1>Bookstore</h1>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer container"></footer>
      </body>
    </html>
  );
}
