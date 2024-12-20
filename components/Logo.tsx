"use client"
import gsap from "gsap"
import React, { useEffect } from "react"

export const Logo = ({
  tl,
  textColor,
  low_z_index,
}: {
  tl?: gsap.core.Timeline
  textColor?: string
  low_z_index?: boolean
}) => {
  const timeline = gsap.timeline({})
  const animation = () => {
    // tl &&
    timeline
      // .set("#logo-body", {
      //   y: "45vh",
      //   x: "50vw",
      //   xPercent: window?.matchMedia("(max-width: 720px)").matches
      //     ? -55
      //     : -130,
      // })
      // .set("#logo-svg", { scale: 2 })
      .set("#shapes", {
        rotate: "-180deg",
        x: 20,
        transformOrigin: "center center",
      })

      .fromTo(
        "#green-shape",
        { y: "-100%", opacity: 0 },
        {
          y: "0%",
          duration: 1,
          zIndex: 100,
          ease: "elastic.out(1,0.75)",
          opacity: 1,
          delay: 0.1,
        }
      )

      .fromTo(
        "#black-shape",
        { y: "120%", opacity: 0 },
        {
          y: "0%",
          duration: 1,
          zIndex: 100,
          ease: "elastic.out(1,0.75)",
          opacity: 1,
        },
        "-=0.8"
      )

      .to(
        "#shapes",
        {
          rotate: "0deg",
          duration: 0.6,
          transformOrigin: "center center",
          ease: "expo.out",
        },
        "-=0.3"
      )
      .to(
        "#shapes",
        {
          duration: 1,
          x: 0,
          ease: "elastic.out(1,0.75)",
        },
        "<0.1"
      )
      .fromTo(
        "#logo-text",
        { x: "70%", opacity: 0 },
        {
          x: "0",
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1,1)",
          stagger: 0.5,
        },
        "<-0.15"
      )
      .to("#logo-body", {
        duration: 0.8,
        ease: "expo.out",
        y: 0,
        x: 0,
        xPercent: 0,
      })
      .to("#logo-svg", { scale: 1, duration: 0.8, ease: "expo.out" }, "<")
  }
  useEffect(() => {
    animation()
  }, [])
  const playAnimation = () => {
    animation()
  }
  return (
    <>
      <div id="logo-body" className={low_z_index ? "" : "relative z-[200]"}>
        <svg
          width="136"
          height="40"
          viewBox="0 0 126 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="logo-svg"
        >
          <mask
            id="mask0_2014_26"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="10"
            y="8"
            width="9"
            height="24"
          >
            <path d="M18.6667 8H10V32H18.6667V8Z" fill="white" />
          </mask>
          <g mask="url(#mask0_2014_26)" id="shapes">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9948 21.7188C17.0313 18.5254 19.8742 13.4342 18.0526 10.1646C16.7341 7.79433 13.4111 7.20748 11.3381 9.21954C9.93576 10.5762 9.57755 13.1065 10.797 14.6765C12.1993 16.4752 15.1717 19.0436 15.9948 21.7188ZM14.3486 10.0884C15.5452 10.0884 16.5131 11.0563 16.5131 12.2453C16.5131 13.4418 15.5452 14.4098 14.3486 14.4098C13.1596 14.4098 12.1917 13.4418 12.1917 12.2453C12.1917 11.0563 13.1596 10.0884 14.3486 10.0884Z"
              fill="#64E96A"
              id="green-shape"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6719 18.2739C11.6354 21.4673 8.79258 26.5661 10.6141 29.8357C11.9326 32.1983 15.2556 32.7928 17.3286 30.7808C18.731 29.4241 19.0892 26.8938 17.8697 25.3238C16.4674 23.5175 13.495 20.9567 12.6719 18.2739ZM14.3181 29.9119C13.1216 29.9119 12.1536 28.944 12.1536 27.7474C12.1536 26.5585 13.1216 25.5905 14.3181 25.5905C15.5071 25.5905 16.475 26.5585 16.475 27.7474C16.475 28.944 15.5071 29.9119 14.3181 29.9119Z"
              fill="#182F35"
              id="black-shape"
            />
          </g>
          <g style={{ overflow: "hidden" }}>
            <path
              d="M33.56 29.24C28.928 29.24 26.72 27.224 26.72 23.576H29.288C29.552 26.048 30.632 27.224 33.608 27.224C36.536 27.224 37.736 26 37.736 24.104C37.736 22.856 37.04 21.968 34.328 21.584L31.952 21.224C28.424 20.72 27.152 19.448 27.152 16.856C27.152 13.808 29.24 11.672 33.56 11.672C37.88 11.672 39.968 13.76 39.968 17.096H37.472C37.208 14.84 36.08 13.688 33.488 13.688C30.944 13.688 29.816 14.888 29.816 16.712C29.816 18.008 30.416 18.704 32.816 19.04L35.192 19.4C38.576 19.88 40.4 21.176 40.4 23.936C40.4 27.176 38.192 29.24 33.56 29.24ZM56.4052 29H53.6932L51.0532 19.976L48.3892 29H45.7012L41.3572 16.616H43.9972L47.1892 26.12L49.9012 16.616H52.2052L54.9172 26.12L58.0852 16.616H60.7492L56.4052 29ZM64.7362 29H62.1922V16.616H64.7362V29ZM63.4642 14.456C62.4802 14.456 61.9522 13.88 61.9522 13.112C61.9522 12.344 62.4802 11.744 63.4642 11.744C64.4242 11.744 64.9762 12.344 64.9762 13.112C64.9762 13.88 64.4242 14.456 63.4642 14.456ZM70.7375 29H68.1935V18.44H66.1775V16.616H68.1935V15.32C68.1935 12.92 69.2015 11.792 71.6975 11.792C72.2015 11.792 73.0895 11.864 73.5935 11.912V13.664L72.2735 13.616C71.1455 13.616 70.7375 14.144 70.7375 15.224V16.616H73.5935V18.44H70.7375V29ZM79.8303 29.12C77.2383 29.12 76.3263 28.352 76.3263 25.832V18.44H74.3103V16.616H76.3263V12.872H78.8703V16.616H81.7263V18.44H78.8703V25.904C78.8703 26.984 79.2783 27.296 80.4063 27.296L81.7263 27.272V29C81.2223 29.048 80.3343 29.12 79.8303 29.12ZM92.3758 29H89.1118L82.5838 11.912H85.4398L90.7438 26.288L96.0238 11.912H98.9038L92.3758 29ZM102.892 29H100.348V16.616H102.892V29ZM101.62 14.456C100.636 14.456 100.108 13.88 100.108 13.112C100.108 12.344 100.636 11.744 101.62 11.744C102.58 11.744 103.132 12.344 103.132 13.112C103.132 13.88 102.58 14.456 101.62 14.456ZM109.254 29.24C106.374 29.24 104.814 27.8 104.814 25.496C104.814 23.648 105.942 22.184 109.014 21.92L111.414 21.728C112.878 21.584 113.31 21.248 113.31 20.456C113.31 19.04 112.494 18.2 110.694 18.2C109.014 18.2 108.102 18.92 107.982 20.456H105.486C105.486 17.96 107.022 16.376 110.67 16.376C114.294 16.376 115.854 17.96 115.854 20.456V25.832C115.854 27.512 115.998 28.592 116.238 29H113.958C113.574 28.52 113.43 28.016 113.43 26.864C112.758 28.448 111.39 29.24 109.254 29.24ZM109.95 27.488C112.134 27.488 113.31 25.784 113.31 23.744V22.688C113.046 23.024 112.374 23.216 111.414 23.288L109.83 23.432C108.054 23.576 107.358 24.32 107.358 25.328C107.358 26.6 108.126 27.488 109.95 27.488Z"
              fill={textColor || "black"}
              id="logo-text"
            />
          </g>
        </svg>
      </div>
      {/* <button onClick={playAnimation}>Play</button> */}
    </>
  )
}
