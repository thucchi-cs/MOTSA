import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NewsSignUp from "@/components/NewsSignUp";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Missouri TSA",
  description: "Missouri Technology Student Association provides STEM education and competitions to middle and high schoolers across",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <meta charSet="UTF-8"></meta>
      <body className="min-h-full flex flex-col">{children}
        <footer className="bg-[#030422] w-full md:h-100 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 text-zinc-50">
          <NewsSignUp></NewsSignUp>
          <div className="w-full flex flex-col justify-center items-center md:min-h-20 gap-y-3 md:pl-10">
              <a href="https://tsaweb.org" target="_blank" className="text-left text-lg md:text-xl transition-transform duration-300 hover:underline cursor-pointer">National Technology Student Association</a>
              <a className="text-left text-xl transition-transform duration-300 hover:underline cursor-pointer">email@email.com</a>
              <p className="text-left text-xl">999-999-9999</p>
              <div className="flex flex-row justify-center items-center w-full gap-x-3 py-3">
                <Image
                  className="inline invert"
                  src="/insta.png"
                  alt="Next.js logo"
                  width={40}
                  height={40}
                  priority
                  />
                <a href="https://www.instagram.com/missouritsa/" target="_blank" className="text-left text-xl transition-transform duration-300 hover:underline cursor-pointer inline">@missouritsa</a>
              </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
