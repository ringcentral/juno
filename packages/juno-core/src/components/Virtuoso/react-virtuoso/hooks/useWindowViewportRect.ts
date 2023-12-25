import React from 'react'
import { useSizeWithElRef } from './useSize'
import { WindowViewportInfo } from '../interfaces'
import { useRcPortalWindowContext } from './useRcPortalWindowContext'

export default function useWindowViewportRectRef(callback: (info: WindowViewportInfo) => void, customScrollParent?: HTMLElement) {
  const viewportInfo = React.useRef<WindowViewportInfo | null>(null)
  const { externalWindow = window } = useRcPortalWindowContext()

  const calculateInfo = React.useCallback(
    (element: HTMLElement | null) => {
      if (element === null || !element.offsetParent) {
        return
      }
      const rect = element.getBoundingClientRect()
      const visibleWidth = rect.width
      let visibleHeight: number, offsetTop: number

      if (customScrollParent) {
        const customScrollParentRect = customScrollParent.getBoundingClientRect()
        const deltaTop = rect.top - customScrollParentRect.top

        visibleHeight = customScrollParentRect.height - Math.max(0, deltaTop)
        offsetTop = deltaTop + customScrollParent.scrollTop
      } else {
        visibleHeight = externalWindow.innerHeight - Math.max(0, rect.top)
        offsetTop = rect.top + externalWindow.pageYOffset
      }

      viewportInfo.current = {
        offsetTop,
        visibleHeight,
        visibleWidth,
      }

      callback(viewportInfo.current)
    },
    [callback, customScrollParent, externalWindow]
  )

  const { callbackRef, ref } = useSizeWithElRef(calculateInfo)

  const scrollAndResizeEventHandler = React.useCallback(() => {
    calculateInfo(ref.current)
  }, [calculateInfo, ref])

  React.useEffect(() => {
    if (customScrollParent) {
      customScrollParent.addEventListener('scroll', scrollAndResizeEventHandler)
      const observer = new externalWindow['ResizeObserver'](scrollAndResizeEventHandler)
      observer.observe(customScrollParent)
      return () => {
        customScrollParent.removeEventListener('scroll', scrollAndResizeEventHandler)
        observer.unobserve(customScrollParent)
      }
    } else {
      externalWindow.addEventListener('scroll', scrollAndResizeEventHandler)
      externalWindow.addEventListener('resize', scrollAndResizeEventHandler)
      return () => {
        externalWindow.removeEventListener('scroll', scrollAndResizeEventHandler)
        externalWindow.removeEventListener('resize', scrollAndResizeEventHandler)
      }
    }
  }, [scrollAndResizeEventHandler, customScrollParent, externalWindow])

  return callbackRef
}
