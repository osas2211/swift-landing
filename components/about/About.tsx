"use client"
import React from "react"
import { MeetSwiftvia } from "./MeetSwiftvia"
import { RaisingTheBar } from "./RaisingTheBar"
import { OurStory } from "./OurStory"
import { OurValue } from "./OurValue"
import { OurGoal } from "./OurGoal"
import { MeetTheTeam } from "./MeetTheTeam"
import { Newsletter } from "../utilities/Newsletter"
import { Footer } from "../utilities/Footer"

export const About = () => {
  return (
    <div>
      <MeetSwiftvia />
      <RaisingTheBar />
      <OurStory />
      <OurValue />
      <OurGoal />
      <MeetTheTeam />
      <Newsletter />
      <Footer />
    </div>
  )
}
