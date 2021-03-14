<template>
  <v-container>
    <v-row>
      <!--vasakpoolne osa    -->
<!--       <v-col cols="12" sm="2" class="d-none d-sm-flex">
        <v-sheet rounded="lg" min-height="268">
          <div>
            <imageFuel />
          </div>
        </v-sheet>
      </v-col> -->

      <!--keskmine osa -->
      <v-col cols="12" sm="8">
        <v-sheet min-height="70vh" rounded="lg">
          <div>
            <fuel />
          </div>
        </v-sheet>
      </v-col>

      <!--parempoolne osa -->
<!--       <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">
          <div>
            <imageFuel />
          </div>
        </v-sheet>
      </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
import fuel from "@/components/fuel";
/* import imageFuel from "@/components/imageFuel"; */
export default {
  components: {
    fuel,
/*     imageFuel */
  },
};
</script>
