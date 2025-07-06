import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


// Define metadata if you need it, or remove this block entirely if not.
export const metadata = {
  title: "A.dev Portfolio",
  description: "Your site description",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#18191b]">
        {/* Header at the top */}
        <Header />
        {/* Main Content */}
        <main className="flex-grow bg-black w-full max-w-full mx-auto px-2 sm:px-4 md:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}