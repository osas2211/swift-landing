"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { XIcon } from "../icons/XIcon"
import { LinkedInIcon } from "../icons/LinkedInIcon"
import { BriefCaseIcon } from "../icons/BriefCase"

export const MeetTheTeam = () => {
  const team: {
    name: string
    picture: string
    role: string
    linkendIn?: string
    twitter?: string
  }[] = [
    {
      name: "Elizabeth Nwankwo",
      picture: "/assets/person-1.png",
      role: "Sales Manager",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    {
      name: "Andrew Maiwada",
      picture: "/assets/person-2.png",
      role: "HR",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    {
      name: "Mary Idamiebi",
      picture: "/assets/person-3.png",
      role: "Product Designer",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    {
      name: "Ruth Ikiriko",
      picture: "/assets/person-4.png",
      role: "Account Officer",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    {
      name: "Priscilla Iwowari",
      picture: "/assets/person-3.png",
      role: "IT officer",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    {
      name: "Michael Pepple",
      picture: "/assets/delivery-person.png",
      role: "Customer Support",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    {
      name: "Michael Ezemma",
      picture: "/assets/person-1.png",
      role: "Logistics Manager",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
    {
      name: "Hannah Agu",
      picture: "/assets/delivery-person-2.png",
      role: "Customer Support",
      linkendIn: "https://www.linkedin.com",
      twitter: "https://www.twitter.com",
    },
  ]
  return (
    <div className="md:my-[153px] my-[70px] max-w-[1590px] mx-auto p-4 lg:py-[90px] py-6 lg:px-[70px] px-4">
      <div>
        <h2 className="max-w-[412px] md:text-[40px] md:leading-[56px] text-[24px] leading-[30px] mt-2 font-medium">
          Meet Our Team
        </h2>
        <p className="md:my-[26px] my-4 md:text-[18px] md:leading-[26px] text-[#60605E] text-sm max-w-[627px]">
          We are team of passionate individual that come together to contribute
          our quota to the growth and acceleration of logistic business across
          Africa by providing a platform where everything can be done seamless.
        </p>
      </div>
      <div className="mt-[30px] md:mt-[86px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="relative">
              <div className="relative w-full h-[310px]">
                <Image
                  src={member.picture}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                  fill
                />
              </div>
              <div className="mt-3">
                <p className="font-medium mt-4 md:text-lg">{member.name}</p>
                <div className="flex items-center gap-2 justify-between flex-wrap">
                  <div className="flex items-center gap-[6px] mt-2">
                    <BriefCaseIcon />
                    <p className="text-[#454544] text-sm">{member.role}</p>
                  </div>
                  <div className="flex gap-2 md:gap-4 justify-center mt-2">
                    {member.twitter && (
                      <Link href={member.twitter} target="_blank">
                        <XIcon />
                      </Link>
                    )}{" "}
                    {member.linkendIn && (
                      <Link href={member.linkendIn} target="_blank">
                        <LinkedInIcon />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
