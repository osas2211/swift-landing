import { useSessionStorage } from "usehooks-ts"

export const useLoader = () => {
  const [loading, setLoading] = useSessionStorage("app-loading", true)
  return { loading, setLoading }
}
