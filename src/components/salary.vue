<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <h3 align="center">Sisesta siia oma brutopalk:</h3>
        <v-text-field
          v-model.number="salary"
          hide-details="auto"
          type="number"
          class="pa-4 secondary text-center rounded-pill"
        ></v-text-field>
        <v-text-field
          v-model.number="b"
          label="Sisesta siia number B"
          hide-details="auto"
          type="number"
          class="pa-4 secondary text-center rounded-pill"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Arvesta sotsiaalmaksu"
          type="checkbox"
          color="secondary"
          required
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Arvesta maksuvaba tulu"
          type="checkbox"
          color="secondary"
          required
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Tööandja töötuskindlustusmakse 0,8%"
          type="checkbox"
          color="secondary"
          required
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Töötaja töötuskindlustusmakse 1,6%"
          type="checkbox"
          color="secondary"
          required
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Kogumispension (II sammas)"
          type="checkbox"
          color="secondary"
          required
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-simple-table class="mb-7 mx-auto">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="pa-3 secondary text-center rounded-pill">
              TÖÖANDJA:
            </th>
            <th class="text-center">Summa</th>
            <th class="text-center">
              Protsent
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center"
            v-for="item in employerTableItems"
            :key="item.itemName"
          >
            <td class="pa-3 primary text-center rounded-pill">
              {{ item.itemName }}
            </td>
            <td>{{ item.resultAsMoney }}</td>
            <td>{{ item.resultAsPercent }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
<v-simple-table class="mb-7 mx-auto">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="pa-3 secondary text-center rounded-pill">
              TÖÖTAJA:
            </th>
            <th class="text-center">Summa</th>
            <th class="text-center">
              Protsent
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center"
            v-for="item in employeeTableItems"
            :key="item.itemName"
          >
            <td class="pa-3 primary text-center rounded-pill">
              {{ item.itemName }}
            </td>
            <td>{{ item.resultAsMoney }}</td>
            <td>{{ item.resultAsPercent }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Salary",
  props: {
    msg: String,
  },
  data() {
    return {
      salary: 0,
      b: 0,
      employerTableItems: [
        {
          itemName: "Palgafond kokku",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI",
        },
        {
          itemName: "Brutopalk",
          resultAsMoney:  this.salary,
          resultAsPercent: "MIDAGI",
        },
        {
          itemName: "Sotsiaalmaks",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI",
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI",
        },
      ],

      employeeTableItems: [
        {
          itemName: "Brutopalk",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI",
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI",
        },
        {
          itemName: "Kogumispension",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI",
        },
        {
          itemName: "Tulumaks",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI",
        },
        {
          itemName: "Netopalk",
          resultAsMoney: "MIDAGI!",
          resultAsPercent: "MIDAGI!",
        },
      ],
    };
  },
  computed: {
    result() {
      return this.addAB(this.salary, this.b);
    },
  },
  methods: {
    addAB(salary, b) {
      return +salary + +b;
    },
  },
};
</script>
