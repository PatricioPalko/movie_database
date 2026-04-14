import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/navigation/nav-wrapper";
import ReactQueryProvider from "./ReactQueryProvider";
import ThemeClient from "./ThemeClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Movie Database",
  description: "Browse movies",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeClient>
          <ReactQueryProvider>
            <Navbar />
            {children}
          </ReactQueryProvider>
        </ThemeClient>
      </body>
    </html>
  );
}
