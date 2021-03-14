<template>
  <v-container>
    <v-row>
      <!--see on siis parempoolse sektsiooni kuvamine    -->
      <v-col cols="12" sm="2" class="d-none d-sm-flex">
        <v-sheet rounded="lg" min-height="268">
          <div v-show="current === 0">
            <imageSalary />
          </div>
          <div v-show="current === 1">
            <imageFuel />
          </div>
          <div v-show="current === 2">
            <imageCoffee />
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import imageSalary from "@/components/imageSalary";
import imageFuel from "@/components/imageFuel";
import imageCoffee from "@/components/imageCoffee";
export default {
  components: {
    imageSalary,
    imageFuel,
    imageCoffee,
  },
  data: () => ({
    current: 1,
  }),
};
</script>
