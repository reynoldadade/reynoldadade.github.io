<template>
  <div class="w-full">
    <Header />
    <Intro />
    <Skills />
    <Projects />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Intro from "~/components/Intro";
import Projects from "~/components/projects";
import Skills from "~/components/Skills";
export default {
  components: {
    Header,
    Intro,
    Skills,
    Projects
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
