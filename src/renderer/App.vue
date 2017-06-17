<template>
  <v-app>
    <sidebar></sidebar>
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
export default {
  name: 'bookmark',
  data () {
    return {
      bookmark: false,
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
  created () {
    this.$store.dispatch('loadFavourites', this.$db.ref('favourites'))
    this.$store.dispatch('loadBookmarks', this.$db.ref('bookmarks'))
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
