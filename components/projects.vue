<template>
  <div class="p-20 grid grid-cols-3 bg-lightPink" id="projects">
    <div class="text-6xl font-bold col-span-1 pt-20">
      Projects I have worked on
    </div>
    <div class="col-span-2 p-10">
      <div v-for="project in projects" :key="project.title" class="py-4">
        <h1 class="font-bold text-4xl">{{ project.title }}</h1>
        <h6 class="text-sm p-1">{{ project.content }}</h6>
        <h6 class="text-sm p-1 font-bold flex uppercase flex-wrap">
          <div v-for="tech in project.technologies" :key="tech" class="p-2">
            {{ tech }}
          </div>
        </h6>
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
          title: "Endless Folders",
          content:
            "Folder management designed as a proof of concept of adopting folder structure to accomodate endless placement of files",
          githubLink: "https://github.com/reynoldadade/reo-assignment",
          url: "https://reo-assignment-kiih2fsdr-reynoldadade.vercel.app/",
          image: "/images/project-p1.png",
          technologies: [
            "Vue",
            "Tailwind",
            "Nuxt",
            "Ant Design",
            "axios",
            "jest"
          ]
        },
        {
          title: "URL Shortener",
          content: "URL Shortener a prototype of the landing page",
          githubLink: "https://github.com/reynoldadade/shortly",
          url: "https://url-shortener-topaz-chi.vercel.app/",
          image: "/images/project-p2.png",
          technologies: [
            "Vue",
            "Tailwind",
            "Nuxt",
            "Ant Design",
            "axios",
            "jest"
          ]
        },
        {
          title: "This site",
          content:
            "This very portfolio site, this is where i will mostly come experiment the new and interesting things i will come across",
          githubLink: "https://github.com/reynoldadade/reynoldadade.github.io",
          url: "reynoldadade@github.io",
          image: "/images/thisProject.png",
          technologies: ["Vue", "Tailwind", "Nuxt", "Gsap", "Plain Old CSS"]
        },
        {
          title: "Wainsight",
          content:
            "Easily one of my most complex applications, this system replies heavily on geospatial data and graphs to provide users with information on where they live or want to live based on over 300 different metrics including health and even as minute as noise to enable them make better decisions and even predict and spot trends about where they live and how certain conditions could affects their quality of life",
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
          title: "Secure",
          content: "Single Login application for all walulel products",
          githubLink: "",
          url: "https://dalex-gvive.firebaseapp.com/",
          image: "/images/wa-auth.png",
          technologies: ["Vue", "Nuxt", "TailwindCSS", "SweetAlert"]
        },

        {
          title: "Dalex GVIVE",
          content:
            "Allows verfication of passports, voters ID cards and ssnit, using an independent indentification check api",
          githubLink: "",
          url: "https://dalex-gvive.firebaseapp.com/",
          image: "/images/project-1.png",
          technologies: ["Angular", "firebase", "w3CSS"]
        },
        {
          title: "Dalex FILMS",
          content:
            "The Loan posting and disbursement app for Dalex Finance this software seeks to ease the need for face to face interaction of Compliance officers and clients looking for loans. Using E-Form it allows compliance to process loans under 3 hours for clients and takes away bias because all check are automated and passed by the system",
          githubLink: "",
          url: "http://films.dalexhq.com/",
          image: "/images/project-2.png",
          technologies: ["AngularJS", "Bootstrap3", "w3CSS", "AwesomeFont"]
        },
        {
          title: "Dalex DP Portal",
          content:
            "To manage over 3000 sales personnel requires an app that just manages personnel. Built as an extension of FILMS it is designed to help Team Leaders manage and enroll new members of their teams and to manage team member transfers and promotions",
          githubLink: "",
          url: "http://dpms.dalexhq.com/",
          image: "/images/project-3.png",
          technologies: ["Ionic", "Angular"]
        },
        {
          title: "Dalex Recovery App",
          content:
            "What do you then do if loans given go bad. How do you track who has what loan and how do you provide the clients convenient ways to pay off their loans",
          githubLink: "",
          url: "http://197.221.85.146:6767/filmspwa/login",
          image: "/images/project-4.png",
          technologies: ["Ionic", "Angular"]
        },
        {
          title: "Dalex Eligibility App",
          content:
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
