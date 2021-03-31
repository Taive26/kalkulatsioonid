<template>
  <v-app>
    <v-app-bar app color="primary" light flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab
          v-for="(link, i) in links" :to="link.path" :key="i">{{ link.name }}
        >
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container fluid>
      <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { routes } from './router/index'
  export default {
    data () {
      return {
        links: routes
      }
    }
  }
</script>

