// Imports
import Fuel from "@/components/fuel.vue";
import Vuetify from "vuetify";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("fuel.vue", () => {
  const wrapper = shallowMount(Fuel)
  const vm = wrapper.vm

  test("testing setup correctly", () => {
    expect(true).toBe(true);
  });

  it("calculates fuel price properly", () => {
    const total= wrapper.vm.sum(20, 20, 20);
    expect(total).toBe(80);
    expect(total).not.toBe(26);
  });

/*   it("calculates fuel price properly", () => {
    const wrapper = shallowMount(Fuel, {});
    const total= sum(20, 20, 20);
    expect(total).toBe(80);
    expect(total).not.toBe(26);
  }); */

  /* it("calculates journeyLength properly", () => {
    const wrapper = shallowMount(Fuel,{});
    const total = wrapper.vm.multiply(20, 5)
    expect(total).toBe(100);
  });

  it("calculates fuelConsumption properly", () => {
    const wrapper = shallowMount(Fuel,{});
    const total = wrapper.vm.multiply(20, 5)
    expect(total).toBe(100);
  });

  it("calculates fuelAmount properly", () => {
    const wrapper = shallowMount(Fuel,{});
    const total = wrapper.vm.multiply(20, 5)
    expect(total).toBe(100);
  }); */
});
