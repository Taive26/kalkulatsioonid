<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="3">
        <h4 class="text-center font-weight-regular">
          Sisesta siia oma brutopalk:
        </h4>
        <v-text-field
          v-model.number="salary"
          v-on:input="calculate(salary)"
          hide-details="auto"
          type="number"
          class="centered-input pa-4 secondary text-center rounded-pill"
        ></v-text-field>
        <h4 class="text-center font-weight-regular">EUR</h4>
      </v-col>
      <v-col cols="12" md="3">
        <v-checkbox
          v-model="calculateSM"
          v-bind:false-value="0"
          v-bind:true-value="1"
          name="sotsiaalmaks"
          label="Arvesta sotsiaalmaksu"
          type="checkbox"
          color="secondary"
          :input="() => calculate(salary)"
          v-on:change="() => checkIfSMChanged(calculateSM)"
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
      <v-col cols="12" md="6">
        <h4 class="text-center font-weight-regular">Sinu brutopalk jaguneb nii:</h4>
        <apexchart
          type="pie"
          width="380"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </v-col>
    </v-row>
    <v-simple-table class="mt-7 mb-7 mx-auto">
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
  components: {},
  props: {},

  data() {
    return {
      calculateSM: 1,
      salary: 0,

      series: [3856, 80, 100, 964],
      chartOptions: {
        chart: {
          width: 500,
          type: "pie",
        },
        theme: {
            palette: "palette3",
          },
        labels: ["Netopalk", "Töötuskindlustus", "Kogumispension", "Tulumaks"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

    

      employerTableItems: [
        {
          itemName: "Palgafond kokku",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
        {
          itemName: "Brutopalk",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
        {
          itemName: "Sotsiaalmaks",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
      ],

      employeeTableItems: [
        {
          itemName: "Brutopalk",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
        {
          itemName: "Kogumispension",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
        {
          itemName: "Tulumaks",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
        {
          itemName: "Netopalk",
          resultAsMoney: "0",
          resultAsPercent: "0",
        },
      ],
    };
  },
  computed: {},

  methods: {
    updateChart() {
      this.series = [this.employeeTableItems.resultAsMoney];
    },

    checkIfSMChanged(calculateSM) {
      if (calculateSM.checked === true) {
        this.calculate(this.salary);
      } else {
        this.calculateWithoutSM(this.salary);
      }
    },

    calculate(salary) {
      const töötuskindlustus16 = salary * 0.016;
      const kogumispension = salary * 0.02;
      const tulumaks = (salary - salary * 0.036) * 0.2;
      const netopalk = salary - töötuskindlustus16 - kogumispension - tulumaks;
      const sotsiaalmaks = salary * 0.33;
      const töötuskindlustus08 = salary * 0.008;
      const palgafond = salary + sotsiaalmaks + töötuskindlustus08;

      (this.employerTableItems = [
        {
          itemName: "Palgafond kokku",
          resultAsMoney: palgafond,
          resultAsPercent: 100,
        },
        {
          itemName: "Brutopalk",
          resultAsMoney: salary,
          resultAsPercent: +((salary / palgafond) * 100).toFixed(2),
        },
        {
          itemName: "Sotsiaalmaks",
          resultAsMoney: sotsiaalmaks,
          resultAsPercent: +((sotsiaalmaks / palgafond) * 100).toFixed(2),
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: töötuskindlustus08,
          resultAsPercent: +((töötuskindlustus08 / palgafond) * 100).toFixed(2),
        },
      ]),
        (this.employeeTableItems = [
          {
            itemName: "Brutopalk",
            resultAsMoney: salary,
            resultAsPercent: 100,
          },
          {
            itemName: "Töötuskindlustus",
            resultAsMoney: töötuskindlustus16,
            resultAsPercent: 1.6,
          },
          {
            itemName: "Kogumispension",
            resultAsMoney: kogumispension,
            resultAsPercent: 2,
          },
          {
            itemName: "Tulumaks",
            resultAsMoney: tulumaks,
            resultAsPercent: (tulumaks / salary) * 100,
          },
          {
            itemName: "Netopalk",
            resultAsMoney: netopalk,
            resultAsPercent: (netopalk / salary) * 100,
          },
        ]);
    },

    calculateWithoutSM(salary) {
      const töötuskindlustus16 = salary * 0.016;
      const kogumispension = salary * 0.02;
      const tulumaks = (salary - salary * 0.036) * 0.2;
      const netopalk = salary - töötuskindlustus16 - kogumispension - tulumaks;
      const töötuskindlustus08 = salary * 0.008;
      const palgafond = salary + töötuskindlustus08;

      (this.employerTableItems = [
        {
          itemName: "Palgafond kokku",
          resultAsMoney: palgafond,
          resultAsPercent: 100,
        },
        {
          itemName: "Brutopalk",
          resultAsMoney: salary,
          resultAsPercent: +((salary / palgafond) * 100).toFixed(2),
        },
        {
          itemName: "Sotsiaalmaks",
          resultAsMoney: 0,
          resultAsPercent: 0,
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: töötuskindlustus08,
          resultAsPercent: ((töötuskindlustus08 / palgafond) * 100).toFixed(2),
        },
      ]),
        (this.employeeTableItems = [
          {
            itemName: "Brutopalk",
            resultAsMoney: salary,
            resultAsPercent: 100,
          },
          {
            itemName: "Töötuskindlustus",
            resultAsMoney: töötuskindlustus16,
            resultAsPercent: 1.6,
          },
          {
            itemName: "Kogumispension",
            resultAsMoney: kogumispension,
            resultAsPercent: 2,
          },
          {
            itemName: "Tulumaks",
            resultAsMoney: tulumaks,
            resultAsPercent: (tulumaks / salary) * 100,
          },
          {
            itemName: "Netopalk",
            resultAsMoney: netopalk,
            resultAsPercent: (netopalk / salary) * 100,
          },
        ]);
    },
  },
};
</script>
<style>
.centered-input input {
  text-align: center;
}
</style>
