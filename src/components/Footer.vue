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
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
        >
          <v-icon size="24px">
            {{ icon }}
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
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>

</style>