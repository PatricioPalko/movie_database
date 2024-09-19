import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.scss";
import StoreProvider from "./StoreProvider";
import ThemeClient from "./ThemeClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Movie database",
  description: "Created by Patrik Palko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeClient>
          <body className={`${poppins.className} `}>
            <Navbar />
            {children}
          </body>
        </ThemeClient>
      </StoreProvider>
    </html>
  );
}
