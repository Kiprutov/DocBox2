<template>
<v-layout>
    <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>

            <div class="pl-4 pr-4 pt-2 pb-2">
                <v-text-field
                    label="Email"
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                ></v-text-field>
                <br>
                <div class="error" v-html="error" />
                <v-btn
                    class="cyan"
                    :loading="loading"
                    :disabled="loading"
                    dark
                    @click="login">
                    Login
                </v-btn>
            </div>
        </div>
    </v-flex>
</v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      let navigate = this.$router
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            navigate.go({ path: navigate.path })
          },
          function (err) {
            alert('Opps,' + err.message)
          }
        )
    }
  }
}
</script>

<style scoped>

</style>
