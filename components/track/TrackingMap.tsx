"use client"

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
  lat: 6.362046,
  lng: 5.671422,
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

export const TrackingMap = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker
          position={defaultMapCenter}
          // icon={"/assets/icons/locator.svg"}
        ></Marker>
      </GoogleMap>
    </div>
  )
}
