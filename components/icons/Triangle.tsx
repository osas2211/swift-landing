"use client"
import React from "react"

export const TriangleIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="64"
      height="71"
      viewBox="0 0 64 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="newsletter-icon md:scale-[1] scale-[0.8]"
    >
      <path
        d="M0.443718 4.41439C0.315359 1.33786 3.56557 -0.723914 6.2941 0.703187L61.5468 29.602C64.2753 31.0291 64.4358 34.8747 61.8356 36.5242L9.18216 69.925C6.582 71.5744 3.17134 69.7905 3.04298 66.714L0.443718 4.41439Z"
        fill={color || "#CEFBD0"}
      />
    </svg>
  )
}
