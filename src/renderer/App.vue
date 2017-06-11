<template>
  <v-app>
    <v-navigation-drawer permanent light>
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
    secondary: $pink.darken-1
  }
  @import '../../node_modules/vuetify/src/stylus/main'
</style>
