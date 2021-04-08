<template>
  <v-container>
    <v-flex xs12  class="text-center mt-8 mb-4">
      <SoFunktioniertsBanner/>
    </v-flex>
    <Newsletter/>
  </v-container>
</template>

<script>
import Newsletter from "@/components/Newsletter";
import SoFunktioniertsBanner from "@/components/SoFunktioniertsBanner";
export default {
  name: "SoFunktionierts",
  components: {Newsletter, SoFunktioniertsBanner},
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>

<style scoped>

</style>