<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            DocBox
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
                v-if="!isLoggedIn"
                flat
                dark
                @click="navigateTo({name: 'Login'})">
                Login
            </v-btn>

            <v-btn
                v-if="!isLoggedIn"
                flat
                dark
                @click="navigateTo({name: 'Register'})">
                Register
            </v-btn>

            <v-chip
                v-if="isLoggedIn"
                class="ma-2"
                color="primary"
                outlined
                pill >
                <v-icon left>mdi-account-outline</v-icon>
                {{currentUser}}
            </v-chip>
            <v-btn
                v-if="isLoggedIn"
                flat
                dark
                v-on:click="logout">
                Logout
            </v-btn>

        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'navbar',
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    logout: function () {
      let navigate = this.$router
      firebase
        .auth()
        .signOut()
        .then(() => {
          navigate.go({ path: navigate.push('/') })
        })
    }
  }
}
</script>

<style scoped>

</style>
