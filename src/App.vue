<template>
  <v-app>
    <v-app-bar app color="primary" light flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab
          v-for="(link, i) in links"
          :key="link"
          @click="current = i"
          :class="{ current: i == current }"
        >
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <div v-show="current === 0">
                <home />
              </div>
              <div v-show="current === 1">
                <salary />
              </div>
              <div v-show="current === 2">
                <fuel />
              </div>
              <div v-show="current === 3">
                <coffee /></div
            ></v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import home from "@/views/Home";
import salary from "@/views/Salary";
import coffee from "@/views/Coffee";
import fuel from "@/views/Fuel";

export default {
  name: "App",
  components: {
    home,
    salary,
    coffee,
    fuel,
  },
  data: () => ({
    links: [
      "HOME",
      "PALGAKALKULAATOR",
      "KÜTUSEKALKULAATOR",
      "KOFEIINIKALKULAATOR",
    ],
    current: 0,
  }),
};
</script>
<style scoped></style>
