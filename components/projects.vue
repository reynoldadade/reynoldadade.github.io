<template>
  <div class="h-screen p-4 w-full" id="projects">
    <div class="text-center text-2xl px-2 py-8 uppercase font-bold">
      Projects
    </div>
    <div class="p-10">
      <div
        class="grid grid-cols-3 p-1 gap-6"
        v-for="project in projects"
        :key="project.id"
      >
        <div class="col-span-1">
          <img :src="project.image" alt="" srcset="" />
        </div>
        <div class="col-span-2">
          <div>
            {{ project.name }}
          </div>
          <div>
            {{ project.description }}
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
      projects: [
        {
          id: 1,
          name: "Dalex GVIVE",
          description: "Allows verfication of passports, voters ID cards and ssnit, using an independent indentification check api",
          githubLink: "",
          url: "https://dalex-gvive.firebaseapp.com/",
          image: "/images/project-1.png",
          technologies: [
        },
        {
          id: 2,
          name: "Dalex FILMS",
          description:
            "The Loan posting and disbursement app for Dalex Finance this software seeks to ease the need for face to face interaction of Compliance officers and clients looking for loans. Using E-Form it allows compliance to process loans under 3 hours for clients and takes away bias because all check are automated and passed by the system",
          githubLink: "",
          url: "http://films.dalexhq.com/",
          image: "/images/project-2.png"
        },
        {
          id: 3,
          name: "Dalex DP Portal",
          description:
            "To manage over 3000 sales personnel requires an app that just manages personnel. Built as an extension of FILMS it is designed to help Team Leaders manage and enroll new members of their teams and to manage team member transfers and promotions",
          githubLink: "",
          url: "http://dpms.dalexhq.com/",
          image: "/images/project-3.png"
        },
        {
          id: 4,
          name: "Dalex Recovery App",
          description:
            "What do you then do if loans given go bad. How do you track who has what loan and how do you provide the clients convenient ways to pay off their loans",
          githubLink: "",
          url: "http://197.221.85.146:6767/filmspwa/login",
          image: "/images/project-4.png"
        },
        {
          id: 5,
          name: "Dalex Eligibility App",
          description:
            "Built for Dalex Finance and hosted on a Linux Server built with Django, this is the main quality check system used to validate all clients that require loans, it removes all manual compliance tasks on loans",
          githubLink: "",
          url: "http://197.221.85.146/",
          image: "/images/project-5.png"
        }
      ]
    };
  }
};
</script>

<style></style>
