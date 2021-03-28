<template>
  <v-container>
    <v-row class="mt-40">
      <input
        type="radio"
        name="options"
        @change="onChange($event)"
        value="journeyLength"
      />
      Teepikkus
      <input
        type="radio"
        name="options"
        @change="onChange($event)"
        value="fuelConsumption"
      />
      Kütuse kulu
            <input
        type="radio"
        name="options"
        @change="onChange($event)"
        value="fuelAmount"
      /> Kütuse kogus

      <!--           <v-text-field
          label="Vali arvutus"
          ref="options"
          v-model="options"
          id="options"
          type="text"
          class="form-control"
          v-on:keyup="check">
        </v-text-field> -->
      <!--         <select v-model="selected" class="form-control">
          <option v-for="option in options">{{ option.name }}</option>
        </select> -->
      <!--      <v-radio-group>
          <v-radio 
            label="Teekonna pikkus"
            id="options"
            value="journeyLength"
            ref="journeyLength"
          ></v-radio>
          <v-radio 
            label="Kütuse kulu"
            id="options"
            ref="fuelConsumptionRadio"
            value="fuelConsumption"
          ></v-radio>
          <v-radio
            label="Kütuse kogus"
            id="options"
            ref="fuelAmountRadio"
            value="fuelAmount"
          ></v-radio>
        </v-radio-group>  -->
      <!--          <v-radio-group>
          <v-radio 
            label="Teekonna pikkus"
            id="journeyLengthRadio"
            value="journeyLength"
            ref="journeyLength"
            v-model="chooseCalculation"
          ></v-radio>
          <v-radio 
            label="Kütuse kulu"
            id="fuelConsumptionRadio"
            ref="fuelConsumptionRadio"
            value="fuelConsumption"
            v-model="chooseCalculation"
          ></v-radio>
          <v-radio
            label="Kütuse kogus"
            id="fuelAmountRadio"
            ref="fuelAmountRadio"
            value="fuelAmount"
            v-model="chooseCalculation"
          ></v-radio>
        </v-radio-group>  -->

      <v-col sm="12" md="4">
        <v-text-field
          label="Teekonna pikkus"
          ref="journeyLength"
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
    chooseCalculation: String,
  },

  data() {
    return {
      options: String,
      radioBoxOption: String,
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
    check: function() {
      console.log(this.journeyLength);
      console.log(this.fuelConsumption);
      console.log(this.fuelAmount); 
      console.log(this.options);

      if (this.options === "journeyLength") {
        this.journeyLength = this.journeyLengthCalculation(
          this.fuelAmount,
          this.fuelConsumption
        );
      }
      if (this.options === "fuelConsumption") {
        this.fuelConsumption = this.fuelConsumptionCalculation(
          this.fuelAmount,
          this.journeyLength
        );
      }
      if (this.options === "fuelAmount") {
        this.fuelAmount = this.fuelAmountCalculation(
          this.journeyLength,
          this.fuelConsumption
        );
      }
    },

    journeyLengthCalculation(fuelAmount, fuelConsumption) {
      return (fuelAmount / fuelConsumption) * 100;
    },

    fuelConsumptionCalculation(fuelAmount, journeyLength) {
      return (fuelAmount / journeyLength) * 100;
    },

    fuelAmountCalculation(journeyLength, fuelConsumption) {
      return (journeyLength / 100) * fuelConsumption;
    },

    onChange(event) {
      this.options = event.target.value;
    }
  }
};
</script>
