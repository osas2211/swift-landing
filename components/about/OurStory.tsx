"use client"
import Image from "next/image"
import React from "react"

export const OurStory = () => {
  return (
    <div className="md:my-[183px] my-[70px] max-w-[1590px] mx-auto p-4 lg:py-[90px] py-6 lg:px-[70px] px-4">
      <div className="flex md:flex-row flex-col md:gap-10 gap-5">
        <div className="xl:w-[35%] md:w-[45%] w-full">
          <p className="text-[#60605E]">Our Story</p>
          <h2 className="max-w-[412px] md:text-[40px] md:leading-[56px] text-[24px] leading-[30px] mt-2 font-medium">
            Founded with Love and Transparency
          </h2>
        </div>
        <div className="w-full">
          <div className="w-full h-[400px] xl:h-[500px] relative">
            <Image
              src={"/assets/our-story-image.png"}
              alt=""
              className="w-full h-full object-cover rounded-[12px]"
              fill
            />
          </div>
          <div className="mt-[36px] md:leading-[32px] leading-[28px] tracking-[1.5%] space-y-7 md:text-[16px] text-sm">
            <p className="">
              SwiftVia Logistics was born from the passion of our founder and
              dedicated team, who share a vision for excellence in every stage
              of package delivery. In a logistics industry often constrained by
              limited investment, we saw a need for a platform that meets the
              growing demand for secure, reliable deliveries—whether for
              individuals sending packages to loved ones or businesses reaching
              customers with confidence.
            </p>
            <p>
              SwiftVia recognized this gap and responded by creating a platform
              that empowers businesses to connect seamlessly with professional
              riders. From sending products and goods to delivering surprises,
              birthday gifts, groceries, and documents, SwiftVia makes logistics
              simple, safe, and efficient.
            </p>
            <p>
              But our solution doesn&apos;t stop there. We welcome logistics
              companies to partner with us, allowing them to register their
              riders on our management dashboard. This platform offers a
              comprehensive view of daily rider activities and performance
              metrics, giving logistics companies greater control and insight
              into their operations.
            </p>
            <p>
              At SwiftVia, we&apos;re not just enhancing delivery; we&apos;re
              setting a new standard for connection, convenience, and trust
              across Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
