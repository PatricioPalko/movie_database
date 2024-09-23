"use client";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import "./globals.scss";
import StoreProvider from "./StoreProvider";
import ThemeClient from "./ThemeClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeClient>
          <QueryClientProvider client={queryClient}>
            <body className={`${poppins.className} `}>
              <Navbar />
              {children}
            </body>
          </QueryClientProvider>
        </ThemeClient>
      </StoreProvider>
    </html>
  );
}
