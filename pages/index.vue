<template>
  <div class="w-full">
    <Header />
    <Intro />
    <Skills />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Intro from "~/components/Intro";
import Skills from "~/components/Skills";
export default {
  components: {
    Header,
    Intro,
    Skills
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
