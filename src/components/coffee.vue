<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="3" sm="4" md="4"> </v-col>
      <v-col cols="3" sm="4" md="4">
        <h2>Palju tasse veel?</h2>
      </v-col>
      <v-col cols="3" sm="4" md="4"> </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="3" sm="6" md="4"> </v-col>
      <v-col cols="3" sm="6" md="4">
        <v-select :items="mugs" label="Tassi suurus"></v-select>
      </v-col>
      <v-col cols="3" sm="6" md="4"> </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="3" sm="4" md="4"> </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field type="number" label="Tarbitud tasside arv"></v-text-field>
      </v-col>
      <v-col cols="3" sm="4" md="4"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" sm="4" md="4"> </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-select :items="intensity" label="Kangus"></v-select>
      </v-col>
      <v-col cols="3" sm="4" md="4"> </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="3" sm="4" md="4"> </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field type="number" label="Kehamass (kg)"></v-text-field>
      </v-col>
      <v-col cols="3" sm="4" md="4"> </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="3" sm="4" md="4"> </v-col>
      <v-col cols="12" sm="4" md="4">
        <h2>Sind lahutab surmast ... tassi</h2>
      </v-col>
      <v-col cols="3" sm="4" md="4"> </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Coffee",
/*   mugs: [{ name: "pisike" }, { name: "harilik" }, { name: "suur" }],
  intensity: ["lahja piimalürbe", "tasakaalukas harilik", "must kleepuv tökat"], */
  data() {
    return {
      selected: "",
    };
  },
  methods: {},
};
</script>
