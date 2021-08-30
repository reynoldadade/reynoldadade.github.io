<template>
  <div class="p-4 h-full  m-2" id="projects">
    <div class="text-center text-5xl px-2 py-8 uppercase font-bold text-white">
      Projects
    </div>
    <div class="h-full grid md:grid-cols-4 gap-4 grid-cols-1">
      <div
        class="bg-white  shadow p-2 relative flex flex-col cursor-pointer hover:shadow-lg projectCard"
        v-for="project in projects"
        :key="project.id"
        :id="`project-${project.id}`"
      >
        <div
          class="absolute right-0 top-0 transform rotate-45 text-red-500 z-50"
          :id="`thumbtack-${project.id}`"
          :key="`thumbtack-${project.id}`"
        >
          <span><i class="fas fa-thumbtack"></i></span>
        </div>
        <div class="font-semibold p-1 ">
          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline"
          >
            {{ project.name }}</a
          >
        </div>
        <div class="h-64 border-2 border-black">
          <img :src="project.image" alt="" class="w-full h-full" />
        </div>
        <div class="flex flex-col justify-between flex-grow">
          <div>
            <div class="p-2 text-sm">
              {{ project.description }}
            </div>
            <div class="w-full flex flex-wrap">
              <div
                v-for="(tech, index) in project.technologies"
                :key="index"
                class=" p-1 border-2 border-black m-1 font-semibold  text-xs "
              >
                {{ tech }}
              </div>
            </div>
          </div>
          <div class="p-2 text-sm font-bold">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline p-2"
            >
              check it out <span><i class="fas fa-arrow-right"></i></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      skewed: false,
      projects: [
        {
          id: 1,
          name: "Wainsight",
          description:
            "WaInsight is Walulel’s Geospatial Intelligence Platform. The platform enables Residential Real Estate market participants to understand the quality of every neighbourhood, postcode or zip code.",
          githubLink: "",
          url: "https://wa-insight.com",
          image: "/images/wainsight.png",
          technologies: [
            "Vue",
            "Nuxt",
            "TailwindCSS",
            "MapboxGL.js",
            "SweetAlert",
            "Chart.js",
            "HighCharts.js",
            "Vuex",
            "SyncfusionVue"
          ]
        },
        {
          id: 2,
          name: "Secure",
          description: "Single Login application for all walulel products",
          githubLink: "",
          url: "https://dalex-gvive.firebaseapp.com/",
          image: "/images/wa-auth.png",
          technologies: ["Vue", "Nuxt", "TailwindCSS", "SweetAlert"]
        },

        {
          id: 3,
          name: "Dalex GVIVE",
          description:
            "Allows verfication of passports, voters ID cards and ssnit, using an independent indentification check api",
          githubLink: "",
          url: "https://dalex-gvive.firebaseapp.com/",
          image: "/images/project-1.png",
          technologies: ["Angular", "firebase", "w3CSS"]
        },
        {
          id: 4,
          name: "Dalex FILMS",
          description:
            "The Loan posting and disbursement app for Dalex Finance this software seeks to ease the need for face to face interaction of Compliance officers and clients looking for loans. Using E-Form it allows compliance to process loans under 3 hours for clients and takes away bias because all check are automated and passed by the system",
          githubLink: "",
          url: "http://films.dalexhq.com/",
          image: "/images/project-2.png",
          technologies: ["AngularJS", "Bootstrap3", "w3CSS", "AwesomeFont"]
        },
        {
          id: 5,
          name: "Dalex DP Portal",
          description:
            "To manage over 3000 sales personnel requires an app that just manages personnel. Built as an extension of FILMS it is designed to help Team Leaders manage and enroll new members of their teams and to manage team member transfers and promotions",
          githubLink: "",
          url: "http://dpms.dalexhq.com/",
          image: "/images/project-3.png",
          technologies: ["Ionic"]
        },
        {
          id: 6,
          name: "Dalex Recovery App",
          description:
            "What do you then do if loans given go bad. How do you track who has what loan and how do you provide the clients convenient ways to pay off their loans",
          githubLink: "",
          url: "http://197.221.85.146:6767/filmspwa/login",
          image: "/images/project-4.png",
          technologies: ["Ionic"]
        },
        {
          id: 7,
          name: "Dalex Eligibility App",
          description:
            "Built for Dalex Finance and hosted on a Linux Server built with Django, this is the main quality check system used to validate all clients that require loans, it removes all manual compliance tasks on loans",
          githubLink: "",
          url: "http://197.221.85.146/",
          image: "/images/project-5.png",
          technologies: ["Django", "Bootstrap"]
        }
      ]
    };
  }
};
</script>

<style></style>
