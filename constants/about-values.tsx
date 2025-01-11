import { MoneyIcon } from "@/components/icons/MoneyIcon"
import { NearRiderIcon } from "@/components/icons/NearRiderIcon"
import { PercelIcon2 } from "@/components/icons/PercelIcon"
import { TrackingIcon } from "@/components/icons/TrackingIcon"
import {
  MessageCircle,
  PercentIcon,
  TrendingUp,
  WalletIcon,
} from "lucide-react"
import { ReactNode } from "react"
import { AiOutlineSolution } from "react-icons/ai"
import { BsGraphUp } from "react-icons/bs"
import { FcManager } from "react-icons/fc"
import { GiPriceTag } from "react-icons/gi"
import { GrAnalytics } from "react-icons/gr"

export const customerItems: { icon: ReactNode; title: string; body: string }[] =
  [
    {
      icon: <MoneyIcon />,
      title: "Transparent Pricing",
      body: "Fixed prices that won't change at the end of the trip, giving you full control and no surprises.",
    },
    {
      icon: <PercentIcon />,
      title: "Flexible Rates",
      body: "Dynamic pricing that adjusts when needed to maintain service quality, ensuring your delivery always has priority.",
    },
    {
      icon: <TrackingIcon />,
      title: "Realtime Tracking",
      body: "Shareable tracking link allows recipients to monitor the item and rider location in real time, enhancing visibility and security.",
    },
    {
      icon: <NearRiderIcon />,
      title: "Quick Access to Nearby Riders",
      body: "Find available riders quickly, reducing wait times for faster pickups.",
    },
    {
      icon: <PercelIcon2 />,
      title: "Express Delivery",
      body: "Opt for an express service where the rider heads directly to your delivery address without other stops.",
    },
    {
      icon: <NearRiderIcon />,
      title: "Immediate Access to Nearby Riders",
      body: "Find available riders quickly, reducing wait times for faster pickups.",
    },
    {
      icon: <TrackingIcon />,
      title: "Realtime Tracking",
      body: "Shareable tracking link allows recipients to monitor the item and rider location in real time, enhancing visibility and security.",
    },
  ]

export const riderItems: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <MoneyIcon />,
    title: "Cash Delivery Perk",
    body: "Enjoy a free deduction on your first cash-on-delivery transaction every day.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Increased Earnings with Multi-Package Trips",
    body: "Pick up multiple packages along a similar route and maximize your earnings in a single trip.",
  },
  {
    icon: <WalletIcon size={24} />,
    title: "Extra Income from Express Deliveries",
    body: "Earn a premium for express deliveries that require a direct trip to the delivery location.",
  },
  {
    icon: <PercentIcon />,
    title: "Low Commission Rate",
    body: "Benefit from a competitive 20% platform fee, allowing you to keep more of your hard-earned income.",
  },
  {
    icon: <GrAnalytics size={24} />,
    title: "Advanced Analytics",
    body: "Access to analytics that provide insights into earnings, growth, and performance trends.",
  },
  {
    icon: <TrackingIcon />,
    title: "Realtime Tracking",
    body: "Shareable tracking link allows recipients to monitor the item and rider location in real time, enhancing visibility and security.",
  },
  {
    icon: <GiPriceTag size={24} />,
    title: "Transparent Pricing",
    body: "Fixed prices that won't change at the end of the trip, giving you full control and no surprises.",
  },
]

export const logisticsItems: {
  icon: ReactNode
  title: string
  body: string
}[] = [
  {
    icon: <FcManager size={24} />,
    title: "Seamless Logistics Management",
    body: "Centralized platform to create, schedule, monitor, and track all deliveries in real-time, effortlessly handling multiple orders at once.",
  },
  {
    icon: <BsGraphUp size={24} />,
    title: "Real-Time Analytics",
    body: "Gain actionable insights on delivery performance, driver efficiency, and customer satisfaction.",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Integrated Communication",
    body: "Built-in chat and free online calls for instant communication with riders.",
  },
  {
    icon: <AiOutlineSolution size={24} />,
    title: "Scalable Solution",
    body: "Flexible tools designed for small businesses, SMEs, and large enterprises to grow effortlessly.",
  },
  {
    icon: <MoneyIcon />,
    title: "Cost Optimization",
    body: "Smart fuel and route planning with financial data tracking to cut operational costs.",
  },
  {
    icon: <NearRiderIcon />,
    title: "Immediate Access to Nearby Riders",
    body: "Find available riders quickly, reducing wait times for faster pickups.",
  },
  {
    icon: <TrackingIcon />,
    title: "Realtime Tracking",
    body: "Shareable tracking link allows recipients to monitor the item and rider location in real time, enhancing visibility and security.",
  },
]
