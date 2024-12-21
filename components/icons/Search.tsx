"use client"
import React from "react"

export const SearchIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 17.5L22.5 22"
        stroke={color || "#7C7C7A"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 11C20.5 6.02944 16.4706 2 11.5 2C6.52944 2 2.5 6.02944 2.5 11C2.5 15.9706 6.52944 20 11.5 20C16.4706 20 20.5 15.9706 20.5 11Z"
        stroke={color || "#7C7C7A"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
