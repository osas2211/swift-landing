"use client"
import React, { useEffect } from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { Button } from "./utilities/Button"
import { MobileNav } from "./utilities/MobileNav"

export const Header = ({ tl }: { tl?: gsap.core.Timeline }) => {
  useEffect(() => {
    // tl.fromTo(".up-text", { y: 120 }, { y: 0, stagger: 0.1 })
  }, [])
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-[100]">
      <div className="py-4 w-full flex items-center justify-between max-w-[1590px] mx-auto pr-4 md:px-[70px] px-4 md:pl-[60px]">
        <div>
          <Logo tl={tl} />
        </div>

        <div className="overflow-y-hidden md:block hidden">
          <ul className="flex items-center gap-10 text-[15px] up-text-nav">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/track"}>Track</Link>
            </li>
            <li>
              <Link href={"/faqs"}>FAQs</Link>
            </li>
            <li>
              <Link href={"/about"}>About us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="overflow-y-hidden md:block hidden">
          <div className="up-text-nav">
            <Link href={"/get-started"}>
              <Button variant="secondary" size="small">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        <MobileNav />
      </div>
    </div>
  )
}
