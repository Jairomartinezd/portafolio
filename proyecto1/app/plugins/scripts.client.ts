// app/plugins/scripts.client.ts

import bootstrapRaw from '@/assets/vendor/bootstrap/bootstrap.min.js?raw'
import aosRaw from '@/assets/vendor/aos/aos.js?raw'

function runRawScript(code: string) {
  const script = document.createElement('script')
  script.textContent = code
  document.body.appendChild(script)
  script.remove()
}

function loadExternalScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).Popper) {
      resolve()
      return
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => resolve(), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => resolve()
    document.head.appendChild(script)
  })
}


export default defineNuxtPlugin(async (nuxtApp) => {
  if (import.meta.client) {
    const jqModule = await import('@/assets/js/jquery.min.js')
    const $ = jqModule.default || (window as any).jQuery || (window as any).$

    if ($) {
      ;(window as any).$ = $
      ;(window as any).jQuery = $
    }

    await loadExternalScript('https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js')

    //await import('@/assets/vendor/bootstrap/bootstrap.min.js')
    //await import('@/assets/vendor/bootstrap/popper.min.js')

    // Ejecuta Bootstrap 4.2.1 con `this` apuntando a `window` para evitar `t is undefined`
    /*const runBootstrap = new Function('window', 'jQuery', '$', 'Popper', `
      ${bootstrapRaw}
    `)
    runBootstrap(window, (window as any).jQuery, (window as any).$, (window as any).Popper)*/

    runRawScript(bootstrapRaw)
    runRawScript(aosRaw)

    const AOS = (window as any).AOS
    if (AOS && typeof AOS.init === 'function') {
      AOS.init({
        once: true,
        duration: 600,
      })

      nuxtApp.hook('page:finish', () => {
        AOS.refresh()
      })
    }

    await import('@/assets/vendor/smoothscroll/smoothscroll.js')
    await import('@/assets/js/custom.js')
  }
})
