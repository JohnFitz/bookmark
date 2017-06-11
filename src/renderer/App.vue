<template>
  <v-app>
    <v-navigation-drawer permanent light>
      <v-list dense>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>
                  All Links
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-divider dark></v-divider>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>
                  Favourites
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-divider dark></v-divider>
        <v-layout row>
          <v-flex xs6>
            <v-subheader>
              Categories
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-right">
            <v-dialog v-model="dialog">
              <v-btn slot="activator" icon>
                <v-icon>add</v-icon>
              </v-btn>
              <v-card>
                <v-card-row>
                  <v-card-title>Add Category</v-card-title>
                </v-card-row>
                <v-card-row>
                  <v-card-text>
                    <v-text-field label="Category Name" v-model="category.name"></v-text-field>
                  </v-card-text>
                </v-card-row>
                <v-card-row actions>
                  <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Cancel</v-btn>
                  <v-btn class="green--text darken-1" flat="flat" @click.native="addCat(category)">Add</v-btn>
                </v-card-row>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-list-item v-for="category in $store.state.category.categories" v-bind:key="category.name">
          <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>
                  {{ category.name }}
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class=""></v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCd64TbS1qJRJTtIXU9mAdHU4xMl2A6uYo',
  authDomain: 'bookmark-adb57.firebaseapp.com',
  projectId: 'bookmark-adb57',
  databaseURL: 'https://bookmark-adb57.firebaseio.com',
  storageBucket: 'bookmark-adb57.appspot.com',
  messagingSenderId: '355851923146'
}
const fire = firebase.initializeApp(config)
const db = fire.database()

export default {
  name: 'bookmark',
  data () {
    return {
      dialog: false,
      category: {
        name: null,
        color: null
      }
    }
  },
  firebase: {
    categories: db.ref('categories'),
    bookmarks: db.ref('bookmarks'),
    favourites: db.ref('favourites')
  },
  created () {
    this.$store.dispatch('loadCategories', this.$firebaseRefs.categories)
  },
  methods: {
    addCat (cat) {
      this.$firebaseRefs.categories.push(cat)
      this.dialog = false
      this.category.name = null
    }
  }
}
</script>

<style lang="stylus">
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\|Material\+Icons)
  @import '../../node_modules/vuetify/src/stylus/settings/_colors'
  $theme := {
    primary: $grey.darken-4
    accent: $red.accent-2
    secondary: $pink.darken-1
    info: $blue.lighten-1
    warning: $amber.darken-2
    error: $red.accent-4
    success: $green.lighten-2
  }
  @import '../../node_modules/vuetify/src/stylus/main'
  body
    background: $grey.lighten-4
</style>
