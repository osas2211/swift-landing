"use client"
import gsap from "gsap"
import React, { useEffect } from "react"

export const RaisingTheBar = () => {
  useEffect(() => {
    gsap.fromTo(
      "#bar-cross-lines",
      { clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 3 }
    )
  }, [])
  return (
    <div className="bg-[#123014] lg:p-[70px] lg:py-[80px] md:p-[40px] md:p-5 py-5 text-white relative overflow-hidden">
      <div className="max-w-[1590px] mx-auto p-4 relative z-[1]">
        <h3 className="max-w-[528px] md:text-[40px] md:leading-[56px] text-[24px] leading-[32px]">
          Raising the Bar in Parcel Delivery Across Africa
        </h3>
        <p className="max-w-[657px] md:text-[18px] md:leading-[26px] text-[#D7D8D3] md:mt-[50px] mt-[20px] text-sm">
          SwiftVia sets the standard in parcel handling and logistics with our
          dynamic platform, designed to deliver the best experience and outcomes
          for businesses and customers alike. From start to finish, we&apos;re
          committed to providing seamless, reliable solutions that elevate the
          delivery experience across Africa.
        </p>
      </div>
      <div className="absolute top-0 right-0">
        <svg
          id="bar-cross-lines"
          width="840"
          height="642"
          viewBox="0 0 840 642"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150.107 193L0.398438 -4.3023L30.3943 -4.30762L167.624 171.586L311.504 -4.31295L341.5 -4.30762L329.733 10.9999L380.474 165.842L354.474 172.842L310.13 36.5L187.097 196.545L304.795 347.404L531 52.5L529.5 44L530.5 36.5L489.117 -17.5484L528.473 -5.06668L528.167 -6.46061L502.378 -39.4864L522.223 -33.485L515.488 -64.1075L542.723 -51.5367C542.723 -51.5367 545.529 -40.3098 549.216 -25.3222L584.145 -14.759L622.606 -64.3076L652.602 -64.3023C652.602 -64.3023 631.802 -37.2304 608.895 -7.27438L1213.93 175.694L1188.89 204.384L591.856 15.0351C585.586 23.2567 579.505 31.2458 574 38.5C574.743 45.1477 574.743 44.3522 574 51L1003.39 602.692L966.398 611.698L577.027 98.5425C639.501 365.141 729.461 746.248 729.461 746.248L692.098 738.914C692.098 738.914 603.771 338.996 545.971 76.2314C435.463 221.98 357.953 326.79 324.359 372.481L534.394 641.692L497.398 650.698L305.657 398L285.929 372L169.835 219L150.107 193Z"
            fill="#485A48"
          />
        </svg>
      </div>
    </div>
  )
}