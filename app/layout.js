import ActiveSectionContextProvider from "@/context/active-section-context";
import "./globals.css";
import { DM_Sans, Roboto } from "next/font/google";
import Header from "@/components/Header";
import ConnectSection from "@/components/ConnectSection";
import MouseCursor from "@/components/MouseCursor";
import BackgroundSound from "@/components/BackgroundSound";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "300",
});

export const metadata = {
  title: "Niraj Deshmukh - Full Stack Developer",
  description:
    "Explore my diverse portfolio showcasing innovative web development projects. With expertise in Next.js, React.js, Node.js and seamless UI animations and many more technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm_sans.className} ${roboto.className} !scroll-smooth`}
    >
      <Head>
        <meta property="og:image" content="/OG_image.png" />
      </Head>
      <body className="h-[100dvh] bg-dark-alternative selection:bg-dark-secondary selection:text-primary">
        <BackgroundSound />
        <ActiveSectionContextProvider>
          <MouseCursor />
          <main className="bg-dark-primary relative z-10 flex flex-col justify-center items-center text-primary overflow-x-hidden rounded-b-[3.5rem] sm:rounded-b-[4.5rem] border-b-4 border-b-neutral-800">
            <Header />
            {children}
          </main>
          <ConnectSection />
        </ActiveSectionContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
