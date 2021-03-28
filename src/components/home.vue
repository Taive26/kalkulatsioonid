<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="md-12">
      <div id="app" align="center" >
        <v-img class="home" src="@/assets/avakuva.png" alt="" /></div>
        </v-col>
        </v-row>
  </v-container>
</template>

<style scoped>
img.home {
  width: 1000px;
  float: center;
}

@media screen and (max-width: 759px) {
  img.home {
    width: 430px;
  }
  .mob {
    padding-top: 100px;
  }
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>
