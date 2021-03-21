<template>
  <v-container>
    <v-row class="mt-40" justify="center">
      <v-col sm="12" md="4">
        <v-checkbox label= "Teekonna pikkus" color="warning"></v-checkbox>
        <v-checkbox label="Kütusekulu" color="warning"></v-checkbox>
        <v-checkbox label="Kütuse kogus" color="warning"></v-checkbox>
      </v-col>
      <v-col sm="12" md="4">
        <v-text-field label="Teekonna pikkus" v-model="journeyLength" type="number" outlined></v-text-field>
        <v-text-field label="Keskmine kütusekulu" v-model="fuelConsumption" type="number" outlined></v-text-field>
        <v-text-field label="Kütuse kogus" v-model="fuelAmount" type="number" outlined></v-text-field>
         <v-text-field label="Kütuseühiku hind" v-model="fuelCost" type="number" outlined></v-text-field>
      </v-col>
      <v-col md="4" class="hidden">
        <v-select :items="journeyUnits" label="Kilomeeter(km)" outlined ></v-select>
        <v-select :items="consumptionUnits" label="Liitrit/100km" outlined></v-select>
        <v-select :items="fuelUnits" label="Liiter(l)" outlined></v-select>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col sm="12" md="4">
        <h2>Kütuse maksumus: {{result}} EUR</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.mt-40{
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
      journeyLength: 0,
      fuelConsumption: 0,
      fuelAmount: 0,
      fuelCost: 0,
      journeyUnits: ["Kilomeeter(km)"],
      consumptionUnits: ["Liitrit/100km"],
      fuelUnits: ["Liiter(l)"]
    };
  },
  computed: {
    result() {
      return this.sum(this.journeyLength, this.fuelConsumption, this.fuelCost);
    },
  },
  methods: {
    sum(journeyLength, fuelConsumption, fuelCost) {
      const input = (+journeyLength / +100) * +fuelConsumption * +fuelCost;
      if (Number.isFinite(input)) {
        return (+journeyLength/+100) * +fuelConsumption * +fuelCost;
      } else {
        return 0;
      }
    },
  },
};
</script>
