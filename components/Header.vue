<template>
  <div class="w-full p-4 flex justify-around bg-red-100">
    <div v-for="items in header" :key="items" class="uppercase font-semibold">
      {{ items }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: ["introduction", "skills", "projects", "hobbies", "socials"]
    };
  }
};
</script>

<style></style>
