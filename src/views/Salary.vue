<template>
  <v-container>
    <v-col class="text-center">
      <v-text-field
        v-model.number="a"
        label="Sisesta siia number A"
        hide-details="auto"
        type="number"
      ></v-text-field>
      <v-text-field
        v-model.number="b"
        label="Sisesta siia number B"
        hide-details="auto"
        type="number"
      ></v-text-field>
      <h1>Nende arvude summa on: {{ result }}</h1>
      <line-chart :chartdata="chartData" :options="chartOptions"/>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Salary",
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
  //watch: {
  //a(val) {
  //this.addAB(val, this.b)
  //},
  //b(val) {
  //this.addAB(val, this.a)
  //}
  //},
  methods: {
    addAB(a, b) {
      return +a + +b;
    },
  },
};
</script>