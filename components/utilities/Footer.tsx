"use client"
import React from "react"
import { Logo } from "../Logo"
import Link from "next/link"
import { Button } from "./Button"
import moment from "moment"

export const Footer = () => {
  return (
    <>
      <div className="md:mt-[153px] mt-[50px] relative border-y-[1px] border-y-[#F1F1F1] py-6 md:py-[60px]">
        <div className="grid md:grid-cols-[2fr,4fr] gap-2 pb-[4px] max-w-[1590px] mx-auto px-4 md:px-[70px]">
          <div className="mb-[64px]">
            <Logo low_z_index />
          </div>
          <div className="grid md:grid-cols-4 gap-3 md:space-y-0 space-y-[40px]">
            <div>
              <p className="md:text-[18px] font-semibold mb-[24px]">Company</p>
              <ul className="space-y-3 text-[#60605E]">
                <li>
                  <Link href={""}>Service</Link>
                </li>
                <li>
                  <Link href={"/track"}>Track</Link>
                </li>
                <li>
                  <Link href={""}>Logistics Partner</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="md:text-[18px] font-semibold mb-[24px]">
                Resources
              </p>
              <ul className="space-y-3 text-[#60605E]">
                <li>
                  <Link href={"/about"}>Our App</Link>
                </li>
                <li>
                  <Link href={"/faqs"}>FAQs</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="md:text-[18px] font-semibold mb-[24px]">About Us</p>
              <ul className="space-y-3 text-[#60605E]">
                <li>
                  <Link href={""}>Our Story</Link>
                </li>
                <li>
                  <Link href={""}>Support</Link>
                </li>
                <li>
                  <Link href={""}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={""}>Terms & Condition</Link>
                </li>
              </ul>
            </div>

            <div>
              <Button variant="secondary">Let&apos; Talk</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:p-6 p-4 pb-0">
        <p className="text-center text-[#999A97] text-xs">
          &copy; {moment().format("YYYY")}. SwiftVia Logistic Limited
        </p>
      </div>
    </>
  )
}
