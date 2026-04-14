'use client'
import { useEffect } from 'react'

export default function ClarityInit() {
  useEffect(() => {
    import('@microsoft/clarity').then(({ default: Clarity }) => {
      Clarity.init('wbkozailjt')
    })
  }, [])
  return null
}
