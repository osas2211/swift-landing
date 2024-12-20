import Image from "next/image"
import { Button } from "./Button"
import { ReactNode, useState } from "react"

type TabItem = {
  title: string
  children: ReactNode
}

export const Tabs = ({ tabItems }: { tabItems: TabItem[] }) => {
  const [active, setActive] = useState(0)
  return (
    <div className="">
      <div className="bg-[#EFEFEF] rounded-full px-[9px] py-[5px] w-[300px] flex md:mb-[38px] mb-[30px]">
        {tabItems.map((item, index) => {
          const isActive = index === active
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`${
                isActive
                  ? "bg-[#000] rounded-full text-white md:w-[108px] w-[80px]"
                  : ""
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
