<template>
  <div
    class="w-full md:h-screen bg-babyPink grid md:grid-cols-3 p-20 grid-cols-1"
  >
    <div class="md:col-span-1 ">
      <div class="font-bold text-6xl flex justify-center">
        <div>
          <p>Reynold</p>
          <p>Osei</p>
          <p>Adade</p>
          <div class="my-10 flex text-base">
            <div v-for="social in socials" :key="social.name" class="p-2   ">
              <a :href="social.url" target="_blank"
                ><i :class="social.icon"></i
              ></a>
            </div>
            <div key="email" class="p-2">
              <a href="mailto:reynoldadade@gmail.com" target="_blank"
                ><i class="far fa-envelope fa-2x"></i
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex w-full justify-center">
        <img src="/images/profile.svg" alt="profile" />
      </div>
    </div>
    <div class="md:col-span-2 md:px-10">
      <div
        v-for="(about, ndx) in abouts"
        :key="about.title"
        :class="{
          'md:ml-12': ndx === 1,
          'md:ml-24': ndx === 2,
          'md:ml-36': ndx === 3,
        }"
        class="md:w-1/2 mt-8"
      >
        <h1
          class="font-bold text-2xl hover:scale-110 transition-all ease-in-out duration-300 delay-150 hover:-translate-y-1 cursor-pointer"
        >
          {{ about.title }}
        </h1>
        <h6 class="text-sm p-1">{{ about.content }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      abouts: [
        {
          title: '<Frontend Developer/>',
          content:
            'Focusing on writing clean, effiencient and elegant code. Love for everything front end, let me build with you',
        },
        {
          title: '<Designer/>',
          content:
            'I love simple designs, let the content be the main character and everything else supports it',
        },
        {
          title: '<Mentor/>',
          content:
            'I love teaching and mentoring, it brings much joy to see the people you teach stand on their own and love programming just as you do',
        },
        {
          title: '<Scrum Master/>',
          content:
            'I used agile technoligies to ensure continuous delivery of products',
        },
      ],
      socials: [
        {
          icon: 'fab fa-linkedin fa-2x',
          url: 'https://www.linkedin.com/in/radade',
          name: 'linkedin',
        },
        {
          icon: 'fab fa-github fa-2x',
          url: 'https://github.com/reynoldadade',
          name: 'github',
        },
        {
          icon: 'fab fa-medium fa-2x',
          url: 'https://medium.com/@nana_adade',
          name: 'medium',
        },
      ],
    };
  },
  methods: {},
  mounted() {
    // this.insertIntro();
  },
};
</script>

<style></style>
