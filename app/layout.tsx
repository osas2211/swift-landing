import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { AppContainer } from "@/components/utilities/AppContainer"
import { SmoothScroller } from "@/components/utilities/SmoothScroller"
import { urls } from "@/constants/url"
import { ToastContainer } from "react-toastify"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const bdo_grotesk = localFont({
  src: [
    { path: "./fonts/BDOGrotesk-Light.ttf", weight: "300" },
    { path: "./fonts/BDOGrotesk-Regular.ttf", weight: "400" },
    { path: "./fonts/BDOGrotesk-Medium.ttf", weight: "500" },
    { path: "./fonts/BDOGrotesk-DemiBold.ttf", weight: "600" },
    { path: "./fonts/BDOGrotesk-Bold.ttf", weight: "700" },
    { path: "./fonts/BDOGrotesk-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-bdo",
})

export const metadata = {
  title: {
    default: "SwiftVia Logistics: Experience Fast Dispatch Delivery",
    template: "%s | SwiftVia Logistics",
  },
  description:
    "Find Dispatch Rider Nearby With SwiftVia Logistics, Grow Your Logistics Company, Earn More As A Rider, Live Tracking, Mobile Apps, Powerful Logistics Dashboard!",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: `${urls.base_url}`,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  image:
    "https://res.cloudinary.com/ddr8rihqd/image/upload/v1711286606/logo/dpitj4bpwpdsgb5q8uiw.png",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6CPHSG9VSG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6CPHSG9VSG');
            `,
          }}
        />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bdo_grotesk.variable} font-bdo antialiased lg:px-0 pb-8 mx-auto`}
      >
        <SmoothScroller>
          <AppContainer>{children}</AppContainer>
        </SmoothScroller>
        <ToastContainer />
      </body>
    </html>
  )
}
