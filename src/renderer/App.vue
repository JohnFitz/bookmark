<template>
  <v-app>
    <v-navigation-drawer permanent light>
      <v-list dense>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
                <v-icon>bookmark</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                  All bookmarks
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-divider dark></v-divider>
        <v-list-item>
          <v-list-tile>
          <v-list-tile-action>
                <v-icon>grade</v-icon>
              </v-list-tile-action>
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
            <v-dialog v-model="dialog" width="500">
              <v-btn slot="activator" icon>
                <v-icon>add</v-icon>
              </v-btn>
              <v-card>
                <v-card-row>
                  <v-card-title>Add a new category</v-card-title>
                </v-card-row>
                <v-card-row>
                  <v-card-text>
                    <v-text-field label="Category Name" v-model="category.name"></v-text-field>
                    <v-select
                        v-bind:items="categoryColors"
                        v-model="category.color"
                        label="Select Color"
                        dark
                        single-line
                        auto
                      ></v-select>
                  </v-card-text>
                </v-card-row>
                <v-card-row actions>
                  <v-btn class="secondary--text darken-1" flat="flat" @click.native="dialog = false">Cancel</v-btn>
                  <v-btn class="secondary--text darken-1" flat="flat" @click.native="addCat(category)">Add</v-btn>
                </v-card-row>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-list-item v-for="category in $store.state.bookmark.categories" v-bind:key="category.name">
          <v-list-tile>
            <v-list-tile-action>
                  <v-icon :style="{ color: category.color }">fiber_manual_record</v-icon>
                </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                  {{ category.name }}
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar light>
      <v-toolbar-title>All Bookmarks</v-toolbar-title>
      <v-text-field prepend-icon="search" label="Search..." hide-details single-line light></v-text-field>
      <v-toolbar-items>
        <v-menu left top origin="bottom left" transition="v-scale-transition">
        <v-btn light icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-title>Change Account</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Invite Friends</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main class="bg">
      <v-container fluid>
      </v-container>
      <v-dialog v-model="bookmark" width="500">
        <v-btn floating class="secondary floatingbtn" slot="activator">
          <v-icon light>add</v-icon>
        </v-btn>
        <v-card>
          <v-card-row>
            <v-card-title>Add a new bookmark</v-card-title>
          </v-card-row>
          <v-card-row>
            <v-card-text>
              <v-text-field label="Category Name" v-model="category.name"></v-text-field>
              <v-select
                  v-bind:items="$store.state.bookmark.categories"
                  v-model="bookmarklink"
                  label="Select Category"
                  dark
                  single-line
                  auto
                ></v-select>
            </v-card-text>
          </v-card-row>
          <v-card-row actions>
            <v-btn class="secondary--text darken-1" flat="flat" @click.native="bookmark = false">Cancel</v-btn>
            <v-btn class="secondary--text darken-1" flat="flat" @click.native="addCat(category)">Add</v-btn>
          </v-card-row>
        </v-card>
      </v-dialog>
    </main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
var config = {
  databaseURL: process.env.FIREBASE_DATABASE_URL
}
const fire = firebase.initializeApp(config)
const db = fire.database()

export default {
  name: 'bookmark',
  data () {
    return {
      dialog: false,
      bookmark: false,
      categoryColors: [
        'Red', 'Orange', 'Yellow', 'Green',
        'Teal', 'Blue', 'Violet', 'Purple', 'Pink', 'Brown', 'Grey'
      ],
      category: {
        name: null,
        color: null
      },
      bookmarklink: {
        title: null,
        category: null,
        favicon: null,
        feature_image: null,
        link: null
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
    this.$store.dispatch('loadFavourites', this.$firebaseRefs.favourites)
    this.$store.dispatch('loadBookmarks', this.$firebaseRefs.bookmarks)
  },
  methods: {
    addCat (cat) {
      this.$firebaseRefs.categories.push(cat)
      this.dialog = false
      this.category = { name: null, color: null }
    }
  }
}
</script>

<style lang="stylus">
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

  .bg
    background: $grey.lighten-4

  .floatingbtn
    position: fixed
    bottom: 20px
    right: 15px
    overflow: hidden
</style>
