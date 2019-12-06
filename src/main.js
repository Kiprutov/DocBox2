// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

Vue.config.productionTip = false

Vue.use(Vuetify)

const config = {
  apiKey: 'AIzaSyD1zNbKWLSU05QjXfNituOHARhOaoizPXU',
  authDomain: 'docbox-pastpapers.firebaseapp.com',
  databaseURL: 'https://docbox-pastpapers.firebaseio.com',
  projectId: 'docbox-pastpapers',
  storageBucket: 'docbox-pastpapers.appspot.com',
  messagingSenderId: '114083552410',
  appId: '1:114083552410:web:a4fe4a6671e352cef31323',
  measurementId: 'G-H7P21RJL7L'
}
// Initialize Firebase
firebase.initializeApp(config)

export const db = firebase.database()

let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
