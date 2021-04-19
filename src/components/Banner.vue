<template>
  <v-row class="text-center">
    <div class = "bg">

  <v-col cols="12" class="">
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Welcome to ProjectsForFuture
      </h1>
      <h2 class="my-4 display-1 font-weight-bold mb3">
        Contribute to save our world!
      </h2>

      <p class="my-4 black--text font-weight-regular" >
        Trage dazu bei dass unser Planet lebenswert bleibt und entscheide mit, <br>
        welches Projekt sich eignet, um das Klima konstruktiv zu beschützen.
      </p>
    </v-col>
  </v-col>
  <v-col>

    <vue-countdown :time="time" :transform="transformSlotProps"
                   v-slot="{ days, hours, minutes, seconds}">
      <div class="headline my-4">In {{ days }} Tagen, {{ hours }} Stunden, {{ minutes }} Minuten und {{ seconds }} Sekunden hat
        die Weltgemeinschaft 3% ihres verbleibenden CO2-Budgets unwiederbringlich verbraucht!*</div>
    </vue-countdown>
    <v-divider></v-divider>
    <p class="text-justify mb-4">*: CO2-Budget steht vereinfachend für die Menge von CO2-Äquivalenten, die in unserer Athmosphäre freigesetzt werden
      können, ohne eine Kettenreaktion der Treibhauseffekte zu riskieren. Nach wissenschaftlicher Einschätzung droht eine
    solche selbst-verstarkende Rückkopplung der globalen Erwärmung ab 1,5°C oberhalb der durchschnittlichen Temperatur auf
    vorindustriellem Niveau.</p>

  </v-col>
    </div>
<!--    https://publish.twitter.com/?buttonType=HashtagButton&query=FridaysForFuture&widget=Button-->
    <a href="https://twitter.com/intent/tweet?button_hashtag=FridaysForFuture&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #FridaysForFuture</a>
    <v-spacer/>
    <div class="share">
      <facebook :url="url" scale="3"></facebook>
      <twitter :url="url" title="Schaut euch ProjectsForFuture an: " scale="3"></twitter>
      <linkedin :url="url" scale="3"></linkedin>
      <telegram :url="url" scale="3"></telegram>
      <whats-app :url="url" title="Hallo, schau dir ProjectsForFuture an" scale="3"></whats-app>
      <pinterest :url="url" scale="3"></pinterest>
      <reddit :url="url" scale="3" title="Schau dir ProjectsForFuture an"></reddit>
      <google :url="url" scale="3"></google>
      <email :url="url" subject="Hallo, schau dir ProjectsForFuture an" scale="3"></email>
    </div>
  </v-row>

</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
import {
  Facebook,
  Twitter,
  Linkedin,
  Pinterest,
  Reddit,
  Telegram,
  WhatsApp,
  Email,
  Google
} from "vue-socialmedia-share";

const now = new Date();
const endDate = new Date(2032, 11, 11, 0, 0);
export default {
  name: "Banner",
  components: {VueCountdown,Facebook, Twitter, Linkedin, Pinterest, Reddit, Telegram, WhatsApp, Email, Google},
  data() {
    return {
      update: true,
      time: endDate - now,
      url: "https://localhost:8080"
    }
  },
  methods: {
    transformSlotProps(props) {
      const formattedProps = {};
      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    },

  },
  mounted(){
    let twitterScript = document.createElement('script')
    twitterScript.setAttribute('src','https://platform.twitter.com/widgets.js')
    document.head.appendChild(twitterScript)
  }
}
</script>
<style lang="scss" scoped>
.bg{
  background-size: cover;
  background-image: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
}
.share > span {
  padding: 1em;
}


</style>