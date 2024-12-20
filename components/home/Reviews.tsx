"use client"
import { horizontalLoop } from "@/helpers/horizontalScrollHelper"
import { useGSAP } from "@gsap/react"
import { reverse } from "dns"
import gsap from "gsap"
import Image from "next/image"
import React, { RefObject, useEffect, useMemo, useRef } from "react"

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

  const scope: RefObject<HTMLDivElement | null> = useRef(null)

  const sliderRef = useRef<HTMLDivElement | null>(null)
  const sliderRef2 = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cardsContainer = sliderRef.current
    const cardsContainer2 = sliderRef2.current

    if (!cardsContainer) return // Ensure the ref is not null
    if (!cardsContainer2) return // Ensure the ref is not null

    const totalCards = cardsContainer.children.length
    const totalCards2 = cardsContainer2.children.length

    // Clone cards to create a seamless loop
    for (let i = 0; i < totalCards; i++) {
      const clone = cardsContainer.children[i].cloneNode(true)
      cardsContainer.appendChild(clone)
    }
    for (let i = 0; i < totalCards2; i++) {
      const clone = cardsContainer2.children[i].cloneNode(true)
      cardsContainer2.appendChild(clone)
    }

    // Animate the slider
    gsap.to(cardsContainer, {
      x: `-${totalCards * 265}px`, // Width of each card + gap (200px + 16px)
      duration: 17,
      ease: "linear",
      repeat: -1,
    })
    gsap.to(cardsContainer2, {
      x: `-${totalCards2 * 265}px`, // Width of each card + gap (200px + 16px)
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % (totalCards2 * 265)}px`, // Reset position for seamless effect
      },
    })
  }, [])
  return (
    <div>
      <div className="md:mt-[80px] mt-8" ref={scope}>
        <div className="w-[max-content] mb-8 flex" ref={sliderRef}>
          {images.map((image, index) => {
            return (
              <div
                className="!pr-5 review-card_ will-change-transform"
                key={index}
              >
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
          ref={sliderRef2}
          // onClick={() => tl.current.play()}
        >
          {images.map((image, index) => {
            return (
              <div
                className="!pr-[20px] review-card_2 will-change-transform"
                key={index}
              >
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
