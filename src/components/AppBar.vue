<template>
  <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      elevation = 1
  >
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
      />

      <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
      />
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-title>Projects for future</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
    >{{ link }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
name: "AppBar",
  data: () => ({
    links: [
      'Home',
      'Login',
      'Registrieren',
      'Neues Projekt',
      'So funktioniert´s',
    ],
  }),
}
</script>

<style scoped>

</style>