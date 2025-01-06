import { DeliveryI } from "@/types/delivery"
import { useContext, createContext, ReactNode, useState } from "react"

export const TrackingContext = createContext<{
  tracking_data: DeliveryI | null
  set_tracking_data: React.Dispatch<React.SetStateAction<DeliveryI | null>>
}>({ tracking_data: null, set_tracking_data: () => {} })

export const TrackingDataProvider = ({ children }: { children: ReactNode }) => {
  const [tracking_data, set_tracking_data] = useState<DeliveryI | null>(null)

  return (
    <TrackingContext.Provider value={{ tracking_data, set_tracking_data }}>
      {children}
    </TrackingContext.Provider>
  )
}
