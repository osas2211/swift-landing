"use client"

import { DeliveryI } from "@/types/delivery"
//Map component Component from library
import { GoogleMap, Marker, Polygon } from "@react-google-maps/api"

//Map's styling
const defaultMapContainerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "15px 0px 0px 15px",
}

//K2's coordinates
const defaultMapCenter = {
  lat: 6.584696474025269,
  lng: 3.349409966874283,
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
          position={defaultMapCenter}
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
