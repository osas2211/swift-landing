"use client"
import React from "react"

export const Rectangle = ({ color }: { color?: string }) => {
  return (
    <svg
      width="83"
      height="83"
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="newsletter-icon md:scale-[1] scale-[0.5]"
    >
      <rect
        x="29.9702"
        y="-0.756348"
        width="62"
        height="62"
        rx="4"
        transform="rotate(29.7746 29.9702 -0.756348)"
        fill={color || "#123014"}
      />
    </svg>
  )
}
