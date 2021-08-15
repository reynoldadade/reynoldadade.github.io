<template>
  <div class="w-full p-4 h-screen" id="skills">
    <div class="text-center text-2xl px-2 py-8 uppercase font-bold">
      the skills
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 py-4">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="p-2 bg-gray-700 rounded shadow"
      >
        <div class="font-bold py-2">{{ skill.name }}</div>
        <div class="flex w-full text-sm font-semibold">
          <div>{{ skill.years }} <span class="text-gray-500">years</span></div>
          <div class="px-2">
            {{ skill.projects }} <span class="text-gray-500">projects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "Vue.js / Nuxt.js",
          years: 3,
          projects: 5
        },
        {
          name: "Python",
          years: 2,
          projects: 2
        },
        {
          name: "Mapbox.js",
          years: 1,
          projects: 2
        },
        {
          name: "Tailwind",
          years: 1,
          projects: 2
        },
        {
          name: "Bootstrap",
          years: 5,
          projects: 4
        },
        {
          name: "Angular",
          years: 4,
          projects: 4
        },
        {
          name: "React",
          years: 2,
          projects: 1
        }
      ]
    };
  }
};
</script>

<style></style>
