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
        <div v-for="social in socials" :key="social">
          <i :class="social.icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { icon: "fab fa-twitter fa-2x", url: "" },
        { icon: "fab fa-linkedin", url: "" },
        { icon: "fab fa-github", url: "" },
        { icon: "fab fa-medium", url: "" }
      ]
    };
  }
};
</script>

<style></style>
