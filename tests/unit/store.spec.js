import Vuex from "vuex";
import { shallowMount, createLocalVue } from "vue-test-utils";
import Coffee from "@/components/coffee.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Coffee", () => {
  let store;
  let mutations;
  beforeEach(() => {
    mutations = {
      MUTATION: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });
  it("commits a MUTATION type mutation when a button is clicked", () => {
    const wrapper = shallowMount(Coffee, {
      store,
      localVue,
    });
    wrapper.find("button").trigger("click");
    expect(mutations.MUTATION.mock.calls).toHaveLength(1);
    expect(mutations.MUTATION.mock.calls[0][1]).toEqual({ count: "1" });
  });
});
