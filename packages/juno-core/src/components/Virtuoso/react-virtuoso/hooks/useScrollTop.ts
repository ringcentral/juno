import React from 'react'
import * as u from '../urx'
import { correctItemSize } from '../utils/correctItemSize'
import { ScrollContainerState } from '../interfaces'
import ReactDOM from 'react-dom'
import { approximatelyEqual } from '../utils/approximatelyEqual'
import { useRcPortalWindowContext } from './useRcPortalWindowContext'

export type ScrollerRef = Window | HTMLElement | null

export default function useScrollTop(
  scrollContainerStateCallback: (state: ScrollContainerState) => void,
  smoothScrollTargetReached: (yes: true) => void,
  scrollerElement: any,
  scrollerRefCallback: (ref: ScrollerRef) => void = u.noop,
  customScrollParent?: HTMLElement
) {
  const scrollerRef = React.useRef<HTMLElement | null | Window>(null)
  const scrollTopTarget = React.useRef<any>(null)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const { externalWindow = window } = useRcPortalWindowContext()

  const handler = React.useCallback(
    (ev: Event) => {
      const el = ev.target as HTMLElement
      const windowScroll = (el as any) === externalWindow || (el as any) === externalWindow.document
      const scrollTop = windowScroll ? externalWindow.pageYOffset || externalWindow.document.documentElement.scrollTop : el.scrollTop
      const scrollHeight = windowScroll ? externalWindow.document.documentElement.scrollHeight : el.scrollHeight
      const viewportHeight = windowScroll ? externalWindow.innerHeight : el.offsetHeight

      const call = () => {
        scrollContainerStateCallback({
          scrollTop: Math.max(scrollTop, 0),
          scrollHeight,
          viewportHeight,
        })
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if ((ev as any).suppressFlushSync) {
        call()
      } else {
        ReactDOM.flushSync(call)
      }

      if (scrollTopTarget.current !== null) {
        if (scrollTop === scrollTopTarget.current || scrollTop <= 0 || scrollTop === scrollHeight - viewportHeight) {
          scrollTopTarget.current = null
          smoothScrollTargetReached(true)
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
          }
        }
      }
    },
    [externalWindow, scrollContainerStateCallback, smoothScrollTargetReached]
  )

  React.useEffect(() => {
    const localRef = customScrollParent ? customScrollParent : scrollerRef.current!

    scrollerRefCallback(customScrollParent ? customScrollParent : scrollerRef.current)
    handler({ target: localRef, suppressFlushSync: true } as unknown as Event)
    localRef.addEventListener('scroll', handler, { passive: true })

    return () => {
      scrollerRefCallback(null)
      localRef.removeEventListener('scroll', handler)
    }
  }, [scrollerRef, handler, scrollerElement, scrollerRefCallback, customScrollParent])

  function scrollToCallback(location: ScrollToOptions) {
    const scrollerElement = scrollerRef.current
    if (!scrollerElement || ('offsetHeight' in scrollerElement && scrollerElement.offsetHeight === 0)) {
      return
    }

    const isSmooth = location.behavior === 'smooth'

    let offsetHeight: number
    let scrollHeight: number
    let scrollTop: number

    if (scrollerElement === externalWindow) {
      // this is not a mistake
      scrollHeight = Math.max(
        correctItemSize(externalWindow.document.documentElement, 'height'),
        externalWindow.document.documentElement.scrollHeight
      )
      offsetHeight = externalWindow.innerHeight
      scrollTop = externalWindow.document.documentElement.scrollTop
    } else {
      scrollHeight = (scrollerElement as HTMLElement).scrollHeight
      offsetHeight = correctItemSize(scrollerElement as HTMLElement, 'height')
      scrollTop = (scrollerElement as HTMLElement).scrollTop
    }

    const maxScrollTop = scrollHeight - offsetHeight
    location.top = Math.ceil(Math.max(Math.min(maxScrollTop, location.top!), 0))

    // avoid system hanging because the DOM never called back
    // with the scrollTop
    // scroller is already at this location
    if (approximatelyEqual(offsetHeight, scrollHeight) || location.top === scrollTop) {
      scrollContainerStateCallback({ scrollTop, scrollHeight, viewportHeight: offsetHeight })
      if (isSmooth) {
        smoothScrollTargetReached(true)
      }
      return
    }

    if (isSmooth) {
      scrollTopTarget.current = location.top
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null
        scrollTopTarget.current = null
        smoothScrollTargetReached(true)
      }, 1000)
    } else {
      scrollTopTarget.current = null
    }

    scrollerElement.scrollTo(location)
  }

  function scrollByCallback(location: ScrollToOptions) {
    scrollerRef.current!.scrollBy(location)
  }

  return { scrollerRef, scrollByCallback, scrollToCallback }
}
