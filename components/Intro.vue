<template>
  <div class="w-full flex justify-center h-screen" id="introduction">
    <div
      class="text-center flex flex-col items-center justify-center md:w-1/2 w-full m-2"
    >
      <div class="text-4xl uppercase font-semibold text-white ">
        Reynold Osei Adade
      </div>
      <div class="py-4 px-8 font-bold text-white">
        <p>
          <span class="text-4xl">W</span>elcome. I'm Reynold -- a frontend
          designer and coder who creates for a living.
        </p>
        <p>I am a craftman, that is the best way to describe my skills</p>
      </div>
      <div class="py-4 px-8 text-sm bg-white m-4 relative">
        <div class="absolute right-0 top-0 transform rotate-45 text-red-500">
          <span><i class="fas fa-thumbtack"></i></span>
        </div>
        <p>
          I'm detail-oriented and i specialise to building complex systems, i
          have been led in teams and i have led teams too, i have a knack for
          getting up to speed pretty quickly, i have 5 year plus experience
          working in the financial and geospatial and geomapping industries. I
          strive to understand the technologies i use so if you want to build
          with me. Just send me an email
        </p>
      </div>
      <div class="p-2 flex justify-center w-full text-white">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          class="m-2"
        >
          <i :class="social.icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: "fab fa-linkedin fa-2x",
          url: "https://www.linkedin.com/in/reynold-osei-adade",
          name: "linkedin"
        },
        {
          icon: "fab fa-github fa-2x",
          url: "https://github.com/reynoldadade",
          name: "github"
        },
        {
          icon: "fab fa-medium fa-2x",
          url: "https://medium.com/@nana_adade",
          name: "medium"
        }
      ]
    };
  }
};
</script>

<style></style>
