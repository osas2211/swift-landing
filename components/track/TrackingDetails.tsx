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
      </div>
    </div>
  )
}
