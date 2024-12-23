import { useContext, createContext, ReactNode, useState } from "react"

export const LoadingContext = createContext<{
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}>({ loading: true, setLoading: () => {} })

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
