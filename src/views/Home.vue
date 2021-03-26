<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-3 font-weight-bold mb-3">
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
    </v-row>
    <v-row>
      <v-col class = "mb-4 text-left">
        <h3>
          Projects for Future <br>
          ~ Genug der Worte, rette das Klima ~
        </h3>
        <p class="my-4 black--text font-weight-regular">
          Klimawandel und Naturkatastrophen, Umweltprobleme, Zerstörung der natürlichen Ressourcen, soziale Ungerechtigkeit oder Artensterben sind Probleme,
          die nicht nur uns, sondern auch künftige Generationen betreffen werden, wenn wir nichts dagegen tun. Daher haben wir mit Projects for Future eine Spendenplattform ins Leben gerufen,
          dass die Probleme der Welt konfrontiert, denn mit jeder Spende können wir gemeinsam den Verlauf der Erde ändern
          und die Probleme reduzieren. <br>
          Unsere ganzheitliche Token Ökonomie mit innovativen Integrationen wie Ethereum und Lightning unterscheidet Projects for Future von einfachen Spendenplattformen.
        </p>
      </v-col>
      <CurrentProjects/>
    </v-row>
    <ActiveProjects/>
    <Newsletter/>
  </v-container>
</template>

<script>
  import Newsletter from "@/components/Newsletter";
  import ActiveProjects from "@/components/ActiveProjects";
  import CurrentProjects from "@/components/CurrentProjects";
  export default {
    name: 'Home',
    components: {ActiveProjects, Newsletter, CurrentProjects},
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>

