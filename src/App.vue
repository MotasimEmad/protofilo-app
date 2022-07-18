<template>
  <div id="app" class="font-Quicksand">
    <header-component></header-component>
    <service-component></service-component>
    <skill-component></skill-component>
    <project-component></project-component>
    <experence-component></experence-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import ExperenceComponent from './components/ExperenceComponent.vue'
import ServiceComponent from './components/ServiceComponent.vue'
import SkillComponent from './components/SkillComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ExperenceComponent,
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

