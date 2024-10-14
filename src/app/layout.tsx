import type { Metadata } from "next";
import { Fredoka } from "@next/font/google";

export const metadata: Metadata = {
  title: "Guide Games",
  description: "Organize suas metas em jogos com Guide Games (Coral Island).",
};

const FredokaFont = Fredoka({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={FredokaFont.className}>
      <body>{children}</body>
    </html>
  );
}
