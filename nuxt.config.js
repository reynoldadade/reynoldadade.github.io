export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",

  // Target: https://go.nuxtjs.dev/config-target
  // target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Reynold Osei Adade",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Reynold Adade's porfolio page"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        hid: "lottie",
        src:
          "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      },
      {
        hid: "fontawesome",
        src: "https://kit.fontawesome.com/9fc318d596.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss

    "@nuxt/image",
    "@nuxt/postcss8"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"

    // https://go.nuxtjs.dev/pwa
    // "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: "en"
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
};
