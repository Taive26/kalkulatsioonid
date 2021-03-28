<template>
  <v-container>
    <v-row class="mt-40">
      <v-col sm="12" md="4" align="center" justify="center">
        <v-radio-group v-model="column" column>
          <v-radio
            label="Teekonna pikkus"
            value="radio-1"
            @click="isDisabled1 = !isDisabled1"
          ></v-radio>
          <v-radio
            label="Kütuse kulu"
            value="radio-2"
            @click="isDisabled2 = !isDisabled2"
          ></v-radio>
          <v-radio
            label="Kütuse kogus"
            value="radio-3"
            @click="isDisabled3 = !isDisabled3"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col sm="12" md="4">
        <v-text-field
          label="Teekonna pikkus"
          :disabled="isDisabled1"
          v-model.trim="journeyLength"
          id="journeyLength"
          name="journeyLength"
          type="number"
          class="form-control"
          v-on:click="check"
          filled
        >
        </v-text-field>
        <v-text-field
          label="Keskmine kütusekulu"
          :disabled="isDisabled2"
          v-model.trim="fuelConsumption"
          id="fuelConsumption"
          name="fuelConsumption"
          type="number"
          class="form-control"
          v-on:click="check"
          filled
        >
        </v-text-field>
        <v-text-field
          label="Kütuse kogus"
          :disabled="isDisabled3"
          v-model.trim="fuelAmount"
          id="fuelAmount"
          name="fuelAmount"
          type="number"
          class="form-control"
          v-on:click="check"
          filled
        >
        </v-text-field>
        <v-text-field
          label="Kütuseühiku hind"
          v-model.trim="fuelCost"
          type="number"
          filled
          id="fuelCost"
          name="fuelCost"
        >
        </v-text-field>
      </v-col>
      <v-col md="4" class="hidden">
        <v-select class="form-control">
        <option v-for="name in journeyUnits" :value="journeyUnits.value" :key="name"></option>
        </v-select>
        <v-select :items="consumptionUnits" label="Liitrit/100km" outlined>
        </v-select>
        <v-select :items="fuelUnits" label="Liiter(l)" outlined></v-select>
        <select class="form-control">
          <option
            v-for="country in countries" :value="country.code" :key="country.code" >{{ country.name }}</option>
        </select>
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

  /* 1. TeePikkus = KütuseKogus/KütuseKulu * 100
2. KütuseKulu = KütuseKogus/TeePikkus * 100
3. KütuseKogus = TeePikkus/100 * KütuseKulu */

  fuelConsumption(fuelAmount, journeyLength) {
    return (fuelAmount / journeyLength) * 100;
  },

  fuelAmount(journeyLength, fuelConsumption) {
    return (journeyLength / 100) * fuelConsumption;
  },

  data() {
    return {
      isDisabled1: false,
      isDisabled2: false,
      isDisabled3: false,
      countries: [
        { code: "GB", name: "Great Britain" },
        { code: "US", name: "United States" },
        { code: "KZ", name: "Kazakhstan" },
      ],
      selectedCountry: null,
      journeyUnits: [
        { name: "Kilomeeter (km)", id: 1, value: 1 },
        { name: "Miil (mi)", id: 2, value: 1.609344 },
      ],
      journeyLength: 1200,
      fuelConsumption: 5.7,
      fuelAmount: 68.4,
      fuelCost: 1.3,
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
    sum(journeyLength, fuelConsumption, fuelCost) {
      const input = (+journeyLength / +100) * +fuelConsumption * +fuelCost;
      if (Number.isFinite(input)) {
        return (+journeyLength / +100) * +fuelConsumption * +fuelCost;
      } else {
        return 0;
      }
    },

    check: function(event) {
      alert(event.target.tagName);
      return this.journeyLengthCalculation(
        this.fuelAmount,
        this.fuelConsumption
      );
    },

    journeyLengthCalculation(fuelAmount, fuelConsumption) {
      return (fuelAmount / fuelConsumption) * 100;
    },
  },
};
</script>
