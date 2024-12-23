"use client"
import React, { ReactNode, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const Accordion = ({
  items,
}: {
  items: {
    title: string
    content: ReactNode
  }[]
}) => {
  const [active, setActive] = useState<number | undefined>()
  useEffect(() => {
    gsap.set(".accordion-content", { translateY: "-120%" })
    gsap.set(".accordion-content-container", { height: 0, marginTop: 0 })
    gsap.fromTo(
      ".accordion-header",
      { x: "120%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "bounce.out",
        duration: 0.5,
        scrollTrigger: ".accordion-header",
      }
    )
  }, [])
  const showItem = (index: number) => {
    gsap.to(`.accordion-plus`, {
      rotate: 0,
      transformOrigin: "center center",
    })
    gsap.to(`.accordion-content`, {
      translateY: "-120%",
    })
    gsap.to(".accordion-content-container", { height: 0, marginTop: 0 })
    if (active !== index) {
      const tl = gsap.timeline()
      tl.to(
        `#accordion-plus${index}`,
        {
          rotate: -135,
          transformOrigin: "center center",
        },
        "<"
      )
        .to(
          `#accordion-content${index}`,
          {
            translateY: "0px",
          },
          "<"
        )
        .to(
          `#accordion-content-container${index}`,
          {
            height: "auto",
            marginTop: -8,
          },
          "<"
        )
    } else {
      const tl = gsap.timeline()
      tl.to(
        `.accordion-plus${index}`,
        {
          rotate: 0,
          transformOrigin: "center center",
        },
        "<"
      )
        .to(
          `#accordion-content${index}`,
          {
            translateY: "-120%",
          },
          "<"
        )
        .to(
          `#accordion-content-container${index}`,
          {
            height: 0,
            marginTop: 0,
          },
          "<"
        )
    }
    setActive((prev) => {
      const isActive = prev === index
      if (isActive) {
        return undefined
      } else {
        return index
      }
    })
  }
  return (
    <>
      <div className="space-y-5" id="swift-accordion">
        {items?.map((item, index) => {
          const isActive = index === active
          return (
            <div key={index} className=" overflow-hidden">
              <div className="bg-secondary rounded-lg transition-all relative z-[20] accordion-header">
                <div
                  onClick={() => {
                    showItem(index)
                  }}
                  className="cursor-pointer hover:bg-primary/15 py-5 px-7 rounded-lg transition-all duration-75 md:text-lg text-[14px] flex items-center justify-between"
                >
                  <p className="">{item.title}</p>
                  <p
                    className={`text-3xl accordion-plus font-thin`}
                    id={`accordion-plus${index}`}
                  >
                    +
                  </p>
                </div>
              </div>

              {
                <div
                  className="overflow-hidden accordion-content-container"
                  id={`accordion-content-container${index}`}
                >
                  <div
                    className="py-5 px-7 bg-secondary accordion-content rounded-lg text-[12px] md:text-[16px]"
                    id={`accordion-content${index}`}
                  >
                    {item?.content}
                  </div>
                </div>
              }
            </div>
          )
        })}
      </div>
    </>
  )
}
