"use client"
import Link from "next/link"
import React from "react"
import { GoCheckCircleFill } from "react-icons/go"

export const TrackingDetails = () => {
  return (
    <div className="max-w-[1590px] mx-auto md:my-[153px] my-[120px] md:px-[70px] px-4">
      <div className="my-6 md:my-11">
        <Link href={"/track"}>
          <div className="inline-flex gap-2 items-center">
            <p className="font-sans font-extrabold rotate-180 inline-block">
              &#10141;
            </p>
            <p>Back</p>
          </div>
        </Link>
      </div>

      <div>
        <p className="md:text-2xl text-lg my-5 md:my-9">Order information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="font-medium text-xs">Order Number:</p>
              <p className="text-xs text-[#60605E]">35788456733</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="font-medium text-xs">Order Date:</p>
              <p className="text-xs text-[#60605E]">21st Nov, 2024</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="font-medium text-xs">Amount Paid:</p>
              <p className="text-xs text-[#60605E]">₦2,500.00</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="font-medium text-xs">Pickup Address:</p>
              <p className="text-xs text-[#60605E]">
                12 olayanju street, off ijesha-tedo. Lagos state
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="font-medium text-xs">Status:</p>
              <p className="text-xs text-[#10617A]">In-Transit</p>
            </div>
          </div>
          <div className="text-xs space-y-4">
            <div className="grid grid-cols-[130px,auto] md:gap-[54px] gap-[27px] h-auto">
              <div className="flex gap-[12px] h-[100%]">
                <div className="flex flex-col items-center gap-[6px]">
                  <GoCheckCircleFill className="text-[#37913B] text-3xl" />
                  <div className="w-[2px] h-[100%] bg-[#37913B]" />
                </div>
                <div>
                  <p>Nov 15, 2024</p>
                  <p className="text-[11px] text-[#60605E] mt-[2px]">10:50</p>
                </div>
              </div>
              <div>
                <p>Delivery Request Created</p>
                <div className="text-[11px] text-[#60605E] mt-[2px]">
                  <p className="">Pickup: Ojota </p>
                  <p>Payment: cash/card</p>
                  <p>Amount: ₦2,500.00</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[130px,auto] md:gap-[54px] gap-[27px] h-auto">
              <div className="flex gap-[12px] h-[100%]">
                <div className="flex flex-col items-center gap-[6px]">
                  <GoCheckCircleFill className="text-[#37913B] text-3xl" />
                  <div className="w-[2px] h-[100%] bg-[#37913B]" />
                </div>
                <div>
                  <p>Nov 15, 2024</p>
                  <p className="text-[11px] text-[#60605E] mt-[2px]">10:50</p>
                </div>
              </div>
              <div>
                <p>Delivery Request Created</p>
                <div className="text-[11px] text-[#60605E] mt-[2px]">
                  <p className="">Pickup: Ojota </p>
                  <p>Payment: cash/card</p>
                  <p>Amount: ₦2,500.00</p>
                  <p>
                    Pickup address: 12 olayanju street, off ijesha-tedo. Lagos
                    state
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}