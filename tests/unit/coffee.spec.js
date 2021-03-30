import coffee from "@/components/coffee.vue";
import Vuetify from "vuetify";

import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("coffee.vue", () => {
  const wrapper = shallowMount(coffee);
  const vm = wrapper.vm;
  const localVue = createLocalVue();

  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("increments counter value on click", async () => {
    const wrapper = mount(count);
    const button = wrapper.find("v-btn");
    const text = wrapper.find("button");

    expect(text.text()).toContain("teinud juba 0 korda");

    await button.trigger("click");

    expect(text.text()).toContain("teinud juba 1 korda");
  });
});
