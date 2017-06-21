<template>
  <v-layout row v-if="$store.state.bookmark.bookmarks.length > 0" wrap>
    <v-flex xs12>
      <v-list two-line dense>
        <template v-for="bookmark in $store.state.bookmark.bookmarks">
          <v-list-item  style="background:white;">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="bookmark.favicon">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> {{ bookmark.title }} </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-chip small>{{ bookmark.category }}</v-chip>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-menu bottom left transition="v-slide-y-transition">
                  <v-btn icon="icon" slot="activator">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-item>
                      <v-list-tile @click.native="markFavourite(bookmark)">
                        <v-list-tile-title>Mark as favourite</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile @click.native="deleteBookmark(bookmark)">
                        <v-list-tile-title>Delete</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
  <v-layout row justify-center v-else>
    <v-flex xs12>
      <p class="text-xs-center">No bookmarks found.</p>
    </v-flex>
  </v-layout>
</template>
<script>
import _ from 'lodash'

export default {
  methods: {
    deleteBookmark (bookmark) {
      this.$db.ref('bookmarks').child(_.get(bookmark, '.key')).remove()
    },
    markFavourite (bookmark) {
      this.$db.ref('favourites').push(bookmark)
    }
  }
}
</script>
<style lang="stylus">
.avatar img
  width: 24px
  height: 24px
</style>
