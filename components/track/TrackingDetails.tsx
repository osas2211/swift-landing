"use client"
import Link from "next/link"
import React from "react"

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </div>
    </div>
  )
}
