"use client"
import React, { useEffect, useState } from "react"
import { Button } from "../utilities/Button"
import { useRouter } from "next/navigation"
import axios from "axios"
import { DeliveryI } from "@/types/delivery"
import { urls } from "@/constants/url"
import { LoaderCircle } from "lucide-react"
import gsap from "gsap"

export const TrackingHero = () => {
  const [tracking_number, setTrackingNumber] = useState("")
  const [data, setData] = useState<DeliveryI | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState("")
  const router = useRouter()
  const getTrackingDetails = () => {
    setIsLoading(true)
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${urls.base_url}/delivery/track?order_number=${tracking_number}`,
      headers: {},
      // data: data,
    }

    axios(config)
      .then(function (response) {
        setIsLoading(false)
        setErrMsg("")
        // router.push(`/track/${tracking_number}`)
        console.log(JSON.stringify(response.data))
        gsap.to("#loader-icon", {
          rotate: 10060,
          yoyo: true,
          repeat: -1,
          transformOrigin: "center center",
          duration: 4,
        })
      })
      .catch(function (error) {
        setIsLoading(false)
        setErrMsg(error?.response?.data?.message)
        console.log(error)
      })
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
          >
            {isLoading ? (
              <span>
                {/* <LoaderCircle id="loader-icon" /> */}
                Getting info...
              </span>
            ) : (
              <>Track</>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
