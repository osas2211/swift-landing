"use client"
import clsx from "clsx"
import React from "react"

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "large" | "small"
  beforeicon?: React.ReactNode
  aftericon?: React.ReactNode
}

export const Button: React.FC<props> = ({ ...props }) => {
  const isSecondary = props?.variant === "secondary"
  const bgColour = isSecondary ? "bg-secondary" : "bg-primary"
  const textColor = isSecondary ? "text-primary" : "text-white"
  const isLarge = props?.size === "large"
  const isSmall = props?.size === "small"
  const fontSize = isLarge
    ? "md:text-[16px] text-sm"
    : isSmall
    ? "text-sm"
    : "text-[15px]"
  const paddingY = isLarge ? "md:py-[14px] py-[12px]" : "py-[12px]"
  const paddingX = isLarge ? "px-6" : "px-5"
  return (
    <>
      <button
        {...props}
        className={clsx(
          `${bgColour} ${textColor} ${fontSize} ${paddingY} ${paddingX} rounded-lg flex justify-center items-center gap-[6px]`,
          props.className
        )}
      >
        {props?.beforeicon && <div>{props?.beforeicon}</div>}
        {props?.children}
        {props?.aftericon && <div>{props?.aftericon}</div>}
      </button>
    </>
  )
}
