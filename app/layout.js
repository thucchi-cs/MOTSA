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
        <footer className="bg-[#072c5c] w-full md:h-100 flex flex-col md:flex-row items-start justify-between px-4 md:px-10 text-zinc-50">
          <NewsSignUp></NewsSignUp>
          <div className="w-full flex flex-col justify-center items-center h-full gap-y-3 md:pl-10">
              <h1 className="text-center text-xl font-bold md:text-2xl">Connect with us</h1>
              <div className="w-[70%] flex flex-col md:flex-row justify-center items-center gap-y-5">
                <div className="w-full flex flex-col justify-start items-center gap-y-5">
                  <a href="/about/board" className="text-center text-lg md:text-xl transition-transform duration-300 underline cursor-pointer">Board of Directors</a>
                  <a href="/students/officers" className="text-center text-lg md:text-xl transition-transform duration-300 underline cursor-pointer">State Officer Team</a>
                  <a href="https://tsaweb.org" target="_blank" className="text-center text-lg md:text-xl transition-transform duration-300 underline cursor-pointer">National TSA</a>
                </div>
                <div className="w-full flex flex-col justify-start items-center gap-y-5">
                  <a href="mailto:contactmotsa@gmail.com" className="text-left text-xl transition-transform duration-300 hover:underline cursor-pointer">contactmotsa@gmail.com</a>
                  <div className="flex flex-row justify-center items-center w-full gap-x-3 py-3">
                    <a href="https://www.instagram.com/missouritsa/" target="_blank" className="text-left text-xl transition-transform duration-300 hover:underline cursor-pointer inline">
                    <Image
                      className="inline invert"
                      src="/insta.png"
                      alt="instagram logo"
                      width={40}
                      height={40}
                      priority
                      />@missouritsa</a>
                  </div>
                </div>
              </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
