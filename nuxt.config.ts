// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      title: "Afrolingo | Apprendre les langues africaines",
    },
  },
  css: ["~/assets/styles/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
    'nuxt-paypal',
  ],
  paypal: {
    clientId: "AVHXmkoIpqgDDZ8W_LIrDBfi55oXxbagv2-hsaWocz8ERqzS_iO3S_FB7AyYlJyzMJYlDSilp2KmPwS4",
  },
})
