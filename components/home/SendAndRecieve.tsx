"use client"
import Image from "next/image"
import React from "react"

export const SendAndRecieve = () => {
  return (
    <div className="my-[123px] 2xl:w-[82%] lg:w-[95%] w-[100%] mx-auto">
      <p className="text-[58px] leading-[74px] max-w-[627px]">
        Send & Receive Package Anywhere{" "}
      </p>
      <p className="my-[22px] text-[#7C7C7A] max-w-[627px]">
        You can start sending all your package from anywhere and your order will
        be fulfill the same day
      </p>
      <div
        // style={{
        //   backgroundImage: 'url("../assets/delivery-person-2.png")',
        //   backgroundRepeat: "no-repeat",
        //   // backgroundAttachment: "fixed",
        //   backgroundSize: "cover",
        // }}
        className="h-[560px] w-[100%] rounded-xl relative"
      >
        <Image
          src={"/assets/delivery-person-2.png"}
          alt=""
          fill
          className="h-full w-full object- rounded-xl"
        />
      </div>
    </div>
  )
}
