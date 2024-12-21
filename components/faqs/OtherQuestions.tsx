"use client"
import React from "react"
import { Button } from "../utilities/Button"
import Link from "next/link"
import Image from "next/image"

export const OtherQuestions = () => {
  return (
    <div className="md:my-[143px] my-[70px] bg-[#123014] overflow-hidden">
      <div className="max-w-[1590px] mx-auto p-4 flex md:flex-row flex-col gap-10 md:items-center md:justify-between lg:py-[90px] py-[50px] lg:px-[70px] px-4">
        <div>
          <h2 className="text-white md:text-[64px] md:leading-[82px] font-medium text-[24px] leading-[30px] md:max-w-[520px] max-w-[70vw]">
            Still Have Other Question To Ask Us?
          </h2>
          <div className="md:mt-[88px] mt-[20px]">
            <Link href="/contact">
              <Button variant="secondary" size="large" className="!bg-white">
                Contact us
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <div className="md:w-[653px] md:h-[621px] relative w-[300px] h-[300px] justify-self-center">
            <Image
              src={"/assets/faq-girl.png"}
              fill
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
