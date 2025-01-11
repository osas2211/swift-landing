"use client"
import React from "react"
import { Button } from "../utilities/Button"
import Image from "next/image"

export const Hero = () => {
  return (
    <div className="max-w-[1590px] my-[90px] md:my-[183px] mx-auto px-4 md:px-[70px]">
      <div className="flex gap-7 justify-between md:flex-row flex-col">
        <div className="max-w-[620px]">
          <div className="overflow-hidden">
            <h2 className="text-[24px] md:text-[60px] md:leading-[68px] mb-3 md:mb-5 up-text-get-started">
              Turn Your Time Into <span className="text-[#2E7931]">Money.</span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="text-[#565656] md:text-[16px] md:leading-[22px] text-sm max-w-[527px] up-text-get-started">
              Join our community of riders. Deliver on your schedule, meet new
              people, and boost your earnings—all with one app.
            </p>
          </div>
          <div className="flex items-center xl:flex-row flex-col md:gap-6 gap-3 max-w-[600px] md:mt-[80px] mt-[40px]">
            <div className="overflow-hidden xl:w-auto w-full">
              <Button
                size="large"
                className="up-text xl:w-auto w-full up-text-get-started"
                beforeicon={
                  <Image
                    alt=""
                    src={"/assets/playstore.svg"}
                    height={24}
                    width={24}
                  />
                }
              >
                Download on Playstore
              </Button>
            </div>
            <div className="overflow-hidden xl:w-auto w-full">
              <Button
                size="large"
                className="up-text xl:w-auto w-full up-text-get-started"
                beforeicon={
                  <Image
                    alt=""
                    src={"/assets/apple.svg"}
                    height={24}
                    width={24}
                  />
                }
              >
                Download on Applestore
              </Button>
            </div>
          </div>
        </div>
        <div className="get-started-reveal">
          <div className="md:w-[618px] md:h-[470px] relative w-[300px] h-[300px] justify-self-center">
            <Image
              src={"/assets/swiftvia-phone.png"}
              fill
              alt=""
              className="w-full h-full md:object-cover object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-[70px] md:mt-[153px] get-started-reveal">
        <p className="mb-6 md:mb-[57px] md:text-[18px] text-center">
          Learn more about our product
        </p>
        <div className="relative max-w-[1120px] md:max-w-[1280px] mx-auto">
          <video
            className="w-[100%] h-[320px] md:w-[100%] md:h-[630px] lg:h-[720px] object-cover rounded-xl"
            autoPlay
            loop
            muted
          >
            <source src="/assets/swiftvia.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/70 to-black/0 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}
