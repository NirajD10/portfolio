import "./globals.css";
import { DM_Sans, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://nirajdeshmukh.com"),
  title: "Niraj Deshmukh - Full Stack Developer",
  description:
    "Explore my diverse portfolio showcasing innovative web development projects. With expertise in Next.js, React.js, Node.js and seamless UI animations and many more technologies.",
  openGraph: {
    title: "Niraj Deshmukh - Full Stack Developer",
    images: ["/OG_image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm_sans.className} ${roboto.className} !scroll-smooth`}
    >
      <body className="h-[100dvh] bg-dark-alternative selection:bg-dark-secondary selection:text-primary">
        <LayoutComponent>{children}</LayoutComponent>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
