<template>
  <v-container>

    <v-flex xs12  class="text-center mt-8">
      <Banner/>
    </v-flex>
    <v-row class="my-12">
      <SaveClimate/>
      <v-flex xs9 sm6 md4 lg3 align-self-center>
      <CurrentProjects/>
      </v-flex>
    </v-row>
    <ActiveProjects/>
    <Newsletter/>
  </v-container>
</template>

<script>
  import Newsletter from "@/components/Newsletter";
  import ActiveProjects from "@/components/ActiveProjects";
  import CurrentProjects from "@/components/CurrentProjects";
  import Banner from "@/components/Banner";
  import SaveClimate from "@/components/SaveClimate";
  export default {
    name: 'Home',
    components: {SaveClimate, ActiveProjects, Newsletter, CurrentProjects, Banner},
    data: () => ({
      endDate: new Date(2032, 11, 11, 0, 0),
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

