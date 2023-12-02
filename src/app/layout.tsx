import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "@/components/_ui/Sidebar/Sidebar";
import Providers from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco app",
  description: "Gerenciamento de processos da Ecoelétrica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="PT-BR">
      <body className={inter.className}>
        <Providers>
          <div className="h-screen flex flex-row justify-start">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
