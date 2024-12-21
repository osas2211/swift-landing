import Image from "next/image"
import { Button } from "./Button"
import { ReactNode, useState } from "react"

type TabItem = {
  title: string
  children: ReactNode
}

export const Tabs = ({
  tabItems,
  centered,
  variant,
  maxWidth,
}: {
  tabItems: TabItem[]
  centered?: boolean
  variant?: "dark" | "light"
  maxWidth?: string
}) => {
  const [active, setActive] = useState(0)
  return (
    <div className="">
      <div
        className={`${
          variant === "light" ? "bg-[#F7F8F3]" : "bg-[#EFEFEF]"
        } rounded-full px-[9px] py-[5px] flex md:mb-[38px] mb-[30px] ${
          centered ? "mx-auto" : ""
        }`}
        style={{ maxWidth: maxWidth || "300px" }}
      >
        {tabItems.map((item, index) => {
          const isActive = index === active
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`${
                isActive
                  ? `${
                      variant === "light"
                        ? "bg-[#ECECEC] text-[#000]"
                        : "bg-[#000] text-white"
                    } rounded-full `
                  : `${variant === "light" ? "text-[#999A97]" : "text-[#000]"}`
              } py-[11px] text-center text-xs w-[108px] cursor-pointer transition-all`}
            >
              {item.title}
            </div>
          )
        })}
      </div>
      <div>{tabItems[active].children}</div>
    </div>
  )
}
