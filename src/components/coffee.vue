<template>
  <v-container>
    <v-row class="v-responsive content" align="center" justify="center">
      <v-col cols="12" md="4">
        <div id="app" align="center">
          <img
            src="@/assets/tired.png"
            alt="By Videoplasty.com, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=67046674"
          />
        </div>
      </v-col>
      <v-col cols="12" md="4" align="center" justify="center">
        <v-row>
          <v-text-field
            input
            v-model.number="cups"
            hide-details="auto"
            label="Mitu tassi oled joonud?"
            type="number"
            class="centered-input pa-4 secondary text-center rounded-pill mb-7 mx-auto"
            align="center"
            justify="center"
            outlined
          ></v-text-field>
        </v-row>
        <v-row>
          <v-select
            v-model="intensity"
            hide-details="auto"
            class="centered-input pa-4 secondary text-center rounded-pill mb-7 mx-auto"
            :items="howIntense"
            item-text="kind"
            item-value="caffeine"
            label="Kangus"
            outlined
          ></v-select>
        </v-row>
        <v-row>
          <v-text-field
            v-model="weight"
            hide-details="auto"
            type="number"
            class="centered-input pa-4 secondary text-center rounded-pill mb-7 mx-auto"
            label="Kehamass (kg)"
            outlined
          ></v-text-field>
        </v-row>
        <v-row align="center" justify="center">
          <v-btn
            class="ma-2 mb-7 mx-auto"
            outlined
            color="secondary"
            align="center"
            justify="center"
            @click="calculateCoffee(cups, weight, intensity), updateCount()"
          >
            Arvuta
          </v-btn>
        </v-row>

        <v-row
          id="app"
          alt="answer"
          class="pa-15 primary rounded-circle d-inline-block"
          align="center"
          justify="center"
        >
          <button>{{ answer }}</button>
        </v-row>

        <v-row align="center" justify="center">
          <button class="ma-2 mt-7 mx-auto">
            Psst! Oled seda arvutust teinud juba {{ count }} korda :)
          </button>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" align="center" justify="center">
        <v-row
          id="app"
          alt="coffee cups"
          class="d-flex flex-column justify-space-between"
          align="center"
          justify="center"
        >
          <img class="rightpane" src="@/assets/coffee.png" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
img.rightpane {
  width: 350px;
}
img.leftpane {
  width: 250px;
}

@media screen and (max-width: 759px) {
  .hidden {
    display: none;
  }

  .mt-40 {
    margin-top: 0px;
  }

  .row {
    margin-top: 0px;
  }
}
</style>

<script>
export default {
  name: "Coffee",
  data() {
    return {
      weight: 0,
      intensity: 0,
      answer: null,
      howIntense: [
        { kind: "LAHJA PIIMALÜRBE", caffeine: 70 },
        { kind: "TASAKAALUKAS HARILIK", caffeine: 150 },
        { kind: "MUST KLEEPUV TÖKAT", caffeine: 300 }
      ]
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    cups: {
      get() {
        return this.$store.state.cups;
      },
      set(value) {
        this.$store.commit("savePreviousCups", value);
      }
    }
  },
  methods: {
    changeCups(event) {
      this.$store.commit("savePreviousCups", event.target.value);
    },

    updateCount() {
      this.$store.commit("countClicks");
    },
    calculateCoffee(cups, weight, intensity) {
      const lethalDoseInGrams = weight * 200;
      const caffeineConsumed = intensity * cups;
      const caffeineTillDeath = lethalDoseInGrams - caffeineConsumed;
      const cupsTillDeath = (caffeineTillDeath / intensity).toFixed();
      const answerToDisplay = cupsTillDeath - 1;
      this.answer =
        "SAAKSID JUUA VEEL " +
        answerToDisplay +
        " TASSI KOHVI, ENNE KUI MULLA-MATI KÜLASTAB";
      if (answerToDisplay === 1) {
        this.answer =
          "Saaksid juua veel VIIMASE tassi kohvi, enne kui Mulla-Mati tuleb";
      }
      if (answerToDisplay <= 0) {
        this.answer =
          "Kas sa päriselt jõid nii palju kohvi? Oled juba teispoolsuses?";
      }
    }
  }
};
</script>
