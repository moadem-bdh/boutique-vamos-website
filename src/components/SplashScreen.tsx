'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export default function SplashScreen({ children }: { children: ReactNode }) {
  const [splashDone, setSplashDone] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const rectRef = useRef<SVGRectElement>(null)
  const logoWrapRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const seen = sessionStorage.getItem('splashSeen')
    if (seen) {
      setSplashDone(true)
      setShowSplash(false)
      return
    }
    sessionStorage.setItem('splashSeen', 'true')

    const r = rectRef.current
    if (!r) return
    const dur = 2000
    const hold = 150
    let startTs: number | null = null

    function easeOut(t: number) {
      return 1 - Math.pow(1 - t, 3)
    }

    function frame(ts: number) {
      if (!startTs) startTs = ts
      const elapsed = ts - startTs
      const p = easeOut(Math.min(elapsed / dur, 1))
      const h = p * 149
      r!.setAttribute('y', String(149 - h))
      r!.setAttribute('height', String(h))

      if (elapsed < dur + hold) {
        animRef.current = requestAnimationFrame(frame)
      } else {
        const logo = logoWrapRef.current
        if (logo) {
          logo.style.transform = 'scale(1.35)'
          logo.style.opacity = '0'
        }
        // Show page content first, then remove splash overlay
        setSplashDone(true)
        setTimeout(() => setShowSplash(false), 420)
      }
    }

    animRef.current = requestAnimationFrame(frame)

    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <>
      {/* Splash overlay */}
      {showSplash && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          {/* Stadium background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: "url('/assets/stadium_hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.06,
            }}
          />
          <div
            ref={logoWrapRef}
            style={{
              transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease',
              transformOrigin: 'center',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 121 149"
              fill="none"
              className="w-40 h-auto sm:w-48 md:w-56 lg:w-64"
            >
              <defs>
                <mask id="fillMask">
                  <rect
                    ref={rectRef}
                    x="0"
                    y="149"
                    width="121"
                    height="0"
                    fill="white"
                  />
                </mask>
              </defs>

              {/* ghost outline */}
              <path
                d="M97.8691 52.555C99.4812 51.7437 102.744 51.7243 105.473 51.7651C108.563 51.8216 112.176 51.8682 114.693 51.9869C116.863 52.0998 118.259 52.3041 118.758 52.841C119.442 53.6952 118.51 54.9151 117.979 55.9171C111.807 65.791 98.9218 86.572 92.9629 95.8623C91.1663 98.6912 89.8242 96.6289 88.4724 94.6774C87.0118 92.4711 84.9239 88.9807 83.3428 86.2724C80.1789 81.0076 80.4527 78.881 83.4263 74.0618C85.8872 69.9274 89.5231 63.894 92.3647 59.1506C93.8214 56.74 95.6937 53.3955 97.8108 52.5803L97.8671 52.555H97.8691Z"
                fill="white"
                opacity="0.1"
                stroke="white"
                strokeWidth="2.35"
                strokeMiterlimit="10"
              />
              <path
                d="M86.3364 101.836C85.9032 100.131 84.9904 98.5242 84.1164 96.9657C76.3143 83.1733 65.0899 64.2912 58.119 51.6526C56.8061 49.1525 56.0525 45.7263 57.7267 43.2651C59.9059 40.2416 63.1165 43.088 64.5208 45.3722C66.8748 48.9521 68.9783 52.925 71.1653 56.5283C72.8143 59.0926 74.1991 61.9059 77.1688 61.7289C80.0667 61.1277 81.6419 57.9252 83.2365 55.6683C84.8428 53.139 86.517 50.5163 87.0939 47.954C87.8863 44.8352 86.6258 42.0121 85.1147 39.3563C78.1652 27.5524 69.4852 12.2346 62.1629 1.14853C58.3424 -3.21157 54.5336 6.06313 52.5758 8.65857C47.0229 17.5772 40.1802 28.4979 35.0177 36.8134C33.2716 39.5528 31.5002 42.6561 32.079 46.0103C32.3626 47.9812 33.357 49.8179 34.3262 51.5786C42.1885 65.7738 53.3294 85.2746 60.6945 98.6506C61.9531 100.97 63.0408 104.557 61.5918 106.873C60.9606 107.898 59.7816 108.367 58.5891 107.958C55.3707 106.62 53.7353 102.779 51.8572 99.9814C48.7223 94.5804 45.2496 89.5452 42.5615 84.0625C39.1198 77.0544 35.6314 70.0113 31.7061 63.1881C29.4492 59.2638 27.2777 55.3959 25.1024 51.8608C23.6865 49.5552 22.3443 47.4014 19.4912 46.9247C14.8938 46.3158 8.88441 46.5959 4.18605 46.3761C1.47853 46.3508 -1.11052 46.343 0.493792 49.633C8.28618 64.4138 18.7356 81.6888 27.1204 96.6622C28.8879 99.7032 30.0862 102.548 31.6808 105.768C37.9622 117.653 47.2074 132.605 53.8208 143.974C55.3785 146.546 57.6315 151.242 60.8945 147.762C62.5766 146.001 63.8196 143.649 65.1695 141.557C70.7982 132.489 77.7807 121.276 82.8947 113.034C84.9826 109.713 87.492 106.015 86.3616 101.911L86.3422 101.834L86.3364 101.836Z"
                fill="white"
                opacity="0.1"
              />

              {/* filled version revealed by rising mask */}
              <g mask="url(#fillMask)">
                <path
                  d="M97.8691 52.555C99.4812 51.7437 102.744 51.7243 105.473 51.7651C108.563 51.8216 112.176 51.8682 114.693 51.9869C116.863 52.0998 118.259 52.3041 118.758 52.841C119.442 53.6952 118.51 54.9151 117.979 55.9171C111.807 65.791 98.9218 86.572 92.9629 95.8623C91.1663 98.6912 89.8242 96.6289 88.4724 94.6774C87.0118 92.4711 84.9239 88.9807 83.3428 86.2724C80.1789 81.0076 80.4527 78.881 83.4263 74.0618C85.8872 69.9274 89.5231 63.894 92.3647 59.1506C93.8214 56.74 95.6937 53.3955 97.8108 52.5803L97.8671 52.555H97.8691Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2.35"
                  strokeMiterlimit="10"
                />
                <path
                  d="M86.3364 101.836C85.9032 100.131 84.9904 98.5242 84.1164 96.9657C76.3143 83.1733 65.0899 64.2912 58.119 51.6526C56.8061 49.1525 56.0525 45.7263 57.7267 43.2651C59.9059 40.2416 63.1165 43.088 64.5208 45.3722C66.8748 48.9521 68.9783 52.925 71.1653 56.5283C72.8143 59.0926 74.1991 61.9059 77.1688 61.7289C80.0667 61.1277 81.6419 57.9252 83.2365 55.6683C84.8428 53.139 86.517 50.5163 87.0939 47.954C87.8863 44.8352 86.6258 42.0121 85.1147 39.3563C78.1652 27.5524 69.4852 12.2346 62.1629 1.14853C58.3424 -3.21157 54.5336 6.06313 52.5758 8.65857C47.0229 17.5772 40.1802 28.4979 35.0177 36.8134C33.2716 39.5528 31.5002 42.6561 32.079 46.0103C32.3626 47.9812 33.357 49.8179 34.3262 51.5786C42.1885 65.7738 53.3294 85.2746 60.6945 98.6506C61.9531 100.97 63.0408 104.557 61.5918 106.873C60.9606 107.898 59.7816 108.367 58.5891 107.958C55.3707 106.62 53.7353 102.779 51.8572 99.9814C48.7223 94.5804 45.2496 89.5452 42.5615 84.0625C39.1198 77.0544 35.6314 70.0113 31.7061 63.1881C29.4492 59.2638 27.2777 55.3959 25.1024 51.8608C23.6865 49.5552 22.3443 47.4014 19.4912 46.9247C14.8938 46.3158 8.88441 46.5959 4.18605 46.3761C1.47853 46.3508 -1.11052 46.343 0.493792 49.633C8.28618 64.4138 18.7356 81.6888 27.1204 96.6622C28.8879 99.7032 30.0862 102.548 31.6808 105.768C37.9622 117.653 47.2074 132.605 53.8208 143.974C55.3785 146.546 57.6315 151.242 60.8945 147.762C62.5766 146.001 63.8196 143.649 65.1695 141.557C70.7982 132.489 77.7807 121.276 82.8947 113.034C84.9826 109.713 87.492 106.015 86.3616 101.911L86.3422 101.834L86.3364 101.836Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* Page content — only rendered after splash finishes */}
      {splashDone && children}
    </>
  )
}
