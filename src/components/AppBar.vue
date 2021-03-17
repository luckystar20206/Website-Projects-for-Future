<template>
  <nav>
  <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      elevation = 1
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

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
    <v-flex xs12 md 4>
    <v-btn
        v-for="link in links"
        :key="link.title"
        :to="link.path"
        color="white"
        text
        rounded
        class="my-0"
    >{{ link.title }}
    </v-btn>
    </v-flex>
    <v-btn flat color="grey">
      <span>Sign Out</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer app v-model="drawer" class="primary">
    <v-list>
      <v-list-item v-for="link in links" :key="link.title" router :to="link.path">
        <v-list-item-icon>
          <v-icon class="white--text">{{link.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class ="white--text">{{link.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
name: "AppBar",
  data: () => ({
      links: [
        {title: 'Home', path: '/', icon: 'home'}, //Man kann auch icon hinzufügen { title: 'Home', path: '/home', icon: 'home' },
        {title: 'Login', path: '/Login', icon: 'login'},
        {title: 'Register', path: '/Register', icon: 'logout'},
        {title: 'Neues Projekt', path: '/NeuesProjekt', icon: 'eco'},
        {title: 'So funktioniert´s', path: '/SoFunktionierts', icon: 'info'}
      ],
    drawer: false,
  }),
}
</script>

<style scoped>

</style>