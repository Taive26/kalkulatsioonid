// Imports
import Fuel from "@/components/fuel.vue";
import Vuetify from "vuetify";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

//fuel komponent
describe("fuel.vue", () => { // Nimetus - komponendi nimi

  const localVue = createLocalVue();
  let vuetify;

  // Siia panna kõik, mida peaks tegeme enne iga testi jooksutamist
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should calculate fuelPrice properly", () => {
    const wrapper = shallowMount(Fuel,{});
    const total = wrapper.vm.add(20, 5)//vue test util properties all, on mingi vm property, millega saab meetoditele ligi
    expect(total).toBe(25);
    expect(total).not.toBe(26);
  });

  it("should calculate fuelAmount properly", () => {
    const wrapper = shallowMount(Fuel,{});
    const total = wrapper.vm.multiply(20, 5)//vue test util properties all, on mingi vm property, millega saab meetoditele ligi
    expect(total).toBe(100);
  });

  it("should calculate fuelConsumption properly", () => {
    const wrapper = shallowMount(Fuel,{});
    const total = wrapper.vm.multiply(20, 5)//vue test util properties all, on mingi vm property, millega saab meetoditele ligi
    expect(total).toBe(100);
  });

  it("should calculate journeyLength properly", () => {
    const wrapper = shallowMount(Fuel,{});
    const total = wrapper.vm.multiply(20, 5)//vue test util properties all, on mingi vm property, millega saab meetoditele ligi
    expect(total).toBe(100);
  });

});