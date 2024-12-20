"use client"
import Image from "next/image"
import React from "react"
import { PieChart } from "../icons/PieChart"
import { MoneyTransfer } from "../icons/MoneyTransfer"

export const OurGoal = () => {
  return (
    <div className="md:my-[153px] my-[70px] max-w-[1590px] mx-auto p-4">
      <div className="text-center">
        <p className="text-[#60605E]">Our Goal</p>
        <h2 className="max-w-[741px] mx-auto md:text-[64px] md:leading-[84px] text-[24px] leading-[30px] mt-2 font-medium">
          Dynamic Partnership Across
        </h2>
        <p className="md:my-[32px] my-4 md:text-[18px] md:leading-[26px] text-[#7C7C7A] text-sm max-w-[737px] mx-auto">
          We envision a platform to connect and ensure smooth partnership with
          logistic business across all board
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 md:mt-[76px] max-w-[845px] mx-auto">
        <div className="row-span-2 bg-[#CEFBD0] py-5 px-[18px] rounded-[32px]">
          <div className="relative h-[331px] md:w-[331px] w-full">
            <Image
              alt=""
              src={"/assets/team-success.svg"}
              fill
              className="w-full h-full"
            />
          </div>
          <div className="">
            <p className="md:text-[24px] md:leading-[32px] text-lg max-w-[277px] font-medium">
              Build Support{" "}
              <span className="text-[#246027]">System For All Logistic</span>
            </p>
            <p className="max-w-[95%] mt-3 text-[#454544] md:text-[16px] md:leading-6 text-sm">
              Empowering logistics through a unified support system that
              connects businesses, simplifies operations, and builds a resilient
              community for sustainable growth. Together, we&apos;re shaping a
              logistics network where everyone has the tools, resources, and
              support to succeed, from local operations to global logistics.
            </p>
          </div>
        </div>
        <div className="bg-[#CEFBDD] py-5 px-[18px] rounded-[32px]">
          <div className="">
            <div className="mb-[12px]">
              <PieChart />
            </div>
            <p className="md:text-[24px] md:leading-[32px] text-lg max-w-[277px] font-medium">
              Buisness <span className="text-[#246027]">Growth</span>
            </p>
            <p className="max-w-[95%] mt-3 text-[#454544] md:text-[16px] md:leading-6 text-sm">
              Driving business growth through innovation and support. Our
              mission is to provide the tools, insights, and network needed for
              logistics companies to thrive in an ever-evolving market.
              Together, we foster growth, efficiency, and resilience across the
              industry, enabling businesses to reach new heights.
            </p>
          </div>
        </div>
        <div className="bg-[#E0FBCE] py-5 px-[18px] rounded-[32px]">
          <div className="">
            <div className="mb-[12px]">
              <MoneyTransfer />
            </div>
            <p className="md:text-[24px] md:leading-[32px] text-lg max-w-[277px] font-medium">
              Ensuring Safety and Smooth Transaction
            </p>
            <p className="max-w-[95%] mt-3 text-[#454544] md:text-[16px] md:leading-6 text-sm">
              Committed to creating a secure and seamless experience for every
              transaction. We prioritize safety at every step, making sure your
              logistics journey is efficient, reliable, and worry-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
