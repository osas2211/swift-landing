"use client"
import Image from "next/image"
import React from "react"

export const SendAndRecieve = () => {
  return (
    <div className="md:my-[123px] my-[70px] max-w-[1590px] mx-auto w-[100%] mx-auto px-4">
      <p className="md:text-[58px] md:leading-[74px] text-[36px] leading-[54px] max-w-[627px]">
        Send & Receive Package Anywhere{" "}
      </p>
      <p className="my-[22px] text-[#7C7C7A] max-w-[500px] md:text-[16px] text-sm">
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
        className="md:h-[560px] h-[448px] w-[100%] rounded-xl relative"
      >
        <Image
          src={"/assets/delivery-person-2.png"}
          alt=""
          fill
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </div>
  )
}
