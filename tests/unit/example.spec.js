// Imports
import HelloWorld from "@/components/HelloWorld.vue";
import coffee from "@/components/coffee.vue";
import fuel from "@/components/fuel.vue";
import salary from "@/components/salary.vue";
import Vuetify from "vuetify";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("HelloWorld.vue", () => { // Nimetus - komponendi nimi

  const localVue = createLocalVue();
  let vuetify;

  // Siia panna kõik, mida peaks tegeme enne iga testi jooksutamist
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should take text from msg prop", () => { // Nimetus - mida test peaks tegema
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

});