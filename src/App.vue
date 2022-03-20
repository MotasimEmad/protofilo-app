<template>
  <div id="app" class="font-Quicksand">
    <header-component></header-component>
    <about-component></about-component>
    <service-component></service-component>
    <skill-component></skill-component>
    <project-component></project-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ServiceComponent from './components/ServiceComponent.vue'
import SkillComponent from './components/SkillComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    SkillComponent,
    ProjectComponent,
    FooterComponent
  }
}
</script>

<style>
  @import "assets/css/style.css";
  @import "assets/css/text-animation.css";
</style>

