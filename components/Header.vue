<template>
  <div class="w-full p-4 flex justify-around bg-red-100">
    <button
      v-for="item in header"
      :key="item"
      class="uppercase font-semibold p-1 focus:outline-none"
      @click.prevent="selectItem(item)"
      :class="currentItem === item ? 'border-b-2 border-blue-300' : ''"
    >
      {{ item }}
    </button>
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
