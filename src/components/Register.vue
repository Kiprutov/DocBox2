<template>
<v-layout>
    <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense dark class="cyan">
                <v-toolbar-title>Regiter</v-toolbar-title>
            </v-toolbar>

            <div class="pl-4 pr-4 pt-2 pb-2">
                <v-text-field
                    label="Email"
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    label="Password"
                    type="password"
                    hint="Atleast 8 characters"
                    v-model="password"
                ></v-text-field>
                <br>
                <div class="error" v-html="error" />
                <v-btn
                    class="cyan"
                    dark
                    @click="register">
                    Register
                </v-btn>
            </div>
        </div>
    </v-flex>
</v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      let navigate = this.$router
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            navigate.go({ path: navigate.path })
          },
          function (err) {
            alert('Opps.' + err.message)
          }
        )
    }
  }
}
</script>

<style scoped>

</style>
