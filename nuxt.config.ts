// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages:false,
  modules: [
    // '@nuxtjs/axios',
  ],
  // axios: {
  //   baseURL: 'http://backend.test/api', // Set the base URL for all Axios requests
  // },
  app:{
    head:{
        title: 'Nuxt App',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    }
  }
})
