"use client"
import React, { useContext, useEffect, useState } from "react"
import { Button } from "../utilities/Button"
import { useRouter } from "next/navigation"
import axios from "axios"
import { DeliveryI } from "@/types/delivery"
import { urls } from "@/constants/url"
import { LoaderCircle } from "lucide-react"
import gsap from "gsap"
import { TrackingContext } from "@/context/TrackingContext"

export const TrackingHero = () => {
  const [tracking_number, setTrackingNumber] = useState("")
  const { set_tracking_data } = useContext(TrackingContext)
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState("")
  const router = useRouter()
  const getTrackingDetails = async () => {
    try {
      setIsLoading(true)
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${urls.base_url}/delivery/track?order_number=${tracking_number}`,
        headers: {},
        // data: data,
      }

      const response: { data: DeliveryI } = await axios(config)
      setIsLoading(false)
      setErrMsg("")
      set_tracking_data(response?.data)
      if (
        response?.data?.data?.delivery_request?.status
          ?.toLowerCase()
          ?.includes("pending")
      ) {
        throw new Error("Order is still pending")
      } else {
        router.push(`/track/${tracking_number}`)
      }
    } catch (error: any) {
      setIsLoading(false)
      set_tracking_data(null)
      setErrMsg(
        error?.response?.data?.message ||
          error?.data?.message ||
          error?.message ||
          "An Error occured"
      )
    }
  }
  useEffect(() => {
    gsap.to("#loader-icon", {
      rotate: 10060,
      yoyo: true,
      repeat: -1,
      transformOrigin: "center center",
      duration: 4,
    })
  }, [])
  return (
    <div className="text-center max-w-[1590px] mx-auto md:my-[183px] my-[140px] md:px-[70px] px-4">
      <div className="mb-7 md:mb-14">
        <h2 className="md:text-[64px] md:leading-[82px] text-[24px] leading-[30px] font-normal">
          Track Your Order
        </h2>
        <p className="mt-4 md:mt-6 text-[#60605E] md:text-[16px] md:leading-[22px] text-sm tracking-[0.75%] max-w-[522px] mx-auto">
          Keep an eye on your package&apos;s journey track your order to see how
          it&apos;s making its way to you, step by step
        </p>
      </div>
      <div className="flex items-center gap-4 flex-col max-w-[389px] mx-auto md:mt-[39px] mt-[23px] relative z-[1] md:mb-[280px] mb-[200px]">
        <input
          className="w-full outline-none bg-[#F7F8F3] h-[48px] inline-block rounded-lg px-[20px] py-[14px] text-[14px]"
          placeholder="Input order number"
          onChange={(e) => {
            setTrackingNumber(e.target.value)
            setErrMsg("")
          }}
        />
        <div className="w-full">
          {errMsg && (
            <p className="text-start text-red-500 text-xs">{errMsg}</p>
          )}
          <Button
            className="w-full disabled:cursor-not-allowed"
            disabled={/^\s*$/.test(tracking_number) || isLoading}
            onClick={getTrackingDetails}
            loading={isLoading}
          >
            Track
          </Button>
        </div>
      </div>
    </div>
  )
}
