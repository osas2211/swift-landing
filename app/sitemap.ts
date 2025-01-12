import { urls } from "@/constants/url"

export default function sitemap() {
  return [
    {
      url: `${urls.base_url}/about`,
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${urls.base_url}/contact`,
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${urls.base_url}/our-app`,
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${urls.base_url}/track-order`,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${urls.base_url}/privacy-policy`,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${urls.base_url}/terms-conditions`,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ]
}
