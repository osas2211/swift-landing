"use client"
import React, { useContext, useState } from "react"
import { AppLoader } from "./AppLoader"
import { useLoader } from "@/hooks/useLoader"
import { LoadingContext, LoadingProvider } from "@/context/loadingContext"

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadingProvider>
      <div>
        {/* {loading ? <AppLoader setLoading={setLoading} /> : <>{children}</>} */}
        <AppLoader />
        <>{children}</>
      </div>
    </LoadingProvider>
  )
}
