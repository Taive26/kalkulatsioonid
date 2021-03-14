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
          <!--vasakpoolne osa    
          <v-col cols="12" sm="2" class="d-none d-sm-flex">
            <v-sheet rounded="lg" min-height="268">
              <div>
                <leftpane />
              </div>
            </v-sheet>
          </v-col> -->

          <!--keskmine osa -->
          <v-col cols="12" sm="8">
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

          <!--parempoolne osa 

          <v-col cols="12" sm="2" class="d-none d-sm-flex">
            <v-sheet rounded="lg" min-height="268">
              <div>
                <rightpane />
              </div>
            </v-sheet>
          </v-col> -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import salary from "@/views/Salary";
import coffee from "@/views/Coffee";
import fuel from "@/views/Fuel";
// import leftpane from "@/views/LeftPane"; 
// import rightpane from "@/views/RightPane"; 

export default {
  name: "App",
  components: {
    salary,
    coffee,
    fuel,
   // leftpane,
   // rightpane,
  },
  data: () => ({
    links: ["PALGAKALKULAATOR", "KÜTUSEKALKULAATOR", "KOFEIINIKALKULAATOR"],
    current: 1,
  }),
};
</script>
<style scoped></style>
