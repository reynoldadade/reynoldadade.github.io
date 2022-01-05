<template>
  <div class="p-20 bg-lightPink grid grid-cols-3" id="skills">
    <div class=" text-6xl font-bold col-span-1 pt-10">
      What i am good at
    </div>
    <div class="col-span-2 p-10">
      <div v-for="skill in skills" :key="skill.title" class="py-4">
        <h1 class="font-bold text-4xl">
          {{ skill.title }}
        </h1>
        <h6 class="text-sm">
          {{ skill.content }}
        </h6>
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
          title: "Frontend with Vue and React",
          content:
            "I am primarily a frontend developer, i focus on user interfaces and animations to bring life to your product, my focus is always on code readabilty and proper documentation and maintenance"
        },
        {
          title: "Tailwind and Bootstrap",
          content:
            "I use these css tools to bring color and consistency whilst producing beautiful designs with a focus on simplicity"
        },
        {
          title: "Headless UI and Gsap",
          content:
            "A partner to tailwind, headless ui allows for beautiful overlays and modals that will perform consistently every single time its evoked, Gsap however is my go to tool if i want to take animations one step higher"
        },
        {
          title: "Graphs with Chart.js, ApexCharts and Highcharts ",
          content:
            "I have worked on a lot of data heavy applications, to make sense out of large datasets its important to use chats to tell more than text can show"
        },
        {
          title: "Maps with Mapbox and Google Maps",
          content:
            "I have also worked on a number of projects that require geospatial data and working maps, and these libraries are used to produce beautiful map layers"
        }
      ]
    };
  }
};
</script>

<style></style>
