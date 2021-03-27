<template>
  <v-container>
    <!--
PLAAN
1) lethaldose = kasutaja sisestatud kehamass (kg) * 200       //kofeiini mürgistav doos mg-des
2) caffeineConsumed = kasutaja valitud kangus (70, 150 või 300) * tasside arv       //tarbitud kofeiin mg-des
3) caffeineTillDeath = lethaldose - caffeineconsumed       //surmava koguseni jäänud mg hulk
4) cupsTillDeath = caffeineTillDeath / kasutaja valitud kangus (70, 150 või 300)     //ümardada täisarvuni
5) Kasutajale kuvada {{cupsTillDeath - 1}}     
-->
    <v-row class="mt-40 mob" align="center" justify="center">
      <v-col md="4" class="hidden">
        <v-row>
          <div id="app" align="center">
            <img
              class="leftpane"
              src="@/assets/tired.png"
              alt="By Videoplasty.com, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=67046674"/></div>
        </v-row>
      </v-col>
      <v-col sm="12" md="6" lg="6" class="align-content-center">
        <v-row><div>
            <v-text-field type="number" label="Tarbitud tasside arv" outlined></v-text-field></div></v-row>
        <v-row><div>
            <v-select :v-model="selected" :options="options" label="Kangus" outlined></v-select></div></v-row>
        <v-row><div>
            <v-text-field type="number" label="Kehamass (kg)" outlined></v-text-field></div></v-row>
        <v-row class="mt-10" sm="12" md="1">
          <h2>Võid juua veel ... tassi</h2>
        </v-row>
      </v-col>
      <v-col sm="12" md="1" class="hidden">
        <v-row
          ><div id="app" alt="coffee cups" class="d-flex flex-column justify-space-between align-center">
            <img class="rightpane" src="@/assets/kohvitassid.png" /></div></v-row>
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
    data() {
      return {
        selected: null,

        options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' }
        ]
      }
    }
  }
</script>