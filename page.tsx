"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const detectDeviceAndRedirect = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

      // iOS Link
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        window.location.href = "https://apps.apple.com/app/ide-car-passageiro/id6739596728"
        return
      }

      // Android Link
      if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=br.com.idecar.driver&hl=pt"
        return
      }

      // For PC other else
      window.location.href = "https://idecar.app/"
    }

    // Execute the redirect immediately
    detectDeviceAndRedirect()
  }, [])

  return null
}
