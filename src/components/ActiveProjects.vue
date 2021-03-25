<template>
  <div class="active projects">
    <h1 class="subheading grey--text">Aktive Projekte</h1>

    <v-container class="my-5">
        <v-toolbar  color = "deep-purple accent-4" dense dark class ="mb-6">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>
            Aktive Projekte
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
              v-model="filter"
              type="text"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Suche nach Projekten"
              class ="shrink"
          ></v-text-field>
          <v-menu
              bottom
              left
              rounded = "lg"
              offset-y
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
                  <v-icon>{{property.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title @click="sortByAsc(property.sortProperty)">{{property.name}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
              bottom
              left
              rounded = "lg"
              offset-y
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
                  <v-icon>{{property.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title @click="sortByDesc(property.sortProperty)">{{property.name}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="project in filteredProjects" :key="project.title">
            <v-card class="ma-3">
              <v-responsive class="text-center pt-4">
                <v-avatar size ="100">
                  <img :src = "project.img" alt="">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class ="text-center headline">{{project.title}}</div>
                <v-progress-linear
                    color="green"
                    height="12"
                    :value ="getProgress(project)"
                >
                  <strong>{{project.amount}}€ von {{project.needs}}€</strong>

                </v-progress-linear>
                <div class = ma-1><span class = "text-md-subtitle-2 black--text font-weight-bold" >Ziel: </span> <span class = grey--text>{{project.goal}}</span></div>
                <div class = ma-1><span class = "text-md-subtitle-2 black--text font-weight-bold" >Finanzbedarf: </span><span class = grey--text>{{project.needs}}€</span></div>

                <vue-countdown :time= "getRemainingTime(project)" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds}">
                  <div class = ma-1> <span class = "text-md-subtitle-2 black--text font-weight-bold" >Restzeit：</span> <span class = grey--text>{{ days }} Tage, {{hours}}:{{ minutes }}:{{ seconds }}.</span></div>
                </vue-countdown>

                <div class = ma-1><span class = "text-md-subtitle-2 black--text font-weight-bold" >Unterstützer: </span> <span class = grey--text>{{project.supporterCount}}</span></div>
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-col class ="text-center">
                  <v-btn class="green accent-4 white--text">
                    <v-icon small left>euro_symbol</v-icon>
                    <span class ="">Unterstützen</span>
                   <v-icon small right>euro_symbol</v-icon>
                 </v-btn>
                </v-col>
              </v-card-actions>
<!--              Das Teilen Icon irgendwie nach rechts bringen-->
              <v-flex class = "d-flex justify-space-between mx-4">
                <div>
                <v-btn icon>
                  <v-icon>thumb_up</v-icon>
                </v-btn>
                <span class="text-md-subtitle-2 black--text font-weight-bold ">{{project.upvoteCount}}</span>
                <v-btn icon>
                  <v-icon>thumb_down</v-icon>
                </v-btn>
                <span class="text-md-subtitle-2 black--text font-weight-bold ">{{project.downvoteCount}}</span>
                </div>
                <div>
                  <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
                <span class="text-md-subtitle-2 black--text font-weight-bold">Teilen</span>
                </div>
                </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>

  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
export default {
  components:{VueCountdown},
  data() {
    return {
      itemsPerPage: [4,8,12,-1],
      filter: '',
      page: 1,
      sort: [
        {name: 'Alphabetisch', sortProperty:'title', ascending: true,icon:'sort_by_alpha'},
        {name: 'Restzeit', sortProperty:'due', ascending: true,icon: 'access_time'},
        {name: 'Finanzbedarf', sortProperty:'needs', ascending: true,icon:'euro'},
        {name: 'Unterstützer', sortProperty:'supporterCount', ascending: true,icon:'accessibility'},
      ],
      projects:[
        {
          title:"Bäume Pflanzen im Ruhrgebiet",
          img: '/avatar-1.jpg',
          goal:"Die karge Landschaft zu verschönern und alles zu retten und grüner zu machen lorem ipsum...",
          needs:400,
          due:new Date(2021,7,1,2,21),
          supporterCount: 0,
          upvoteCount: 42,
          downvoteCount:2,
          amount: 77,
          progress: (this.amount / this.needs),
        },
        {
          title:"Blumen gießen",
          img: "/avatar-2.png",
          goal:"Bienen retten",
          needs:230,
          due:new Date(2021,5,12,9,43),
          supporterCount: 0,
          upvoteCount: 532,
          downvoteCount:34,
          amount: 150,
          progress: (this.amount / this.needs),
        },
        {
          title:"Blumen gießen 2",
          img: "/avatar-2.png",
          goal:"Bienen retten",
          needs:230,
          due:new Date(2021,5,12,9,43),
          supporterCount: 0,
          upvoteCount: 232,
          downvoteCount:11,
          amount: 150,
          progress: (this.amount / this.needs),
        },
        {
          title:"Blumen gießen 3",
          img: "/avatar-2.png",
          goal:"Bienen retten",
          needs:230,
          due:new Date(2021,5,12,9,43),
          supporterCount: 0,
          upvoteCount: 31,
          downvoteCount:5,
          amount: 150,
          progress: (this.amount / this.needs),
        },
        {
          title:"Blumen gießen 4",
          img: "/avatar-2.png",
          goal:"Bienen retten",
          needs:230,
          due:new Date(2021,5,12,9,43),
          supporterCount: 0,
          upvoteCount: 125,
          downvoteCount:24,
          amount: 150,
          progress: (this.amount / this.needs),
        },
        {
          title:"Blumen gießen 5",
          img: "/avatar-2.png",
          goal:"Bienen retten",
          needs:230,
          due:new Date(2021,5,12,9,43),
          supporterCount: 0,
          upvoteCount: 42,
          downvoteCount:13,
          amount: 150,
          progress: (this.amount / this.needs),
        },
        {
          title:"Pflanze Pflanzen im Ruhrgebiet",
          img: "/avatar-3.png",
          goal:"Projects for future",
          needs:1000,
          due:new Date(2021,8,12,4,58),
          supporterCount: 0,
          upvoteCount: 24,
          downvoteCount:2,
          amount: 45,
          progress: (this.amount / this.needs),
        },
        {
          title:"Rauche Pflanzen im Ruhrgebiet",
          img: "/avatar-4.jpg",
          goal:"Die karge Landschaft zu verschönern",
          needs:400,
          due:new Date(2021,2,14,4,58),
          supporterCount: 0,
          upvoteCount: 109,
          downvoteCount:27,
          amount: 45,
          progress: (this.amount / this.needs),
        },
        {
          title:"Esse Pflanzen im Ruhrgebiet",
          img: "/avatar-5.jpg",
          goal:"Die karge Landschaft zu verschönern",
          needs:555,
          due:new Date(2021,5,14,4,38),
          supporterCount: 42,
          upvoteCount: 42,
          downvoteCount:3,
          amount: 70,
          progress: (this.amount / this.needs),
        },
      ],
    }
  },
  methods:{
    sortByAsc(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
    sortByDesc(prop) {
      this.projects.sort((a,b) => a[prop] > b[prop] ? -1 : 1)
    },
    getProgress(project){
      return (project.amount / project.needs)*100
    },
    getRemainingTime(project){
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
  computed:{
    filteredProjects(){
      return this.projects.filter(project => {
        const filter = this.filter.toUpperCase();
        const hasTitleMatch = project.title.toUpperCase().includes(filter);
        return hasTitleMatch;
      })
    },
  },
}
</script>
<style scoped>
</style>
