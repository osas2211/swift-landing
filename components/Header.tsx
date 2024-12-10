"use client"
import React, { useEffect } from "react"
import { Logo } from "./Logo"

export const Header = () => {
  useEffect(() => {}, [])
  return (
    <div className="py-4 w-full">
      <div>
        <Logo />
      </div>
    </div>
  )
}
