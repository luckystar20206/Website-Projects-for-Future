import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from "./store/store";
import firebase from "firebase/app";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCJgsW6e4m2HXNk39p7R9b7EDV_1UwNsiQ",
  authDomain: "website-prototype-3188f.firebaseapp.com",
  projectId: "website-prototype-3188f",
  storageBucket: "website-prototype-3188f.appspot.com",
  messagingSenderId: "691276522348",
  appId: "1:691276522348:web:107e46348e40772fee0949"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

let app;

db.collection('projects').get().then(snapshot =>{
  setupProjects(snapshot.docs);
});

const projectsList = document.querySelector('.projects');
const setupProjects = (data) => {
  let html = '';
  data.forEach(doc => {
    const project = doc.data();
    console.log(project)
  })
}

auth.onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});