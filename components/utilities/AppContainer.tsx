"use client"
import React, { useState } from "react"
import { AppLoader } from "./AppLoader"
import { useLoader } from "@/hooks/useLoader"

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const { loading, setLoading } = useLoader()

  return (
    <div>
      {/* {loading ? <AppLoader setLoading={setLoading} /> : <>{children}</>} */}
      <AppLoader setLoading={setLoading} />
      <>{children}</>
    </div>
  )
}
