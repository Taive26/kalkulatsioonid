<template>
  <nav>
    <ul ref="nav">
      <figure @click="toggleNav">
        <img/>
      </figure>
      <li v-for="(link, index) in navLinks"
        :key="index">
        <router-link :to="link.path">
          {{ link.text }}
          <i class="mob" :class="link.icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [
    "navLinks"
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
  },
};
</script>

