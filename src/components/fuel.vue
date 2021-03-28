<template>
  <v-container>
    <v-row class="mt-40">
        <v-radio-group>
          <v-radio 
            label="Teekonna pikkus"
            id="journeyLengthRadio"
            value="journeyLength"
            ref="journeyLength"
            v-model="chooseCalculation"
            @click="isDisabled1 = !isDisabled1"
          ></v-radio>
          <v-radio 
            label="Kütuse kulu"
            id="fuelConsumptionRadio"
            ref="fuelConsumptionRadio"
            value="fuelConsumption"
            v-model="chooseCalculation"
            @click="isDisabled2 = !isDisabled2"
          ></v-radio>
          <v-radio
            label="Kütuse kogus"
            id="fuelAmountRadio"
            ref="fuelAmountRadio"
            value="fuelAmount"
            v-model="chooseCalculation"
            @click="isDisabled3 = !isDisabled3"
          ></v-radio>
        </v-radio-group>

      <v-col sm="12" md="4">
        <v-text-field
          label="Teekonna pikkus"
          ref="journeyLength"
          :disabled="isDisabled1"
          v-model.trim="journeyLength"
          id="journeyLength"
          name="journeyLength"
          type="number"
          class="form-control"
          v-on:keyup="check"
          filled
        >
        </v-text-field>
        <v-text-field
          label="Keskmine kütusekulu"
          ref="fuelConsumption"
          :disabled="isDisabled2"
          v-model.trim="fuelConsumption"
          id="fuelConsumption"
          name="fuelConsumption"
          type="number"
          class="form-control"
          v-on:keyup="check"
          filled
        >
        </v-text-field>
        <v-text-field
          label="Kütuse kogus"
          ref="fuelAmount"
          :disabled="isDisabled3"
          v-model.trim="fuelAmount"
          id="fuelAmount"
          name="fuelAmount"
          type="number"
          class="form-control"
          v-on:keyup="check"
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
      <v-col class="hidden">
        <div>
        <select class="form-control">
          <option v-for="unit in journeyUnits" :value="unit.code" :key="unit.code">
            {{ unit.name }}</option>
        </select>
        </div>
        <div>
        <select class="form-control">
          <option v-for="unit in consumptionUnits" :value="unit.code" :key="unit.code">
            {{ unit.name }}</option>
        </select>
        </div>
       <div>
        <select class="chooseCalculation" ></select>
       </div>
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
    chooseCalculation: String
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
      el: "#journeyLengthRadio",
      isDisabled1: false,
      isDisabled2: false,
      isDisabled3: false,
/*       chooseCalculation: "journeyLength", */
      journeyUnits: [
        { name: "Kilomeeter (km)", id: 1, value: 1 },
        { name: "Miil (mi)", id: 2, value: 1.609344 }
      ],
      consumptionUnits: [
        { name: "Liitrit / 100 km", id: 1, value: 1 },
        { name: "Liitrit / 100 mi", id: 2, value: 1.609344 }
      ],
      fuelUnits: [
        { name: "Liiter (L)", id: 1, value: 1 },
        { name: "US gallon (liquid gal)", id: 2, value: 1.609344 }
      ],
      journeyLength: 1200,
      fuelConsumption: 5.7,
      fuelAmount: 68.4,
      fuelCost: 1.3
    };
  },
  computed: {
    result() {
      return this.sum(this.journeyLength, this.fuelConsumption, this.fuelCost);
    }
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

    check: function() {
      console.log(this.journeyLength);
      console.log(this.fuelConsumption);
      console.log(this.fuelAmount);
      console.log(this.chooseCalculation);
      console.log(this.$refs.journeyLength.checked);

/*       console.log(this.$refs.journeyLengthRadio.toggleChecked);
      console.log(this.$refs.fuelConsumptionRadio.value);
      console.log(this.$refs.fuelAmountRadio.value); */

       this.journeyLength = this.journeyLengthCalculation(
        this.fuelAmount,
        this.fuelConsumption
      );
    },

    journeyLengthCalculation(fuelAmount, fuelConsumption) {
      return (fuelAmount / fuelConsumption) * 100;
    }
  }
};
</script>
