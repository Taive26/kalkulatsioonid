<template>
  <v-container>
    <!--
PLAAN
1) arvutada lethalDose kasutaja sisestatud kehamassi jaoks (200mg/kg kohta) - saab kasutaja surmava doosi
2) arvutada caffeineConsumed vastavalt valitud kangusele 
3) lethalDose - caffeineConsumed = caffeineTillDeath
4) konvertida caffeineTillDeath tassideks ja KUVADA "Võid juua veel {{cupsTillDeath}} tassi "
-->
    <v-row class="mt-40 mob" align="center" justify="center">
      <v-col md="4" class="hidden">
        <v-row>
          <div id="app" align="center">
            <img
              class="leftpane"
              src="@/assets/tired.png"
              alt="By Videoplasty.com, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=67046674"
            /></div
        ></v-row>
      </v-col>
      <v-col sm="12" md="6" lg="6" class="align-content-center">
        <v-row
          ><div>
            <v-text-field
              type="number"
              label="Tarbitud tasside arv"
              outlined
            ></v-text-field></div
        ></v-row>
        <v-row
          ><div>
            <v-select
              :items="intensity"
              label="Kangus"
              outlined
            ></v-select></div
        ></v-row>
        <v-row
          ><div>
            <v-text-field
              type="number"
              label="Kehamass (kg)"
              outlined
            ></v-text-field></div
        ></v-row>
        <v-row class="mt-10" sm="12" md="1">
          <h2>Võid juua veel ... tassi</h2>
        </v-row>
      </v-col>
      <v-col sm="12" md="1" class="hidden">
        <v-row
          ><div
            id="app"
            alt="coffee cups"
            class="d-flex flex-column justify-space-between align-center"
          >
            <img
              class="rightpane"
              src="@/assets/kohvitassid.png"
            /></div
        ></v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.mt-40 {
  margin-top: 40px;
}

img.rightpane {
  width: 200px;
}
img.leftpane {
  width: 250px;
}

@media screen and (max-width: 759px) {
  .mob {
    margin-top: 0px;
    padding-top: 30px;
    padding-left: 30px;
  }
}
</style>

<script>
export default {
  name: "Coffee",
  data: () => ({
    intensity: [
      "LAHJA PIIMALÜRBE (70 mg kofeiini)",
      "TASAKAALUKAS HARILIK (150 mg kofeiini)",
      "MUST KLEEPUV TÖKAT (300 mg kofeiini)",
    ],
  }),
};
</script>
