<template>
  <v-app>
    <AppBar/>
    <v-main>
      <HelloWorld/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer';
import AppBar from './components/AppBar';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
