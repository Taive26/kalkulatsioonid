import salary from "@/components/salary.vue";

import { shallowMount } from "@vue/test-utils";

describe("salary.vue", () => {
  const wrapper = shallowMount(salary);

  it("should calculate sotsiaalmaks properly", () => {
    const sotsiaalmaks = wrapper.vm.calculate(1500);
    expect(sotsiaalmaks).toBe(495);
  });

  it("should calculate töötuskindlustus8 properly", () => {
    const töötuskindlustus8 = wrapper.vm.calculate(1500);
    expect(töötuskindlustus8).toBe(12);
  });

  it("should calculate töötuskindlustus16 properly", () => {
    const töötuskindlustus16 = wrapper.vm.calculate(1500);
    expect(töötuskindlustus16).toBe(24);
  });

  it("should calculate pension properly", () => {
    const pension = wrapper.vm.calculate(1500);
    expect(pension).toBe(30);
  });

  it("should calculate revenueToBeTaxed1 properly", () => {
    const revenueToBeTaxed1 = wrapper.vm.calculate(1500);
    expect(revenueToBeTaxed1).toBe(30);
  });
});
