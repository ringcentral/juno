import React from 'react'
import { useRcPortalWindowContext } from './useRcPortalWindowContext'

export type CallbackRefParam = HTMLElement | null

export function useSizeWithElRef(callback: (e: HTMLElement) => void, enabled = true) {
  const ref = React.useRef<CallbackRefParam>(null)
  const { externalWindow = window } = useRcPortalWindowContext()

  let callbackRef = (_el: CallbackRefParam) => {
    void 0
  }

  if (typeof externalWindow['ResizeObserver'] !== 'undefined') {
    const observer = React.useMemo(() => {
      return new externalWindow['ResizeObserver']((entries: ResizeObserverEntry[]) => {
        const element = entries[0].target as HTMLElement
        if (element.offsetParent !== null) {
          callback(element)
        }
      })
    }, [callback])

    callbackRef = (elRef: CallbackRefParam) => {
      if (elRef && enabled) {
        observer.observe(elRef)
        ref.current = elRef
      } else {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
        ref.current = null
      }
    }
  }

  return { ref, callbackRef }
}

export default function useSize(callback: (e: HTMLElement) => void, enabled = true) {
  return useSizeWithElRef(callback, enabled).callbackRef
}
