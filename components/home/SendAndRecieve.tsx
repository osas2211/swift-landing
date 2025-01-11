/* eslint-disable @next/next/no-img-element */
"use client"
import gsap from "gsap"
import React, { useEffect } from "react"

export const SendAndRecieve = () => {
  useEffect(() => {
    gsap.to(".featured-image-clip", {
      clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
      ease: "expoScale(0.5,7,power2.inOut)",
      duration: 1,
      scrollTrigger: {
        trigger: ".featured-image-clip",
        scrub: true,
        end: window?.matchMedia("(max-width: 760px)")?.matches
          ? "+=470px"
          : "+=580px",
      },
    })
  }, [])
  return (
    <div className="md:my-[123px] my-[70px] max-w-[1590px] mx-auto w-[100%] md:px-[70px] px-4">
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
        className="md:h-[560px] h-[448px] w-[100%] rounded-xl relative featured-image"
      >
        <img
          src={"/assets/delivery-person-2.png"}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
        <div className="featured-image-clip absolute top-0 left-0 bg-[#fff] z-[10] w-full h-full rounded-2xl" />
      </div>
    </div>
  )
}
