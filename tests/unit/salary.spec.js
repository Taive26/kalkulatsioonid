import salary from "@/components/salary.vue";
import Vuetify from "vuetify";

import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("salary.vue", () => { 

  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should calculate sotsiaalmaks properly", () => {
    const wrapper = shallowMount(salary, {});
    const sotsiaalmaks = wrapper.vm.multiply(1500, 0.33);
    expect(sotsiaalmaks).toBe(495);
  });

  it("should calculate töötuskindlustus8 properly", () => {
    const wrapper = shallowMount(salary, {});
    const töötuskindlustus8 = wrapper.vm.multiply(1500, 0.008);
    expect(töötuskindlustus8).toBe(12);
  });

  it("should calculate töötuskindlustus16 properly", () => {
    const wrapper = shallowMount(salary, {});
    const töötuskindlustus16 = wrapper.vm.multiply(1500, 0.016);
    expect(töötuskindlustus16).toBe(24);
  });

  it("should calculate pension properly", () => {
    const wrapper = shallowMount(salary, {});
    const pension = wrapper.vm.multiply(1500, 0.02);
    expect(pension).toBe(30);
  });

  it("should calculate revenueToBeTaxed1 properly", () => {
    const wrapper = shallowMount(salary, {});
    const revenueToBeTaxed1 = wrapper.vm.multiply(1500, 500);
    expect(revenueToBeTaxed1).toBe(30);
  });

});