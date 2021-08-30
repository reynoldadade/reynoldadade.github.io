<template>
  <div id="introduction" class="z-10 p-4">
    <div class="text-white text-5xl uppercase font-bold headerLine">
      <p>
        Hi, there
      </p>
      <p class="p-1">
        My name is <span id="name" class="p-2">Reynold Adade</span>
      </p>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="text-white w-full md:w-1/2 text-sm p-2">
        <p class="p-1">
          Welcome, I hope i can show you some of the work I have done and
          hopefully help you understand my journey, maybe along the way, the
          little tricks i display here will convince you enough about my skill
        </p>
        <p class="p-1">
          Started my journey in 2016, begun as an entry level compliance
          officer, my job was to check for risks in loans, that job was so
          boring and repeatitive i knew that there was something that could be
          done to save me more time and have me do less work, therefore my
          journey begun with python
        </p>
        <p class="p-1">
          Since that day my love for code has never wavered and i have been
          lucky enough to build some complex systems, I believe that journey has
          made me who I am
        </p>
      </div>
      <div class="flex md:flex-col flex-row justify-center">
        <div
          v-for="social in socials"
          :key="social.name"
          class="text-white m-2"
        >
          <span><i :class="social.icon"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      socials: [
        {
          icon: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/reynold-osei-adade",
          name: "linkedin"
        },
        {
          icon: "fab fa-github",
          url: "https://github.com/reynoldadade",
          name: "github"
        },
        {
          icon: "fab fa-medium",
          url: "https://medium.com/@nana_adade",
          name: "medium"
        }
      ]
    };
  },
  methods: {
    insertIntro() {
      let tl = gsap.timeline();
      tl.from(".headerLine", {
        duration: 1,
        opacity: 0.2,
        x: "100%",
        ease: "bounce"
      })
        .from("#message", {
          duration: 2,
          ease: "steps",
          opacity: 0,
          scale: 0.2
        })
        .to("#name", {
          borderTop: 2,
          duration: 0.7
        })
        .to("#name", {
          borderRight: 2,
          duration: 0.7
        })
        .to("#name", {
          borderBottom: 2,
          duration: 0.5
        })
        .to("#name", {
          borderLeft: 2,
          duration: 0.5
        });
    }
  },
  mounted() {
    this.insertIntro();
  }
};
</script>

<style></style>
