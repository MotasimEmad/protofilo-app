<template>
  <div id="app">
    <header-component></header-component>
    <about-component></about-component>
    <use-component></use-component>
    <skill-component></skill-component>
    <project-component></project-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import UseComponent from './components/UseComponent.vue'
import SkillComponent from './components/SkillComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AboutComponent,
    UseComponent,
    SkillComponent,
    ProjectComponent,
    FooterComponent
  }
}
</script>

