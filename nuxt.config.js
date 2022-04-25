export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "firebase",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/firebase.client.js", "~/plugins/toast.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "cookie-universal-nuxt",
    "@nuxtjs/svg-sprite",

    [
      "@nuxtjs/firebase",
      {
        config: {
          // REQUIRED: Official config for firebase.initializeApp(config):
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID,
        },
        services: {
          persistence: "local",
          initialize: {
            onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            onAuthStateChangedAction: "onAuthStateChangedAction",
            subscribeManually: false,
          },
          ssr: false,
        },
      },
    ],
  ],
  svgSprite: {
    input: "~/assets/icons/svg",
    output: "~/assets/icons/sprite",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
