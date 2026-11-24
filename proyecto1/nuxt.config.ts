// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/vendor/bootstrap/bootstrap.min.css',
    '@/assets/vendor/font-awesome/font-awesome.min.css',
    '@/assets/vendor/aos/aos.css',
    '@/assets/css/design.css',
  ],
  vite: {
    css: {
      devSourcemap: false,
    },
  },
  app: {
    head: {
      title: 'Powerbox - Sitio Oficial',
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js',
          defer: true, // Se ejecuta tras parsear el HTML
        },
      ],
    },
  },
})
