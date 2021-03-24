<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="3">
        <p></p>
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
          label="Arvesta sotsiaalmaksu (33%)"
          type="checkbox"
          color="secondary"
          @change="calculate(salary)"
        ></v-checkbox>
        <v-checkbox
          v-model="calculateTK8"
          v-bind:false-value="0"
          v-bind:true-value="1"
          name="töötuskindlustus8"
          label="Arvesta töötuskindlustust tööandjale (0.8%)"
          type="checkbox"
          color="secondary"
          @change="calculate(salary)"
        ></v-checkbox>
        <v-checkbox
          v-model="calculateTM"
          v-bind:false-value="0"
          v-bind:true-value="1"
          name="tulumaks"
          label="Arvesta tulumaksu (20%)"
          type="checkbox"
          color="secondary"
          @change="calculate(salary)"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" md="6">
        <h4 class="text-center font-weight-regular">
          Sinu brutopalk jaguneb nii:
        </h4>
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
      calculateSM: 0,
      calculateTK8: 0,
      calculateTM: 0,
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
    calculate(salary) {
      const netopalk = salary;
      const sotsiaalmaks = salary * 0.33;
      const töötuskindlustus8 = salary * 0.008;
      const revenueToBeTaxed1 = salary - 500;
      const revenueToBeTaxed2 = +(
        salary -
        (500 - 0.55556 * (salary - 1200))
      ).toFixed(2);
      const taxOnRevenue1 = +(revenueToBeTaxed1 * 0.2).toFixed(2);
      const taxOnRevenue2 = +(revenueToBeTaxed2 * 0.2).toFixed(2);
      const taxOnRevenue3 = salary * 0.2;

      this.employerTableItems = [
        {
          itemName: "Palgafond kokku",
          resultAsMoney: salary,
          resultAsPercent: 100,
        },
        {
          itemName: "Brutopalk",
          resultAsMoney: salary,
          resultAsPercent: +((salary / salary) * 100).toFixed(2),
        },
        {
          itemName: "Sotsiaalmaks",
          resultAsMoney: 0,
          resultAsPercent: +((0 / salary) * 100).toFixed(2),
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: 0,
          resultAsPercent: +((0 / salary) * 100).toFixed(2),
        },
      ];

      this.employeeTableItems = [
        {
          itemName: "Brutopalk",
          resultAsMoney: salary,
          resultAsPercent: 100,
        },
        {
          itemName: "Töötuskindlustus",
          resultAsMoney: 0,
          resultAsPercent: 0,
        },
        {
          itemName: "Kogumispension",
          resultAsMoney: 0,
          resultAsPercent: 0,
        },
        {
          itemName: "Tulumaks",
          resultAsMoney: 0,
          resultAsPercent: (0 / salary) * 100,
        },
        {
          itemName: "Netopalk",
          resultAsMoney: netopalk,
          resultAsPercent: (salary / salary) * 100,
        },
      ];

      if (this.calculateSM) {
        this.employerTableItems = [
          {
            itemName: "Palgafond kokku",
            resultAsMoney: salary + sotsiaalmaks,
            resultAsPercent: 100,
          },
          {
            itemName: "Brutopalk",
            resultAsMoney: salary,
            resultAsPercent: +(
              (salary / (salary + sotsiaalmaks)) *
              100
            ).toFixed(2),
          },
          {
            itemName: "Sotsiaalmaks",
            resultAsMoney: sotsiaalmaks,
            resultAsPercent: +(
              (sotsiaalmaks / (salary + sotsiaalmaks)) *
              100
            ).toFixed(2),
          },
          {
            itemName: "Töötuskindlustus",
            resultAsMoney: 0,
            resultAsPercent: +((0 / salary) * 100).toFixed(2),
          },
        ];
      }

      if (this.calculateTK8) {
        this.employerTableItems = [
          {
            itemName: "Palgafond kokku",
            resultAsMoney: salary + töötuskindlustus8,
            resultAsPercent: 100,
          },
          {
            itemName: "Brutopalk",
            resultAsMoney: salary,
            resultAsPercent: +(
              (salary / (salary + töötuskindlustus8)) *
              100
            ).toFixed(2),
          },
          {
            itemName: "Sotsiaalmaks",
            resultAsMoney: 0,
            resultAsPercent: +(
              (0 / (salary + töötuskindlustus8)) *
              100
            ).toFixed(2),
          },
          {
            itemName: "Töötuskindlustus",
            resultAsMoney: töötuskindlustus8,
            resultAsPercent: +(
              (töötuskindlustus8 / (salary + töötuskindlustus8)) *
              100
            ).toFixed(2),
          },
        ];
      }

      if (this.calculateTK8 && this.calculateSM) {
        this.employerTableItems = [
          {
            itemName: "Palgafond kokku",
            resultAsMoney: salary + sotsiaalmaks + töötuskindlustus8,
            resultAsPercent: 100,
          },
          {
            itemName: "Brutopalk",
            resultAsMoney: salary,
            resultAsPercent: +(
              (salary / (salary + sotsiaalmaks + töötuskindlustus8)) *
              100
            ).toFixed(2),
          },
          {
            itemName: "Sotsiaalmaks",
            resultAsMoney: sotsiaalmaks,
            resultAsPercent: +(
              (sotsiaalmaks / (salary + sotsiaalmaks + töötuskindlustus8)) *
              100
            ).toFixed(2),
          },
          {
            itemName: "Töötuskindlustus",
            resultAsMoney: töötuskindlustus8,
            resultAsPercent: +(
              (töötuskindlustus8 /
                (salary + sotsiaalmaks + töötuskindlustus8)) *
              100
            ).toFixed(2),
          },
        ];
      }

      if (this.calculateTM) {
        if (salary <= 1200) {
          this.employeeTableItems = [
            {
              itemName: "Brutopalk",
              resultAsMoney: salary,
              resultAsPercent: 100,
            },
            {
              itemName: "Töötuskindlustus",
              resultAsMoney: 0,
              resultAsPercent: 0,
            },
            {
              itemName: "Kogumispension",
              resultAsMoney: 0,
              resultAsPercent: 0,
            },
            {
              itemName: "Tulumaks",
              resultAsMoney: taxOnRevenue1,
              resultAsPercent: +((taxOnRevenue1 / salary) * 100).toFixed(2),
            },
            {
              itemName: "Netopalk",
              resultAsMoney: salary - taxOnRevenue1,
              resultAsPercent: +(
                ((salary - taxOnRevenue1) / salary) *
                100
              ).toFixed(2),
            },
          ];
        }
        if (salary >= 1201 && salary <= 2099) {
          this.employeeTableItems = [
            {
              itemName: "Brutopalk",
              resultAsMoney: salary,
              resultAsPercent: 100,
            },
            {
              itemName: "Töötuskindlustus",
              resultAsMoney: 0,
              resultAsPercent: 0,
            },
            {
              itemName: "Kogumispension",
              resultAsMoney: 0,
              resultAsPercent: 0,
            },
            {
              itemName: "Tulumaks",
              resultAsMoney: taxOnRevenue2,
              resultAsPercent: +((taxOnRevenue2 / salary) * 100).toFixed(2),
            },
            {
              itemName: "Netopalk",
              resultAsMoney: +(salary - taxOnRevenue2).toFixed(2),
              resultAsPercent: +(
                ((salary - taxOnRevenue2) / salary) *
                100
              ).toFixed(2),
            },
          ];
        }

        if (salary >= 2100) {
          this.employeeTableItems = [
            {
              itemName: "Brutopalk",
              resultAsMoney: salary,
              resultAsPercent: 100,
            },
            {
              itemName: "Töötuskindlustus",
              resultAsMoney: 0,
              resultAsPercent: 0,
            },
            {
              itemName: "Kogumispension",
              resultAsMoney: 0,
              resultAsPercent: 0,
            },
            {
              itemName: "Tulumaks",
              resultAsMoney: taxOnRevenue3,
              resultAsPercent: +((taxOnRevenue3 / salary) * 100).toFixed(2),
            },
            {
              itemName: "Netopalk",
              resultAsMoney: +(salary - taxOnRevenue3).toFixed(2),
              resultAsPercent: +(
                ((salary - taxOnRevenue3) / salary) *
                100
              ).toFixed(2),
            },
          ];
        }
      }
    },
  },
};
</script>
<style>
.centered-input input {
  text-align: center;
}
</style>
