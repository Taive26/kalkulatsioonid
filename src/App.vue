<template>
  <v-app>
    <v-app-bar app color="primary" light flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2" class="d-none d-sm-flex">
            <v-sheet rounded="lg" min-height="268">
              <coffee />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <salary />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <fuel />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import salary from "@/views/Salary";
import coffee from "@/views/Coffee";
import fuel from "@/views/Fuel";
export default {
  name: "App",
  components: {
    salary,
    coffee,
    fuel,
  },
  data: () => ({
    links: ["PALGAKALKULAATOR", "KÜTUSEKALKULAATOR", "KOFEIINIKALKULAATOR"],
  }),
};
</script>
<style scoped></style>
