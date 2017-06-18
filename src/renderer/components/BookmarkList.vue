<template>
  <v-layout row>
    <v-flex xs12>
      <v-list two-line>
        <v-list-item  style="background:white;">
          <v-list-tile avatar>
            <v-list-tile-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title> Test </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-menu bottom right>
                <v-btn icon="icon" slot="activator" light>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <v-list-item>
                    <v-list-tile>
                      <v-list-tile-title>Test</v-list-tile-title>
                    </v-list-tile>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-flex>
  </v-layout>
</template>
