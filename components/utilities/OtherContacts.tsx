"use client"
import React from "react"
import { EmailIcon } from "../icons/Email"
import { WhatsappIcon } from "../icons/Whatsapp"
import { XIcon } from "../icons/XIcon"
import Link from "next/link"

export const OtherContacts = ({ showText }: { showText?: boolean }) => {
  return (
    <div className="lg:py-[90px] py-6 lg:px-[70px] px-4 md:my-[153px] my-[70px] max-w-[1590px] mx-auto">
      {showText && (
        <p className="text-[15px] md:text-lg md:mb-[70px] mb-8 text-center">
          Prefer alternative methods
        </p>
      )}
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-4">
        <div className="bg-[#CEFBD0] px-5 py-4 md:px-[30px] md:py-[20px] md:pb-8 rounded-xl">
          <div className="inline-flex bg-white justify-center items-center rounded-lg h-12 w-12 mb-[18px]">
            <EmailIcon />
          </div>
          <p className="mb-2">Email Us At:</p>
          <p className="text-[#707070] text-xs tracking-[0.5%] leading-[19px] max-w-[400px]">
            Email us at{" "}
            <Link href={""} target="_blank" className="text-black underline">
              contact@swiftvia.com
            </Link>{" "}
            with any questions or concerns, and our customer support team will
            respond promptly to assist you.
          </p>
        </div>
        <div className="bg-[#E7FBCE] px-5 py-4 md:px-[30px] md:py-[20px] md:pb-8 rounded-xl">
          <div className="inline-flex bg-white justify-center items-center rounded-lg h-12 w-12 mb-[18px]">
            <WhatsappIcon />
          </div>
          <p className="mb-2">Chat us on WhatsApp</p>
          <p className="text-[#707070] text-xs tracking-[0.5%] leading-[19px] max-w-[400px]">
            Message us on WhatsApp{" "}
            <Link href={""} target="_blank" className="text-black underline">
              +2348064532412
            </Link>{" "}
            with your inquiries, and our team will get back to you quickly to
            provide assistance.
          </p>
        </div>
        <div className="bg-[#F4FBCE] px-5 py-4 md:px-[30px] md:py-[20px] md:pb-8 rounded-xl">
          <div className="inline-flex bg-white justify-center items-center rounded-lg h-12 w-12 mb-[18px]">
            <XIcon />
          </div>
          <p className="mb-2">Chat us on X (twitter)</p>
          <p className="text-[#707070] text-xs tracking-[0.5%] leading-[19px] max-w-[400px]">
            Reach out to us on X (twitter){" "}
            <Link href={""} target="_blank" className="text-black underline">
              @SwiftViaNg
            </Link>{" "}
            with your questions or feedback, and we&apos;ll respond swiftly to
            help..
          </p>
        </div>
      </div>
    </div>
  )
}
