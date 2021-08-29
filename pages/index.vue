<template>
  <div class="w-full">
    <!-- <span class="absolute" id="circle">
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
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
export default {
  components: {
    Header,
    Intro,
    Skills,
    Projects
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.bringCards();
    this.dragCards();
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
    },
    bringCards() {
      gsap.from(".projectCard, .skillCard", {
        opacity: 0.1,
        duration: 2,
        ease: "bounce",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#projects, #skills",
          toggleActions: "restart pause reverse pause",
          // markers: true,
          end: "bottom  50%+=100px",
          // start: "top center",
          scrub: 1
        }
      });
    },
    dragCards() {
      Draggable.create(".projectCard", {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "#projects",
        inertia: true
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
