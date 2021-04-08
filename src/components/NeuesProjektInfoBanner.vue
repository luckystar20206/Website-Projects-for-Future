<template>
  <v-row class="text-center">


      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Du willst einen Unterschied machen?
          </h1>
          <h2 class="my-4 display-1 font-weight-bold mb3">
            Dann registriere dich jetzt!
          </h2>

          <p class="my-4 black--text font-weight-regular" >
            Registriere dich, erstelle ein Neues Projekt und sammel Unterstützer, damit unser Planet lebenswert bleibt. <br>
          </p>
        </v-col>
      </v-col>
      <v-col>


        <p class="text-justify mb-4">Der Schritt zu deinem ersten Projekt ist einfach.
          Registriere dich unter <router-link to="/Register">Register</router-link> falls du noch keinen Account hast. Falls du bereits einen Account hast, dann melde dich an unter <router-link to="/Login">Login</router-link> an.
          Sobald du angemeldet bist, kannst du unter <router-link to="/NeuesProjekt">Neues Projekt</router-link> Projekte erstellen und auf der <router-link to="/Home">Startseite</router-link> Projekte liken und unterstützen. Los gehts! </p>
      </v-col>

  </v-row>
</template>

<script>
export default {
  name: "NeuesProjektInfoBanner"
}
</script>

<style scoped>

</style>