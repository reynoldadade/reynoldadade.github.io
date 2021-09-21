import { it, test } from "@jest/globals";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import IndexComponent from "~/components/Intro";

describe("Index.vue Component", () => {
  const wrapper = shallowMount(IndexComponent);
  test("gsap should return a tween of the completed event", () => {});
});
