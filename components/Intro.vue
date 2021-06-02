<template>
  <div class="w-full flex justify-center h-screen" id="introduction">
    <div
      class="text-center flex flex-col items-center justify-center md:w-1/2 w-full"
    >
      <div class="text-4xl uppercase font-semibold">Reynold Osei Adade</div>
      <div class="py-4 px-8 text-sm ">
        <ul>
          <li>Frontend Web developer</li>
          <li>Lover of everything frontend</li>
        </ul>
      </div>
      <div class="p-2 flex justify-around w-full">
        <a v-for="social in socials" :key="social.name" :href="social.url">
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
          icon: "fab fa-twitter fa-2x",
          url: "https://twitter.com/nana_adade",
          name: "twitter"
        },
        {
          icon: "fab fa-linkedin fa-2x",
          url: "www.linkedin.com/in/reynold-osei-adade",
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
