import Fuel from "@/components/fuel.vue";

import { shallowMount } from "@vue/test-utils";

describe("fuel.vue", () => {
  const wrapper = shallowMount(Fuel);
  const vm = wrapper.vm;

  test("testing setup correctly", () => {
    expect(true).toBe(true);
  });

  it("calculates fuel price properly", () => {
    const result = wrapper.vm.sum(20, 20, 20);
    expect(result).toBe(80);
    expect(result).not.toBe(26);
  });

  it("calculates journeyLength properly", () => {
    const result = wrapper.vm.journeyLengthCalculation(20, 20);
    expect(result).toBe(100);
    expect(result).not.toBe(26);
  });

  it("calculates fuelConsumption properly", () => {
    const result = wrapper.vm.fuelConsumptionCalculation(20, 20);
    expect(result).toBe(100);
    expect(result).not.toBe(26);
  });

  it("calculates fuelAmount price properly", () => {
    const result = wrapper.vm.fuelAmountCalculation(20, 20);
    expect(result).toBe(4);
    expect(result).not.toBe(26);
  });
});
