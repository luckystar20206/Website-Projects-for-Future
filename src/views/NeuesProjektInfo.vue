<template>
  <v-container>
    <v-flex xs12  class="text-center mt-8 mb-4">
      <div class = "bg">
      <NeuesProjektInfoBanner/>
      <Login/>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
import NeuesProjektInfoBanner from "@/components/NeuesProjektInfoBanner";
import Login from "@/views/Login";
export default {
name: "NeuesProjektInfo",
  components: {Login, NeuesProjektInfoBanner}
}
</script>

<style lang="scss" scoped>
.bg{
  padding-left: 5px;
  padding-right: 5px;
  background-size: cover;
  background-image: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(https://images.pexels.com/photos/9198/nature-sky-twilight-grass-9198.jpg?auto=compress&cs=tinysrgb&h=750&w=1260);
}
</style>