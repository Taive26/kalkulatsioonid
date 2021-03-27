<template>
  <v-container>
    <v-row class="mt-40" justify="center">
      <v-col sm="12" md="4">
        <v-checkbox
          label="Teekonna pikkus" color="warning" v-on:change="Onchange()" v-model="checkboxval1"></v-checkbox>
        <v-checkbox
          label="Kütusekulu" color="warning" v-on:change="Onchange()" v-model="checkboxval2"></v-checkbox>
        <v-checkbox
          label="Kütuse kogus" color="warning" v-on:change="Onchange()" v-model="checkboxval3"></v-checkbox>
      </v-col>
      <v-col sm="12" md="4">
        <v-text-field
          label="Teekonna pikkus" v-model="journeyLength" v-on:click="Onchange()" type="number" class="form-control" 
          v-bind:disabled="checkbox1" outlined></v-text-field>
        <v-text-field
          label="Keskmine kütusekulu" v-model="fuelConsumption" type="number" class="form-control"
          v-bind:disabled="checkbox2" outlined></v-text-field>
        <v-text-field
          label="Kütuse kogus" v-model="fuelAmount" type="number" class="form-control" 
          v-bind:disabled="checkbox3" outlined></v-text-field>
        <v-text-field
          label="Kütuseühiku hind" v-model="fuelCost" type="number" outlined></v-text-field>
      </v-col>
      <v-col md="4" class="hidden">
        <v-select
          :items="journeyUnits" label="Kilomeeter(km)" outlined></v-select>
        <v-select
          :items="consumptionUnits" label="Liitrit/100km" outlined></v-select>
        <v-select :items="fuelUnits" label="Liiter(l)" outlined></v-select>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col sm="12" md="4">
        <h2>Kütuse maksumus: {{ result }} EUR</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.mt-40 {
  margin-top: 40px;
}
</style>

<script>
export default {
  name: "Fuel",
  props: {
    msg: String,
  },

  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkboxval1: false,
      checkboxval2: false,
      checkboxval3: false,
      journeyLength: 0,
      fuelConsumption: 0,
      fuelAmount: 0,
      fuelCost: 0,
      journeyUnits: ["Kilomeeter(km)"],
      consumptionUnits: ["Liitrit/100km"],
      fuelUnits: ["Liiter(l)"],
    };
  },
  computed: {
    result() {
      return this.sum(this.journeyLength, this.fuelConsumption, this.fuelCost);
    },
  },
  methods: {
    Onchange: function() {
      this.checkbox1 = this.checkboxval1;
      this.checkbox2 = this.checkboxval2;
      this.checkbox3 = this.checkboxval3;
    },
    sum(journeyLength, fuelConsumption, fuelCost) {
      const input = (+journeyLength / +100) * +fuelConsumption * +fuelCost;
      if (Number.isFinite(input)) {
        return (+journeyLength / +100) * +fuelConsumption * +fuelCost;
      } else {
        return 0;
      }
    },
    journeyLengthValue(fuelAmount, fuelConsumption) {
      const input = +fuelAmount / (+fuelConsumption / +100);
      if (Number.isFinite(input)) {
        return +fuelAmount / (+fuelConsumption / +100);
      } else {
        return 0;
      }
    },
    fuelConsumptionValue(fuelAmount, journeyLength) {
      const input = +fuelAmount / (+journeyLength / +100);
      if (Number.isFinite(input)) {
        return +fuelAmount / (+journeyLength / +100);
      } else {
        return 0;
      }
    },
    fuelAmountValue(fuelConsumption, journeyLength) {
      const input = +fuelConsumption * (+journeyLength / +100);
      if (Number.isFinite(input)) {
        return +fuelConsumption * (+journeyLength / +100);
      } else {
        return 0;
      }
    },
  },
};
</script>
