<template>
  <v-card
    max-width="800"
    class="mx-auto">
    <v-toolbar
      color="cyan"
      dark>
      <v-toolbar-title>Past Papers</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
      dark
        v-model="search"
        append-icon="search"
        label="Search"
        hide-details
      ></v-text-field>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :loading="loading"
      class="elevation-1"
    >
    <template v-slot:items="props">
      <td align="left" class="column1">{{ props.item.unitcode}}</td>
      <td align="left" class="column2">{{ props.item.unitname}}</td>
      <td align="left" class="column3"><v-btn color="primary" flat v-on:click.stop="dialog = true" @click="viewData(props.item)">View</v-btn></td>
    </template>
    </v-data-table>
    <v-dialog v-model="dialog" scrollable max-width="680px">
      <v-card>
        <v-card-title><h4>{{code}}</h4>: {{unit}}</v-card-title>
        <v-divider></v-divider>
          <iframe src="https://drive.google.com/viewerng/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"
          style="max-width:680px; height:500px;"
          frameborder="0"
          scrolling="no"
          onload="document.getElementById('loadingpdf').style.display='none'"></iframe>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="cyan" text @click="dialog = false" dark justify="centre">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
import { db } from '../main'
export default {
  data () {
    return {
      search: '',
      dialog: false,
      headers: [
        {
          text: 'UNIT CODE',
          align: 'left',
          value: 'unitcode'
        },
        {
          text: 'UNIT NAME',
          sortable: false,
          value: 'unitname'
        },
        {
          text: 'ACTION',
          sortable: false,
          value: 'view'
        }
      ],
      desserts: [],
      loading: true
    }
  },
  mounted () {
    db.ref('books').once('value').then((dataSnapshot) => {
      this.desserts = dataSnapshot.val()
      this.loading = false
    })
    // this.desserts = db.ref('books').val
  },
  methods: {
    viewData: function (data) {
      this.code = data.unitcode
      this.unit = data.unitname
      this.datac = data.view
    }
  }
}
</script>

<style scoped>
td.column1 {
  width: 20%
  text-left
}
td.column2 {
  width: 60%
}
td.column3 {
  width: 20%
}
</style>
