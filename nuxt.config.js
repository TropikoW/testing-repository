import { plugins } from "chart.js";
import firebase from "firebase/compat/app";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testing',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  postcss:{
    plugins:{
      tailwindcss:{},
      autoprefixer:{}
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/firebase',    
  ],

  // npm install @nuxtjs/axios
  axios: {
    // Opciones de Axios
  },

  firebase: {
    customEnv: false,
    config:{
      apiKey: process.env.NUXT_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_FIREBASE_MESSAGIN_SENDER_ID,
      appId: process.env.NUXT_FIREBASE_ID
    },
    services: {
      auth: false,
      firestore: false,
      functions: false,
      storage: false,
      database: false,
      messaging: false,
      performance: false,
      appCheck: false,
      analytics: false,
      remoteConfig: false,
    },
    env: {
      FIRE_ENV: process.env.FIRE_ENV
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
