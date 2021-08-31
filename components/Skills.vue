<template>
  <div class=" p-4 m-2 text-white" id="skills">
    <div class="text-center text-5xl px-2 py-8 uppercase font-bold">
      the skills
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 py-4">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="p-2  border-2 relative skillCard"
      >
        <div class="absolute right-0 top-0 transform rotate-45 text-red-500">
          <span><i class="fas fa-thumbtack"></i></span>
        </div>
        <div class="font-bold py-2">{{ skill.name }}</div>
        <div class="text-sm p-1">
          {{ skill.description }}
        </div>
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
          projects: 5,
          description:
            "The framework I have the strongest proficiency in by far, I can join a team that uses this stack from day 1 and i can contribute and make a difference almost immediately."
        },
        {
          name: "Python",
          years: 2,
          projects: 2,
          description:
            "if you need basic scripts written, from finding creative ways of doing your excel or making tons of api calls at once, i do have alittle bit of experience in that"
        },
        {
          name: "Mapbox.js",
          years: 1,
          projects: 2,
          description:
            "This is google maps slightly annnoying and inverted brother, I can build with this to any level of complexity"
        },
        {
          name: "Tailwind",
          years: 1,
          projects: 2,
          description:
            "If you need to have a personal feel to your app for any reason, if you want to build without using javascript and alot of css, tailwind is the way to go and actually my personal favourite"
        },
        {
          name: "Bootstrap",
          years: 5,
          projects: 4,
          description:
            "My second choice in building for websites, I have experience in both its modern and legacy versions"
        },
        {
          name: "Angular",
          years: 4,
          projects: 4,
          description:
            "The framework with the longest experience in, my second most proficient, i can build enterprise level apps with it using its cleana and contained components and my original love"
        },
        {
          name: "React",
          years: 2,
          projects: 1,
          description:
            "Everyone loves react and i love it to, I have enough proficiency in this to easily insert myself into any project"
        },
        {
          name: "Scrum",
          years: 4,
          projects: 5,
          description:
            "Agile methodologies are one of the most effienct ways of running projects, I have enough experience in scrum to lead teams that require scrum restructuring, I am a certified scrum master and i can also apply this knowlege to easily insert myself into scrum practicing teams"
        }
      ]
    };
  }
};
</script>

<style></style>
