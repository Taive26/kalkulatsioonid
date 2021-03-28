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
          <v-col cols="12" sm="12">
            <v-sheet min-height="70vh" rounded="lg">
              <div v-show="current === 0">
                <salary />
              </div>
              <div v-show="current === 1">
                <fuel />
              </div>
              <div v-show="current === 2">
                <coffee /></div
            ></v-sheet>
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
    links: ["PALK", "KÜTUS", "KOHV"],
    current: 0,
  }),
};
</script>
<style scoped></style>