<template>
  <div class="w-full p-4 flex justify-center  sticky top-0">
    <div class="w-full md:w-1/2 flex justify-between">
      <nuxt-link
        v-for="item in header"
        :key="item"
        class="uppercase font-semibold p-1 focus:outline-none"
        @click.prevent="selectItem(item)"
        :class="
          `${currentHash}` === `#${item}` ? 'border-b-2 border-blue-700' : ''
        "
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
  },
  computed: {
    currentHash() {
      return this.$route.hash;
    }
  }
};
</script>

<style></style>
