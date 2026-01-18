import { registerSW } from 'virtual:pwa-register'

export function registerServiceWorker() {
  if (typeof window !== 'undefined') {
    try {
      registerSW({ immediate: true })
    } catch (e) {
      // swallow
    }
  }
}
