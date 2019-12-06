<template>
  <v-parallax
      src="https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/student-exam-image_0.jpg"
      dark>
          <v-row align="centre" justify="center">
            <v-col cols="12" class="text-center">
              <h1 class="h1-reponsive" style="color:blue">
                <strong>ACCESS LARGEST REPOSITORY OF UNIVERSITIES PAST PAPERS.</strong>
              </h1>

              <v-divider color="primary"></v-divider>
              <h5 class="display-1 font-weight-thin mb-5" style="color:black">If you have any questions, comments or concerns, please call us on +254706893294</h5>
              <v-btn tile color="primary" @click="navigateTo({name: 'Login'})">Login</v-btn>
              <v-btn tile color="primary">About me</v-btn>
            </v-col>
          </v-row>
    </v-parallax>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
