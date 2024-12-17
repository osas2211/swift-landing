"use client"
import React, { useEffect, useRef } from "react"
import { Button } from "./Button"
import { StarIcon } from "../icons/Star"
import { Polygon } from "../icons/Polygon"
import { Rectangle } from "../icons/Rectangle"
import { TriangleIcon } from "../icons/Triangle"
import { CircleIcon } from "../icons/Circle"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export const Newsletter = () => {
  const tl = useRef(gsap.timeline({ paused: true }))
  const scope = useRef(null)
  useGSAP(
    () => {
      tl.current.fromTo(
        ".newsletter-icon",
        { y: -15, rotate: -1 },
        {
          y: 15,
          rotate: 1,
          repeat: Infinity,
          yoyo: true,
          stagger: 0.04,
          ease: "power1.out",
          duration: 1.2,
        }
      )
    },
    { scope }
  )
  useEffect(() => {
    tl.current.play()
  }, [])
  return (
    <div
      className="md:my-[153px] my-[50px] max-w-[870px] mx-auto px-4 relative"
      ref={scope}
    >
      <div className="text-center pt-7 relative z-[1]">
        <h3 className="md:text-[40px] md:leading-[56px] text-[24px] md:leading-[32px] max-w-[599px] mx-auto font-medium">
          Sign up for our newsletter for weekly updates
        </h3>
        <p className="text-[#707070] max-w-[517px] mx-auto mt-[19px]">
          We send out latest update about our product every week and how to grow
          your business with us. Sign up to receive this update
        </p>
      </div>
      <div className="flex items-center gap-4 flex-col max-w-[330px] mx-auto md:mt-[39px] mt-[23px] relative z-[1]">
        <input
          className="w-full outline-none bg-[#F7F8F3] h-[48px] inline-block rounded-full px-[20px] py-[14px] text-[14px]"
          placeholder="Email address"
        />
        <Button className="w-full !rounded-full">Sign up</Button>
      </div>

      <div className="absolute md:top-[-3rem] top-[-2rem] left-[7px]">
        <StarIcon />
      </div>

      <div className="absolute md:top-[-4rem] top-[-2.5rem] right-[7px]">
        <Rectangle />
      </div>
      <div className="absolute md:top-[-4rem] top-[-2.5rem] left-[50%]">
        <Polygon />
      </div>

      <div className="absolute top-[50%] right-[7px]">
        <CircleIcon />
      </div>
      <div className="absolute top-[50%] md:left-[-4rem] left-[7px]">
        <TriangleIcon />
      </div>
    </div>
  )
}
