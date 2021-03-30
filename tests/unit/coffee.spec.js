// Imports
import Coffee from "@/components/coffee.vue";

// Utilities
import { shallowMount } from "@vue/test-utils";

describe("coffee.vue", () => {
  test("testing setup correctly", () => {
    expect(true).toBe(true);
  });

  it("calculates coffee cups to go properly", () => {
    const wrapper = shallowMount(Coffee);
    const result = wrapper.vm.calculateCoffee(20, 150, 20);
    expect(result).toBe(6);
    expect(result).not.toBe(26);
  });
});
