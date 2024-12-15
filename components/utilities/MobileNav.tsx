"use client"
import gsap from "gsap"
import React, { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import moment from "moment"
import { Button } from "./Button"
import { usePathname } from "next/navigation"

gsap.registerPlugin(useGSAP)

export const MobileNav = () => {
  const navLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "",
      name: "Track",
    },
    {
      path: "",
      name: "Faqs",
    },
    {
      path: "",
      name: "About us",
    },
    {
      path: "",
      name: "Contact",
    },
  ]
  const pathname = usePathname()
  const tl = useRef(gsap.timeline({ paused: true }))
  const container = useRef(null)
  const [showNav, setShowNav] = useState(false)
  const toggleNav = () => setShowNav(!showNav)

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to("#line-two", { x: "-43px" })
        .to(
          "#line-one",
          {
            y: 7,
            rotate: "-225deg",
            transformOrigin: "center",
            // ease: "power4.inOut",
          },
          "<"
        )
        .to(
          "#line-three",
          {
            y: -7,
            rotate: "225deg",
            transformOrigin: "center",
            // ease: "power4.inOut",
          },
          "<"
        )
        .to(
          "#mobile-nav",
          {
            clipPath: "circle(150.2% at 100% 0)",
            ease: "circ.out",
            duration: 0.7,
          },
          "<"
        )
        .fromTo(
          ".nav-up-text",
          { y: "120%", display: "block" },
          { y: 0, stagger: 0.1, duration: 0.4 },
          "<0.2"
        )
    },
    { scope: container }
  )
  useEffect(() => {
    if (showNav) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [showNav])
  return (
    <div className="md:hidden block" ref={container}>
      <div className="relative z-[200]">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={toggleNav}
        >
          <g id="hamburger 1" clipPath="url(#clip0_2048_2)">
            <path
              id="Vector"
              d="M38 0H4C1.79086 0 0 1.79086 0 4V38C0 40.2091 1.79086 42 4 42H38C40.2091 42 42 40.2091 42 38V4C42 1.79086 40.2091 0 38 0Z"
              fill="#1B481D"
            />
            <g id="line-one">
              <path
                id="Vector_2"
                d="M13 14H29"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="line-two">
              <path
                id="Vector_3"
                d="M13 21H29"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <g id="line-three">
              <path
                id="Vector_4"
                d="M13 28H29"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2048_2">
              <rect width="42" height="42" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        className="fixed top-0 left-0 w-screen h-screen bg-secondary flex flex-col justify-between "
        id="mobile-nav"
      >
        <div className="mt-[140px]">
          <ul className="flex flex-col gap-0 text-[15px] px-5 text-[38px] leading-[47px] tracking-[0.5px] font-[300] uppercase">
            {navLinks?.map((nav, index) => {
              const isActive = nav.path === pathname
              return (
                <li
                  className={`overflow-hidden relative ${
                    isActive ? "font-[300]" : ""
                  }`}
                  key={index}
                >
                  <Link
                    className="nav-up-text relative"
                    href={nav.path}
                    onClick={toggleNav}
                  >
                    <span>{nav.name}</span>
                    {/* {isActive && (
                      <div className="absolute top-[50%] left-[0px] translate-[-50%,-50%] bg-secondary w-full h-[5px]"></div>
                    )} */}
                  </Link>
                </li>
              )
            })}

            <li className="overflow-hidden mt-6">
              <Button variant="primary" size="small" className="nav-up-text">
                Get started
              </Button>
            </li>
          </ul>
        </div>

        <div className="text-[12px] uppercase grid grid-cols-[1fr,120px,1fr] gap-2 p-5 pb-16 font-medium">
          <div className="flex flex-col">
            <Link href={""} target="_blank">
              X <span className="text-[10px]">&#8599;</span>
            </Link>
            <Link href={""} target="_blank">
              instagram <span className="text-[10px]">&#8599;</span>
            </Link>
            <Link href={""} target="_blank">
              facebook <span className="text-[10px]">&#8599;</span>
            </Link>
            <Link href={""} target="_blank">
              playstore <span className="text-[10px]">&#8599;</span>
            </Link>
            <Link href={""} target="_blank">
              applestore <span className="text-[10px]">&#8599;</span>
            </Link>
          </div>
          <div className="flex flex-col justify-end">
            <Link href={"mailto:contact@swiftvia.com"} target="_blank">
              contact@swiftvia.com
            </Link>
            <p>234 906 6084 602</p>
          </div>

          <div className="flex justify-end items-end flex-col">
            <p>&copy; {moment().format("YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
