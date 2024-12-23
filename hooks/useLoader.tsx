"use client"
import { LoadingContext } from "@/context/loadingContext"
import { useContext } from "react"

export const useLoader = () => {
  const { loading, setLoading } = useContext(LoadingContext)
  return { loading, setLoading }
}
