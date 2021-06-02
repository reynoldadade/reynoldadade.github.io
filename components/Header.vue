<template>
  <div class="w-full p-4 flex justify-center bg-gray-600 sticky top-0">
    <div class="w-full md:w-1/2 flex justify-between">
      <nuxt-link
        v-for="item in header"
        :key="item"
        class="uppercase font-semibold p-1 focus:outline-none"
        @click.prevent="selectItem(item)"
        :class="currentItem === item ? 'border-b-2 border-blue-300' : ''"
        :to="{ path: '/', hash: `#${item}` }"
      >
        {{ item }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: ["introduction", "skills", "projects", "hobbies", "socials"],
      currentItem: "introduction"
    };
  },
  methods: {
    selectItem(item) {
      this.currentItem = item;
    }
  }
};
</script>

<style></style>
