"use client"
import React, { useState } from "react"
import { AppLoader } from "./AppLoader"

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading ? <AppLoader setLoading={setLoading} /> : <>{children}</>}
    </div>
  )
}
