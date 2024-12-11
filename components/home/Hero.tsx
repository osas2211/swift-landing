"use client"
import React, { useEffect } from "react"
import { MeetLine } from "./MeetLine"
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin"
import { Button } from "../utilities/Button"
import Image from "next/image"
import { SideImage } from "./SideImage"
import { SideImageMobile } from "./SideImageMobile"
import { MeetLineMobile } from "./MeetLineMobile"

gsap.registerPlugin(TextPlugin)

export const Hero = ({ tl }: { tl: gsap.core.Timeline }) => {
  useEffect(() => {
    // gsap.to(".meet-text", {
    //   text: "Meets",
    //   duration: 1,
    // })

    tl.fromTo("#home-hero", { opacity: 0 }, { opacity: 1, duration: 0.1 })
      .fromTo(".up-text", { y: 120 }, { y: 0, stagger: 0.1, ease: "circ.out" })
      // .set("#image-1", { x: "60%", y: "81%" })
      // .set("#image-2", {
      //   x: "-100%",
      //   y: "50%",
      // })
      // .set("#image-3", { x: "10%", y: "-80%" })
      .fromTo(
        ".reveal-display",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "circ.out" },
        "<-0.03"
      )
      .fromTo(
        ".reveal-display-2",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }
      )
      .fromTo(
        "#image-1",
        { x: "60%", y: "81%" },
        {
          x: "0%",
          y: "0%",
          duration: 0.4,
          ease: "circ.out",
          // delay: 3,
        },
        "<"
      )
      .fromTo(
        "#image-2",
        {
          x: "-100%",
          y: "50%",
        },
        {
          x: "0%",
          y: "0%",
          duration: 0.4,
          ease: "circ.out",
        },
        "<"
      )
      .fromTo(
        "#image-3",
        { x: "10%", y: "-80%" },
        {
          x: "0%",
          y: "0%",
          duration: 0.4,
          ease: "circ.out",
        },
        "<"
      )
  }, [])
  return (
    <div
      className="flex items-center md:gap-9 gap-5 justify-between lg:flex-row flex-col"
      id="home-hero"
    >
      <div className="2xl:w-[44%] md:w-[50%]">
        <p className="2xl:text-[76px] 2xl:leading-[90px] lg:text-[60px] lg:leading-[80px] md:text-[54px] md:leading-[70px] text-[32px] leading-[44px] tracking-[-1.5px]">
          <span className=" m-0 p-0 inline-block overflow-hidden">
            <span className=" m-0 p-0 inline-block relative up-text">
              <span>
                Speed{" "}
                <span className=" m-0 p-0 inline-block meet-text relative">
                  Meets
                  <MeetLine />
                  <MeetLineMobile />
                </span>
              </span>
            </span>
          </span>{" "}
          <br className="lg:inline-block hidden" />
          <span className=" m-0 p-0 inline-block overflow-hidden">
            <span className=" m-0 p-0 inline-block up-text">
              Delivery, <span className="md:inline hidden">Get</span>
            </span>
          </span>
          <br className="lg:inline-block hidden" />
          <span className=" m-0 p-0 inline-block overflow-hidden">
            <span className=" m-0 p-0 inline-block up-text">
              <span className="md:hidden inline">Get</span> Package ASAP!
            </span>
          </span>
          <br />
          <span className="inline-block overflow-hidden">
            <span className="bg-secondary rounded-md relative  m-0 p-0 inline-block up-text">
              <span className="overflow-hidden  m-0 p-0 inline-block">
                Dispatch Nearby!
              </span>
            </span>
          </span>
        </p>
        <div className="overflow-hidden">
          <p className="md:my-[36px] my-5 text-[#7C7C7A] up-text md:text-[16px] text-sm">
            Deliver packages swiftly and manage logistics with ease. From
            booking to tracking, it&apos;s all in your hands for fast, reliable
            service.
          </p>
        </div>
        <div className="flex items-center md:flex-row flex-col md:gap-6 gap-3">
          <div className="overflow-hidden md:w-auto w-full">
            <Button
              size="large"
              className="up-text md:w-auto w-full"
              beforeicon={
                <Image
                  alt=""
                  src={"/assets/playstore.svg"}
                  height={24}
                  width={24}
                />
              }
            >
              Download on Playstore
            </Button>
          </div>
          <div className="overflow-hidden md:w-auto w-full">
            <Button
              size="large"
              className="up-text md:w-auto w-full"
              beforeicon={
                <Image
                  alt=""
                  src={"/assets/apple.svg"}
                  height={24}
                  width={24}
                />
              }
            >
              Download on Applestore
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <SideImage />
        <SideImageMobile />
      </div>
    </div>
  )
}
