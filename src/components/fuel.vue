<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col cols="12" sm="2" md="2">
        <v-checkbox label="Teekonna pikkus"></v-checkbox>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field type="number"></v-text-field>
      </v-col>
      <v-col cols="12" sm="2" md="2">
        <v-select :items="items1" label="Kilomeeter(km)"></v-select>
      </v-col>
      <v-col cols="12" sm="2" md="2"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col cols="12" sm="2" md="2">
        <v-checkbox label="Keskmine kütusekulu"></v-checkbox>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field type="number"></v-text-field>
      </v-col>
      <v-col cols="12" sm="2" md="2">
        <v-select :items="items2" label="Liitrit/100km"></v-select>
      </v-col>
      <v-col cols="12" sm="2" md="2"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col cols="12" sm="2" md="2">
        <v-checkbox label="Kütuse kogus"></v-checkbox>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-text-field type="number"></v-text-field>
      </v-col>
      <v-col cols="12" sm="2" md="2">
        <v-select :items="items3" label="Liiter(l)"></v-select>
      </v-col>
      <v-col cols="12" sm="2" md="2"> </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" sm="2" md="2"> </v-col>
      <v-col cols="12" sm="4" md="4">
        <h2>Tulemus: ... eurot</h2>
      </v-col>
      <v-col cols="12" sm="2" md="2"> </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Fuel",
  data() {
    return {};
  },
  methods: {}
};
</script>
