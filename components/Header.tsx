"use client"
import React, { useEffect } from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { Button } from "./utilities/Button"

export const Header = ({ tl }: { tl: gsap.core.Timeline }) => {
  useEffect(() => {
    // tl.fromTo(".up-text", { y: 120 }, { y: 0, stagger: 0.1 })
  }, [])
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-[100]">
      <div className="py-4 w-full flex items-center justify-between 2xl:w-[82%] lg:w-[95%] mx-auto">
        <div>
          <Logo tl={tl} />
        </div>

        <div className="overflow-y-hidden md:block hidden">
          <ul className="flex items-center gap-4 text-[15px] up-text">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Track</Link>
            </li>
            <li>
              <Link href={"/"}>FAQs</Link>
            </li>
            <li>
              <Link href={"/"}>About us</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="overflow-y-hidden md:block hidden">
          <div className="up-text">
            <Button variant="secondary" size="small">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
