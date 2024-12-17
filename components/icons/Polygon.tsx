"use client"
import React from "react"

export const Polygon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="51"
      height="61"
      viewBox="0 0 51 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="newsletter-icon md:scale-[1] scale-[0.8]"
    >
      <path
        d="M27.0982 2.77818C28.8321 -0.25615 33.35 0.236047 34.3899 3.57256L50.45 55.1012C51.7202 59.1767 46.5778 62.1412 43.6875 58.9997L28.5119 42.5048C27.1526 41.0274 24.9089 40.7864 23.2669 41.9414L6.92986 53.4328C3.43291 55.8926 -0.965651 51.8886 1.15559 48.1766L27.0982 2.77818Z"
        fill={color || "#123014"}
      />
    </svg>
  )
}
