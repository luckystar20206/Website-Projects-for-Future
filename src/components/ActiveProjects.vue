<template>
  <div class="team">
    <h1 class="subheading grey--text">Aktive Projekte</h1>

    <v-container class="my-5">
      <v-toolbar  color = "deep-purple accent-4" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
          Aktive Projekte
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                text
                v-bind="attrs"
                v-on="on"
            >Sortieren
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="property in sort"
                :key="property.name"
            >
              <v-list-item-icon>{{}}</v-list-item-icon>
              <v-list-item-title @click="sortByDesc(property.sortProperty)">{{property.name}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" :key="project.title">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              image here
            </v-responsive>
            <v-card-text>
              <div class ="subheading">{{project.title}}</div>
              <div class = "grey--text">Ziel: {{project.goal}}</div>
              <div class = "grey--text">Finanzbedarf: {{project.needs}}</div>
              <vue-countdown :time= "project.time" v-slot="{ days, hours, minutes}">
                <div class = "grey--text"> Restzeit：{{ days }} days, {{hours}} hours, {{ minutes }} minutes.</div>
              </vue-countdown>
              <div class="grey--text">Unterstützer: {{project.supporterCount}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color ="grey">
                <v-icon small left>thumb_up</v-icon>
                <span class ="">Upvote</span>
              </v-btn>
              <v-btn flat color ="grey">
                <v-icon small left>thumb_down</v-icon>
                <span class ="">Downvote</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: [
        {name: 'Alphabetisch', sortProperty:'title', ascending: true,},
        {name: 'Ablauf', sortProperty:'due', ascending: true,},
        {name: 'Finanzbedarf', sortProperty:'needs', ascending: true,},
        {name: 'Unterstützer', sortProperty:'supporterCount', ascending: true,},
      ],
      projects:[
        {
          title:"Bäume Pflanzen im Ruhrgebiet",
          goal:"Die karge Landschaft zu verschönern und alles zu retten und grüner zu machen lorem ipsum...",
          needs:400,
          due:new Date(2021,11,14,4,58),
          time:this.due - new Date(),
          supporterCount: 42,
        },
        {
          title:"Blumen gießen",
          goal:"Bienen retten",
          needs:230,
          due:new Date(2021,11,14,4,58),
          time:this.due - new Date(),
          supporterCount: 101,
        },
        {
          title:"Noch ein Projekt",
          goal:"Projects for future",
          needs:1000,
          due:new Date(2021,11,14,4,58),
          time:this.due - new Date(),
          supporterCount: 1,
        },
        {
          title:"Alle Pflanzen im Ruhrgebiet",
          goal:"Die karge Landschaft zu verschönern",
          needs:400,
          due:new Date(2021,11,14,4,58),
          time:this.due - new Date(),
          supporterCount: 42,
        },
        {
          title:"Esse Pflanzen im Ruhrgebiet",
          goal:"Die karge Landschaft zu verschönern",
          needs:400,
          due:new Date(2021,11,14,4,58),
          time:this.due - new Date(),
          supporterCount: 42,
        },
      ],
    }
  },
  methods:{
    sortByDesc(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>
<style scoped>

</style>
