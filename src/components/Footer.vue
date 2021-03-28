<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Folge uns auf den sozialen Medien!</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="i in icons"
            :key="i.icon"
            :href="i.link"
            class="mx-4"
            dark
            icon
        >
          <v-icon size="24px">
            {{ i.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="primary lighten-2 py-4 text-center white--text" cols="12">

        {{ new Date().getFullYear() }} — <a href ="https://www.blocklink.de" class ="primary lighten-2 py-4 text-center white--text" target ="”_blank”">Blocklink GmbH</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
name: "Footer",
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
    icons: [
      {icon:'mdi-facebook',link:'https://de-de.facebook.com/pg/blocklink/about/'},
      {icon:'mdi-twitter',link:'https://twitter.com/blocklink_de'},
      {icon:'mdi-linkedin',link:'https://www.linkedin.com/company/blocklink-gmbh/?originalSubdomain=ke'},
      {icon:'mdi-instagram',}
    ],
  }),
}
</script>

<style scoped>

</style>