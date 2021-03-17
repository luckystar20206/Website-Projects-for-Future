<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
/*import HelloWorld from './views/Home';
import Login from "@/views/Login";
import Register from "@/views/Register";
import NeuesProjekt from "@/views/NeuesProjekt";
import SoFunktionierts from "@/views/SoFunktionierts";*/
import Footer from './components/Footer';
import AppBar from './components/AppBar';
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Footer,
    AppBar,
    //Login,
    //Register,
    //NeuesProjekt,
    //SoFunktionierts,
  },

  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({ name: "login" });
          });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
