"use client"

import { DeliveryI } from "@/types/delivery"
//Map component Component from library
import { GoogleMap, Marker, Polygon } from "@react-google-maps/api"
import { useRef } from "react"

//K2's coordinates
const defaultMapCenter = {
  lat: 0,
  lng: 0,
}

//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions: google.maps.MapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
  colorScheme: "dark",
}

export const TrackingMap = ({ data }: { data: DeliveryI }) => {
  const scope: React.Ref<HTMLDivElement> = useRef(null)
  //Map's styling
  const defaultMapContainerStyle = {
    width: "100%",
    height: window?.matchMedia("(max-width: 768px)")?.matches
      ? "300px"
      : "600px",
    borderRadius: "15px 0px 0px 15px",
  }
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={
          data
            ? {
                lat: data?.data?.delivery_request?.pickup_location
                  ?.coordinates[0],
                lng: data?.data?.delivery_request?.pickup_location
                  ?.coordinates[1],
              }
            : defaultMapCenter
        }
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker
          position={
            data
              ? {
                  lat: data?.data?.delivery_request?.pickup_location
                    ?.coordinates[0],
                  lng: data?.data?.delivery_request?.pickup_location
                    ?.coordinates[1],
                }
              : defaultMapCenter
          }
          // icon={"/assets/icons/locator.svg"}
        ></Marker>
        {data && (
          <Polygon
            paths={[
              {
                lat: data?.data?.delivery_request?.pickup_location
                  ?.coordinates[0],
                lng: data?.data?.delivery_request?.pickup_location
                  ?.coordinates[1],
              },
              {
                lat: data?.data?.delivery_request?.dropoff_location
                  ?.coordinates[0],
                lng: data?.data?.delivery_request?.dropoff_location
                  ?.coordinates[1],
              },
            ]}
          />
        )}
      </GoogleMap>
    </div>
  )
}
