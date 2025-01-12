import { urls } from "@/constants/url"

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ['/delivery', '/carrers', '/apply-job', '/open-roles']
    },
    sitemap: `${urls.base_url}/sitemap.xml`,
  }
}

// instead of using the disallow here and blocking google from accessing those pages which shows up and gets exposed in our url, instead we can do this on each page.
