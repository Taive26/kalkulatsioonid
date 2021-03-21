<template>
  <div id="app">
    <Navigation
      :nav-links="navLinks"
      :image-path="require('./assets/calculator.png')"
      background="#F5F6CE"
      link-color="#000000"
      hoverBackground="#F5F6CE"/>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/navigation";
export default {
  components: {
    Navigation,
  },
  data: () => ({
    navLinks: [
      {
        text: "HOME",
        path: "/",
        icon: "ion-ios-home",
      },
      {
        text: "PALGAKALKULAATOR",
        path: "/palk",
        icon: "ion-ios-business",
      },
      {
        text: "KÜTUSEKALKULAATOR",
        path: "/kytus",
        icon: "ion-ios-car",
      },
      {
        text: "KOFEIINIKALKULAATOR",
        path: "/kohv",
        icon: "ion-ios-cafe",
      },
    ],
  }),
};
</script>

<style lang="scss">
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
//mobiilvaates kõik asjad, mis soovime peita, anname klassi 'hidden'
@media screen and (max-width: 759px) {
  .hidden {
    display: none;
  }
}
</style>
