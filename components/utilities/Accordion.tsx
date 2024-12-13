"use client"
import React, { useEffect, useState } from "react"
import gsap from "gsap"

const items = [
  {
    title: "What is SwiftVia?",
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        optio ducimus dolor quaerat sit, natus est odio cum sunt, accusantium
        pariatur dignissimos maiores dolores provident placeat iusto non
        perspiciatis magnam.
      </div>
    ),
  },
  {
    title: "How can I register as a logistics partner with SwiftVia?",
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        optio ducimus dolor quaerat sit, natus est odio cum sunt, accusantium
        pariatur dignissimos maiores dolores provident placeat iusto non
        perspiciatis magnam.
      </div>
    ),
  },
  {
    title: "How does SwiftVia ensure package security during delivery?",
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        optio ducimus dolor quaerat sit, natus est odio cum sunt, accusantium
        pariatur dignissimos maiores dolores provident placeat iusto non
        perspiciatis magnam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Asperiores optio ducimus dolor quaerat sit, natus est odio cum
        sunt, accusantium pariatur dignissimos maiores dolores provident placeat
        iusto non perspiciatis magnam.
      </div>
    ),
  },
]

export const Accordion = () => {
  const [active, setActive] = useState<number | undefined>()
  useEffect(() => {
    gsap.set(".accordion-content", { translateY: "-120%" })
    gsap.set(".accordion-content-container", { height: 0, marginTop: 0 })
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
      <div className="space-y-5">
        {items?.map((item, index) => {
          const isActive = index === active
          return (
            <div key={index} className=" overflow-hidden">
              <div className="bg-secondary rounded-lg transition-all relative z-[20]">
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
