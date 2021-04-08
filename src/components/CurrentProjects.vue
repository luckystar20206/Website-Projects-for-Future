<template>
  <v-card
      elevation="24"
      class="rounded-lg"
      color = "green"
  >
    <v-carousel cycle
                interval = 8000
                hide-delimiter-background
                show-arrows-on-hover
                light
                hide-delimiters
                width = ""
                height = "750px">
      <h3 class="text-center white--text">Neueste Projekte</h3>

      <v-carousel-item
          v-for="project in projects"
          :key="project.title"
          reverse-transition="slide-x-transition"
          transition="slide-x-transition"
      >
        <v-card class="ma-3 card-outer" hover height="90%">
          <div class="card-text">
            <v-card-text>
              <v-responsive class="text-center pt-4">
                <v-menu
                    bottom
                    rounded
                    offset-y
                >
                  <template v-slot:activator="{on}">
                    <v-btn
                        icon
                        height="100"
                        width="100"
                        v-on="on">
                      <v-avatar size="100">
                        <img :src="project.img" alt="">
                      </v-avatar>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-img rounded height="250" width="250" class="mx-3 mt-4" :src="project.img">
                    </v-img>
                  </v-card>
                </v-menu>
              </v-responsive>
              <div class="text-center headline">{{ project.title }}</div>
              <v-progress-linear
                  color="green"
                  height="12"
                  :value="getProgress(project)"
                  class="mt-2"
              >
                <strong>{{ project.amount }}€ von {{ project.needs }}€</strong>

              </v-progress-linear>
              <div class="ma-1 mt-3"><span class="text-md-subtitle-2 black--text font-weight-bold">Ziel: </span>
                <span class=grey--text>{{ project.goal }}</span></div>
              <div class=ma-1><span
                  class="text-md-subtitle-2 black--text font-weight-bold">Finanzbedarf: </span><span
                  class=grey--text>{{ project.needs }}€</span></div>

              <vue-countdown :time="getRemainingTime(project)" :transform="transformSlotProps"
                             v-slot="{ days, hours, minutes, seconds}">
                <div class=ma-1><span class="text-md-subtitle-2 black--text font-weight-bold">Restzeit：</span> <span
                    class=grey--text>{{ days }} Tage, {{ hours }}:{{ minutes }}:{{ seconds }}.</span></div>
              </vue-countdown>

              <div class=ma-1><span class="text-md-subtitle-2 black--text font-weight-bold">Unterstützer: </span>
                <span class=grey--text>{{ project.supporterCount }}</span></div>
            </v-card-text>
          </div>
          <div class="card-actions">
            <v-card-actions >
              <v-col class="text-center">
                <v-btn class="green accent-4 white--text">
                  <v-icon small left>euro_symbol</v-icon>
                  <span class="">Unterstützen</span>
                  <v-icon small right>euro_symbol</v-icon>
                </v-btn>
              </v-col>
            </v-card-actions>
            <v-card-actions>
              <v-flex class="d-flex justify-space-between">
                <div>
                  <v-btn icon>
                    <v-icon>thumb_up</v-icon>
                  </v-btn>
                  <span class="text-md-subtitle-2 black--text font-weight-bold ">{{ project.upvoteCount }}</span>
                  <v-btn icon>
                    <v-icon>thumb_down</v-icon>
                  </v-btn>
                  <span class="text-md-subtitle-2 black--text font-weight-bold ">{{ project.downvoteCount }}</span>
                </div>
                <v-spacer></v-spacer>
                <div>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                  <span class="text-md-subtitle-2 black--text font-weight-bold">Teilen</span>
                </div>
              </v-flex>
            </v-card-actions>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import ActiveProjects from "@/components/ActiveProjects";
export default {
  name: "CurrentProjects",
  data() {
    return {
      projects: [
        {
          title: "Bäume Pflanzen im Ruhrgebiet",
          img: '/avatar-1.jpg',
          goal: "Die karge Landschaft zu verschönern und alles zu retten und grüner zu machen lorem ipsum...",
          needs: 400,
          created: new Date(2020, 12, 1, 2, 11),
          due: new Date(2021, 7, 1, 2, 21),
          supporterCount: 0,
          upvoteCount: 42,
          downvoteCount: 2,
          amount: 77,
        },
        {
          title: "LANGES PROJEKT",
          img: "/avatar-2.png",
          goal: "langes projekt dass sehr viele wörter in der zielbeschreibung hat damit man schauen kann " +
              "ob das alles in die karte passt oder nicht, weil je nachdem muss ich schauen was ich sonst noch machen muss, css macht richtig viel spaß" +
              "irgendwie hatten die leute recht was css angeht und ich finde das belastend, ich gehe sogar so weit, dass ich beim ziel die maximale anzahl der wörter anhand" +
              "dieser beschreibung festlege. Man sollte das Ziel nicht unendlich lang werden lassen.",
          needs: 23250,
          created: new Date(2021, 1, 1, 1, 1),
          due: new Date(2021, 5, 12, 9, 43),
          supporterCount: 0,
          upvoteCount: 534632,
          downvoteCount: 3344,
          amount: 1230,
        },
        {
          title: "Blumen gießen 2",
          img: "/avatar-2.png",
          goal: "Bienen retten",
          needs: 230,
          created: new Date(2021, 2, 1, 12, 23),
          due: new Date(2021, 5, 12, 9, 43),
          supporterCount: 0,
          upvoteCount: 232,
          downvoteCount: 11,
          amount: 150,
        },
        {
          title: "Blumen gießen 3",
          img: "/avatar-2.png",
          goal: "Bienen retten",
          needs: 230,
          created: new Date(2020, 11, 10, 4, 30),
          due: new Date(2021, 5, 12, 9, 43),
          supporterCount: 0,
          upvoteCount: 31,
          downvoteCount: 5,
          amount: 150,
        },
        {
          title: "Blumen gießen 4",
          img: "/avatar-2.png",
          goal: "Bienen retten",
          needs: 230,
          created: new Date(2021, 3, 5, 12, 4),
          due: new Date(2021, 5, 12, 9, 43),
          supporterCount: 0,
          upvoteCount: 125,
          downvoteCount: 24,
          amount: 150,
        },
        {
          title: "Blumen gießen 5",
          img: "/avatar-2.png",
          goal: "Bienen retten",
          needs: 230,
          created: new Date(2021, 2, 26, 12),
          due: new Date(2021, 5, 12, 9, 43),
          supporterCount: 0,
          upvoteCount: 42,
          downvoteCount: 13,
          amount: 150,
        },
        {
          title: "Pflanze Pflanzen im Ruhrgebiet",
          img: "/avatar-3.png",
          goal: "Projects for future",
          needs: 1000,
          created: new Date(2020, 8, 12, 7, 52),
          due: new Date(2021, 8, 12, 4, 58),
          supporterCount: 0,
          upvoteCount: 24,
          downvoteCount: 2,
          amount: 45,
        },
        {
          title: "Rauche Pflanzen im Ruhrgebiet",
          img: "/avatar-4.jpg",
          goal: "Die karge Landschaft zu verschönern",
          needs: 400,
          created: new Date(),
          due: new Date(2021, 2, 14, 4, 58),
          supporterCount: 0,
          upvoteCount: 109,
          downvoteCount: 27,
          amount: 45,
        },
        {
          title: "Esse Pflanzen im Ruhrgebiet",
          img: "/avatar-5.jpg",
          goal: "Die karge Landschaft zu verschönern",
          needs: 555,
          created: new Date(2021, 1, 30, 23, 45),
          due: new Date(2021, 5, 14, 4, 38),
          supporterCount: 42,
          upvoteCount: 42,
          downvoteCount: 3,
          amount: 70,
        },
      ],
      page: 1,
      sortBy: 'created',
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
  methods:{
    import: ActiveProjects.methods,
    getProgress(project) {
      return (project.amount / project.needs) * 100
    },
    getRemainingTime(project) {
      return project.due - new Date()
    },
    transformSlotProps(props) {
      const formattedProps = {};
      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    },
  }
}
</script>

<style lang="scss" scoped>
.card-outer {
  position: relative;
  padding-bottom: 0px;
}
.card-text{
  padding-bottom: 150px;
}
.card-actions {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>