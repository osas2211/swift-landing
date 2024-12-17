"use client"
import React from "react"

export const CircleIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="62"
      height="63"
      viewBox="0 0 62 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="newsletter-icon md:scale-[1] scale-[0.8]"
    >
      <circle cx="31" cy="31.9229" r="31" fill={color || "#EAF15B"} />
    </svg>
  )
}
