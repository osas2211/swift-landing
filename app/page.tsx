import { HomePage } from "@/components/home/Home"

const images =
  "https://res.cloudinary.com/ddr8rihqd/image/upload/v1711286606/logo/dpitj4bpwpdsgb5q8uiw.png"
export const metadata = {
  title: "SwiftVia Logistics: Experience Fast Dispatch Delivery",
  description:
    "Find Dispatch Rider Nearby With SwiftVia Logistics, Grow Your Logistics Company, Earn More As A Rider, Live Tracking, Mobile Apps, Powerful Logistics Dashboard!",
  openGraph: {
    images,
    title: "SwiftVia Logistics: Experience Fast Dispatch Delivery",
    description:
      "Find Dispatch Rider Nearby With SwiftVia Logistics, Grow Your Logistics Company, Earn More As A Rider, Live Tracking, Mobile Apps, Powerful Logistics Dashboard!",
  },
}



export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
