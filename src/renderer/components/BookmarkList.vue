<template>
  <v-layout row>
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
                      <v-list-tile>
                        <v-list-tile-title>Mark as favourite</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile>
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
</template>
<style lang="stylus">
.avatar img
  width: 24px
  height: 24px
</style>
