<template>
  <v-container>
    <v-row class="mob">
      <div id="app">
        <img class="home" src="@/assets/avaleht.png" alt="avalehe pilt" />
      </div>
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
