<template>
  <div class="w-full">
    <!-- <span class="absolute z-50" id="circle">
      <i
        class="fas fa-hand-point-right fa-2x transform rotate-45 text-red-500"
      ></i>
    </span> -->
    <Intro />
    <Skills />
    <Projects />
    <Header />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Intro from "~/components/Intro";
import Projects from "~/components/projects";
import Skills from "~/components/Skills";
import { gsap } from "gsap";
export default {
  components: {
    Header,
    Intro,
    Skills,
    Projects
  },
  mounted() {
    // document.addEventListener("mousemove", this.moveCircle);
  },
  methods: {
    moveCircle(e) {
      gsap.to("#circle", {
        duration: 0.3,
        css: {
          left: e.pageX,
          top: e.pageY
        }
      });
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
