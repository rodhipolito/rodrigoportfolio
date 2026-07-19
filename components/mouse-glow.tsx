"use client"

import { useEffect, useRef } from "react"

const GLOW_SIZE = 800

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // desktop only: skip touch devices, where there is no hover cursor
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    let raf = 0
    const move = (e: PointerEvent) => {
      const { clientX, clientY } = e
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${clientX - GLOW_SIZE / 2}px, ${clientY - GLOW_SIZE / 2}px, 0)`
        el.style.opacity = "1"
      })
    }
    const leave = () => {
      el.style.opacity = "0"
    }

    window.addEventListener("pointermove", move, { passive: true })
    document.documentElement.addEventListener("pointerleave", leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", leave)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        ref={ref}
        className="rounded-full opacity-0 transition-opacity duration-500"
        style={{
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, rgba(59, 130, 246, 0.03) 35%, transparent 65%)",
          transform: "translate3d(-9999px, -9999px, 0)",
          willChange: "transform",
        }}
      />
    </div>
  )
}
