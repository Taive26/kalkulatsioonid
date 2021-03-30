<template>
  <v-container>
    <v-row class="mt-10" justify="center">
      <v-col sm="4" md="4">
        <v-checkbox label= "Teekonna pikkus" color="warning"></v-checkbox>
        <v-checkbox label="Keskmine kütusekulu" color="warning"></v-checkbox>
        <v-checkbox label="Kütuse kogus" color="warning"></v-checkbox>
      </v-col>
      <v-col sm="4" md="4">
        <v-text-field label="Teekonna pikkus" v-model="journeyLength" type="number" outlined ></v-text-field>
        <v-text-field label="Keskmine kütusekulu" v-model="fuelConsumption" type="number" outlined></v-text-field>
        <v-text-field label="Kütuse kogus" v-model="fuelAmount" type="number" outlined></v-text-field>
         <v-text-field label="Kütuseühiku hind" v-model="fuelCost" type="number" outlined></v-text-field>
      </v-col>
      <v-col sm="4" md="4">
        <v-select :items="journeyUnits" label="Kilomeeter(km)" outlined></v-select>
        <v-select :items="consumptionUnits" label="Liitrit/100km" outlined></v-select>
        <v-select :items="fuelUnits" label="Liiter(l)" outlined></v-select>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col sm="12" md="12">
        <h2>Kütuse maksumus: {{result}} EUR</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.mt-40 {
  margin-top: 40px;
}

input[type="radio"] {
  margin-right: 10px;
}

.row-space {
  margin-top: 30px;
}

.radiobuttons {
  margin: auto;
  width: 30%;
  padding: 10px;
  font-size: 1.25rem;
}

.textboxes {
  margin: auto;
  width: 70%;
}

img.leftpane {
  width: 100%;
  height: auto;
}

img.secret {
  display: none;
}

@media screen and (max-width: 959px) {
  .mt-40 {
    margin-top: 0px;
    padding-left: 15px;
  }

  .radiobuttons {
    margin: auto;
    width: 30%;
    padding-top: 0px;
    padding: 10px;
    font-size: 1.25rem;
  }

  .row-space {
    margin-top: 0px;
  }

  img.leftpane-mob {
    width: 0.2%;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .mt-40 {
    margin-top: 0px;
    padding-left: 15px;
  }

  img.leftpane-mob {
    width: 0.2%;
    height: auto;
  }

  input[type="radio"] {
    margin-right: 0px;
  }

  .row-space {
    margin-top: 0px;
  }
}

@media screen and (max-width: 600px) {
  .mt-40 {
    padding-top: 5px;
    padding-left: 15px;
  }

  img.leftpane-mob {
    width: 89%;
    height: auto;
  }

  input[type="radio"] {
    margin-right: 0px;
  }

  .row-space {
    margin-top: 0px;
  }
}

@media screen and (max-width: 461px) {
  .mt-40 {
    margin-top: 0px;
    padding-left: 15px;
  }
  img.leftpane-mob {
    width: 100%;
    height: auto;
  }
}
</style>

<script>

export default {
  name: "Fuel",
  props: {
    msg: String,
    chooseCalculation: String
  },

  data() {
    return {
      journeyLength: 0,
      fuelConsumption: 0,
      fuelAmount: 0,
      fuelCost: 0
    };
  },
  computed: {
    result() {
      return this.sum(
        this.journeyLength,
        this.fuelConsumption,
        this.fuelCost
      ).toFixed(2);
    }
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
    check: function() {
      console.log(this.journeyLength);
      console.log(this.fuelConsumption);
      console.log(this.fuelAmount);
      console.log(this.options);

      if (this.options === "journeyLength") {
        this.journeyLength = this.journeyLengthCalculation(
          this.fuelAmount,
          this.fuelConsumption
        ).toFixed(2);
      }
      if (this.options === "fuelConsumption") {
        this.fuelConsumption = this.fuelConsumptionCalculation(
          this.fuelAmount,
          this.journeyLength
        ).toFixed(2);
      }
      if (this.options === "fuelAmount") {
        this.fuelAmount = this.fuelAmountCalculation(
          this.journeyLength,
          this.fuelConsumption
        ).toFixed(2);
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
