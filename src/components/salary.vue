<template>
  <v-container>
    <v-col md="4">juhuu</v-col>
    <v-col class="text-center" justify="center" 
      md="4">
      <v-text-field
        v-model.number="a"
        label="Sisesta siia number A"
        hide-details="auto"
        type="number"
        class="pa-4 secondary text-center rounded-pill"
      ></v-text-field>
      <v-text-field
        v-model.number="b"
        label="Sisesta siia number B"
        hide-details="auto"
        type="number"
        class="pa-4 secondary text-center rounded-pill"
      ></v-text-field>
      <h1>Nende arvude summa on: {{ result }}</h1>
    </v-col>
    <v-col md="4">mis sa teed?</v-col>
  </v-container>
</template>

<script>
export default {
  name: "Salary",
  props: {
    msg: String,
  },
  data() {
    return {
      a: 0,
      b: 0,
    };
  },
  computed: {
    result() {
      return this.addAB(this.a, this.b);
    },
  },
  methods: {
    addAB(a, b) {
      return +a + +b;
    },
  },
};
</script>
