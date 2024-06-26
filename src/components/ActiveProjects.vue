<template>
  <div class="active projects mt-8">
    <h1 class="subheading black--text">Aktive Projekte</h1>
    <v-container class="my-5">
      <v-toolbar color="green accent-4 white--text" dense dark class="mb-6">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
          Aktive Projekte
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
            @keypress="update"
            v-model="filter"
            type="text"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Suche nach Projekten"
            class="shrink"
        ></v-text-field>
        <v-menu
            bottom
            left
            rounded="lg"
            offset-y
            transition="scroll-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                text
                v-bind="attrs"
                v-on="on"
            >aufsteigend
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                v-for="property in sort"
                :key="property.name"
                link
            >
              <v-list-item-icon>
                <v-icon>{{ property.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="sortByAsc(property.sortProperty)">{{ property.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
            bottom
            left
            rounded="lg"
            offset-y
            transition="scroll-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                text
                v-bind="attrs"
                v-on="on"
            >absteigend
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                v-for="property in sort"
                :key="property.name"
                link
            >
              <v-list-item-icon>
                <v-icon>{{ property.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="sortByDesc(property.sortProperty); ">{{ property.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in filteredProjects" :key="project.title">
          <v-card class="ma-3 card-outer" hover height="95%" width="95%" >
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
export default {
  components: {VueCountdown},
  data() {
    return {
      update: true,
      itemsPerPage: [4, 8, 12, -1],
      filter: '',
      page: 1,
      sort: [
        {name: 'Alphabetisch', sortProperty: 'title', ascending: true, icon: 'sort_by_alpha'},
        {name: 'Restzeit', sortProperty: 'due', ascending: true, icon: 'access_time'},
        {name: 'Finanzbedarf', sortProperty: 'needs', ascending: true, icon: 'euro'},
        {name: 'Unterstützer', sortProperty: 'supporterCount', ascending: true, icon: 'accessibility'},
      ],
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
              "dieser beschreibung festlege.",
          needs: 23250,
          created: new Date(2021, 1, 1, 1, 1),
          due: new Date(2021, 5, 12, 9, 43),
          supporterCount: 0,
          upvoteCount: 53432,
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
    }
  },
  methods: {
    sortByAsc(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    },
    sortByDesc(prop) {
      this.projects.sort((a, b) => a[prop] > b[prop] ? -1 : 1)
    },
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
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => {
        const filter = this.filter.toUpperCase();
        const hasTitleMatch = project.title.toUpperCase().includes(filter);
        return hasTitleMatch;
      })
    },
  },
}
</script>
<style lang="scss">
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