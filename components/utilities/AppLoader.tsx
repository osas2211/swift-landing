"use client"
import React, { useContext, useEffect, useRef, useState } from "react"
import { Logo } from "../Logo"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { RiderIcon } from "../icons/Rider"
import { LoadingContext } from "@/context/loadingContext"
import { useLoader } from "@/hooks/useLoader"

export const AppLoader = ({}: {}) => {
  const { loading, setLoading } = useLoader()

  const tl = useRef(gsap.timeline({ paused: true }))
  const container = useRef(null)

  const [count, setCount] = useState(0) // Start at 1%

  useGSAP(
    () => {
      tl.current
        .to(".loader-screen-details", {
          y: -80,
          opacity: 0,
          // delay: 0.2,
          stagger: 0.1,
        })

        .to("#loader-screen-1", {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        })
        .to("#loader-screen-2", {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
          onComplete: function () {
            setLoading(false)
          },
        })
    },
    {
      scope: container,
    }
  )
  useEffect(() => {
    // const progress = Number(tl.current.progress() * 100).toFixed(0)
    // setCount(Number(progress))

    const duration = 2000 // Total duration in ms (2 seconds)
    const interval = 20 // Update every 20ms
    const increment = 100 / (duration / interval) // Amount to increment per interval

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= 100) {
          tl.current.play()
          clearInterval(timer) // Stop the timer once we reach 100
          return 100
        }
        return prev + increment
      })
    }, interval)

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])
  return (
    <div ref={container}>
      <div
        id="loader-screen-2"
        className="fixed bg-[#CEFBD0] top-0 left-0 h-screen w-screen z-[3000]"
      ></div>
      <div
        className="fixed bg-primary/100 top-0 left-0 h-screen w-screen flex flex-col gap-2 justify-center items-center text-white z-[3100]"
        id="loader-screen-1"
      >
        <div className="flex items-center justify-center md:gap-[150px] gap-7 loader-screen-details">
          {/* <p className="md:text-2xl text-lg">Loading</p> */}
          <div>
            <Logo textColor="white" />
          </div>
          {/* <p className="md:text-2xl text-lg w-[50px]">{count}%</p> */}
        </div>
        <div>
          <div
            className="loader-screen-details"
            style={{ transform: `translateX(${100 - count}%)` }}
          >
            <RiderIcon color="white" />
          </div>
          <div
            className="md:w-[450px] w-[90vw] h-[6px] bg-white relative loader-screen-details"
            id="loading-bar"
          >
            <div
              style={{
                background: "rgba(0,0,0,0.4)",
                width: `${100 - count}%`,
              }}
              className="absolute top-0 left-0 h-full"
            />
            <p className="absolute bottom-[-20px] right-0 text-sm">{count}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
