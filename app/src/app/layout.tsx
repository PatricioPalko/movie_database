import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { auth } from "./auth";
import Navbar from "./components/navigation/nav-wrapper";
import Providers from "./providers";
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

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers session={session}>
          <ThemeClient>
            <ReactQueryProvider>
              <Navbar />
              {children}
            </ReactQueryProvider>
          </ThemeClient>
        </Providers>
      </body>
    </html>
  );
}
