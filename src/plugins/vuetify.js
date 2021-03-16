import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: { //Find iconfonts here https://vuetifyjs.com/en/features/icon-fonts/
        iconfont: 'mdi', // default - only for display purposes

    },
});
