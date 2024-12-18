"use client"
import { horizontalLoop } from "@/helpers/horizontalScrollHelper"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import React, { useEffect, useRef } from "react"

export const Reviews = () => {
  const images = [
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
    // "/assets/delivery-person-2.png",
  ]
  const boxes = gsap.utils.toArray(".review-card"),
    loop = horizontalLoop(boxes, { paused: true })
  const scope = useRef(null)
  // const tl = useRef(gsap.timeline({ paused: true }))
  // useGSAP(
  //   () => {
  //     tl.current.to(".review-card", {
  //       x: -245 * (images.length * 0.4),
  //       repeat: Infinity,
  //       duration: images.length * 0.5,
  //       yoyo: true,
  //     })
  //   },
  //   { scope }
  // )
  useEffect(() => {
    // tl.current.play()
    // loop.next({ duration: 1, ease: "power1.inOut" })
    loop.toIndex(images.length - 1, {
      duration: 20,
      ease: "power1.inOut",
    })

    // for (let i = 0; i++; i <= images.length - 1) {
    //   loop.toIndex(i, { duration: 1, ease: "power1.inOut" })
    // }
  }, [])
  return (
    <div>
      <div className="" ref={scope}>
        <div className="review-cards-scroll overflow-x-hidden overflow-y-hidden mb-5">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="relative h-[220px] w-[245px] inline-block mr-5 review-card"
              >
                <Image
                  alt=""
                  src={image}
                  // height={220}
                  // width={245}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
