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
            <v-btn icon>
              <v-icon>add</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>
                  News
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>
                  News
                </v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-content>
                <v-list-tile-title>
                  News
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
export default {
  name: 'bookmark'
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
</style>
