<template>
  <nav>
    <!--    src="https://picsum.photos/1920/1080?random"-->
    <!--      fade-img-on-scroll-->
  <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
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
    <v-flex ml-5 xs12 md 4>
    <v-btn
        v-for="link in displayedLinks"
        :key="link.title"
        :to="link.path"
        color="white"
        text
        rounded
        class="my-0 hidden-xs-only"
    >{{ link.title }}
    </v-btn>
    </v-flex>
    <v-btn v-if="user.loggedIn" flat color="white" text rounded @click="signOut">
      <span>{{user.data.displayName}}</span>
      <v-icon right>logout</v-icon>
    </v-btn>
    <div v-if="!user.loggedIn">
    <v-btn text color="white--text" to="/Login">
      <span>Anmelden</span>
      <v-icon right>login</v-icon>
    </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer app v-model="drawer" class="primary">
    <v-list>
      <v-list-item v-for="link in displayedLinks" :key="link.title" router :to="link.path">
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
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
name: "AppBar",
  data: () => ({
      links: [
        {title: 'Home', path: '/', icon: 'home',DisplayIfLoggedIn: true}, //Man kann auch icon hinzufügen { title: 'Home', path: '/home', icon: 'home' },
        {title: 'Login', path: '/Login', icon: 'login',DisplayIfLoggedIn:false},
        {title: 'Register', path: '/Register', icon: 'app_registration',DisplayIfLoggedIn:false},
        {title: 'Neues Projekt', path: '/NeuesProjekt', icon: 'eco',DisplayIfLoggedIn: true},
        {title: 'So funktioniert´s', path: '/SoFunktionierts', icon: 'info',DisplayIfLoggedIn: true}
      ],
    drawer: false,
  }),
  methods: {
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({
              name: "Home"
            });
          });
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    }),
    displayedLinks(){
      return this.links.filter(link => link.DisplayIfLoggedIn || !this.user.loggedIn);
    }
  },
/*    filteredProjects() {
      return this.projects.filter(project => {
        const filter = this.filter.toUpperCase();
        const hasTitleMatch = project.title.toUpperCase().includes(filter);
        return hasTitleMatch;
      })
    },*/
}
</script>

<style scoped>

</style>