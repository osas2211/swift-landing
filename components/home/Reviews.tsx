"use client"
import { horizontalLoop } from "@/helpers/horizontalScrollHelper"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import React, { useEffect, useRef } from "react"

export const Reviews = () => {
  const images = [
    "/assets/user-1.png",
    "/assets/user-2.png",
    "/assets/user-3.png",
    "/assets/person-5.png",
    "/assets/person-1.png",
    "/assets/person-2.png",
    "/assets/person-3.png",
    "/assets/person-4.png",
    "/assets/person-5.png",
    "/assets/user-3.png",
    "/assets/person-4.png",
  ]
  const boxes = gsap.utils.toArray(".review-card_"),
    loop = horizontalLoop(boxes)
  const tl = useRef(horizontalLoop(boxes))
  const scope = useRef(null)

  useEffect(() => {
    tl.current.play()
  })
  return (
    <div>
      <div className="md:mt-[80px] mt-8" ref={scope}>
        <div className="w-[max-content] mb-8 flex">
          {images.map((image, index) => {
            return (
              <div className="!pr-5 review-card_" key={index}>
                {" "}
                <div className="h-[220px] w-[245px] inline-block bg-[#F7F8F3] rounded-xl px-4 py-3 space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-[45px] h-[45px] relative">
                      <Image
                        alt=""
                        src={image}
                        className="rounded-full object-cover w-full h-full"
                        fill
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Timothy Fubara</p>
                      <p className="text-xs text-[#60605E]">Product Owner</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#707070] leading-[18px] italic">
                    My package arrived right on time! Swiftvia made it easy to
                    track the delivery, and the rider was professional and
                    friendly. Couldn&apos;t ask for more
                  </p>
                  <p className="text-xs text-[#707070] leading-[18px] italic">
                    Date: 22nd-Oct-2024
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div
          className="w-[max-content] mb-5 flex"
          // onClick={() => tl.current.play()}
        >
          {images.map((image, index) => {
            return (
              <div className="!mr-[20px] review-card_" key={index}>
                <div className="h-[220px] w-[245px] inline-block bg-[#F7F8F3] rounded-xl px-4 py-3 space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-[45px] h-[45px] relative">
                      <Image
                        alt=""
                        src={image}
                        className="rounded-full object-cover w-full h-full"
                        fill
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Timothy Fubara</p>
                      <p className="text-xs text-[#60605E]">Product Owner</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#707070] leading-[18px] italic">
                    My package arrived right on time! Swiftvia made it easy to
                    track the delivery, and the rider was professional and
                    friendly. Couldn&apos;t ask for more
                  </p>
                  <p className="text-xs text-[#707070] leading-[18px] italic">
                    Date: 22nd-Oct-2024
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
