import "./globals.css";
import { DM_Sans, Roboto } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import LayoutComponent from "@/components/LayoutComponent";

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
        <meta name="og:title" content="Niraj Deshmukh - Full Stack Developer" />
      </Head>
      <body className="h-[100dvh] bg-dark-alternative selection:bg-dark-secondary selection:text-primary">
        <LayoutComponent>{children}</LayoutComponent>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
