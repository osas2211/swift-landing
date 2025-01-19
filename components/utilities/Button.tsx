"use client"
import clsx from "clsx"
import React from "react"
import { TailSpin } from "react-loader-spinner"

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "large" | "small"
  beforeicon?: React.ReactNode
  aftericon?: React.ReactNode
  loading?: boolean
}

export const Button: React.FC<props> = ({ loading, ...props }) => {
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
          `${bgColour} ${textColor} ${fontSize} ${paddingY} ${paddingX} rounded-lg flex justify-center items-center gap-[6px] disabled:opacity-70 disabled:cursor-not-allowed`,
          props.className
        )}
        disabled={props?.disabled || loading}
      >
        {loading && (
          <TailSpin
            visible={true}
            height="20"
            width="20"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
        {props?.beforeicon && <div>{props?.beforeicon}</div>}
        {props?.children}
        {props?.aftericon && <div>{props?.aftericon}</div>}
      </button>
    </>
  )
}
