<template>
    <section class="flex flex-col py-4 px-8 md:pt-12 md:px-12 lg:pt-24 lg:px-14 bg-gray-50 font-Ubuntu">
      <h1 class="text-center text-2xl lg:text-5xl text-gray-800 font-bold">Experience</h1>
      <div class="flex justify-center mx-auto mt-2 lg:mt-6">
          <span class="inline-block w-40 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
          <span class="inline-block w-3 h-1 lg:h-2 mx-1 bg-indigo-400 rounded-full"></span>
          <span class="inline-block w-1 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
      </div>

      <div class="mt-8 container mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div class="border-2-2 absolute border-opacity-20 bg-gray-200 h-full border" style="left: 50%"></div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div class="order-1 bg-indigo-400 rounded-lg shadow-xl w-5/12 px-4 py-4">
                <div class="flex flex-col lg:flex-row items-center justify-between">
                  <h3 class="font-bold text-white text-sm lg:text-xl">Full Stack Web Developer</h3>
                  <span class="my-2 md:my-0 pl-2 text-sm text-gray-100">April, 2022 - July, 2022</span>
                </div>
                <h3 class="font-bold text-gray-100 text-sm">Alkhaaldi Marketing Management / UAE</h3>
                <p class="mt-2 text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">
                  1. A database designed, developed, and modeled tables and their relationships. <br/>
                  2. Responsible for designing the dashboard using HTML, CSS, and JavaScript. <br/>
                  3. Responsible for developing the dashboard. <br/>
                  key Technologies:
                    - Laravel Framework, Vue.JS, JQuery, TailwindCss.
                </p>
              </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-red-400 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">3</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div class="flex flex-col lg:flex-row items-center justify-between">
                <h3 class="font-bold text-white text-sm lg:text-xl">PHP Developer</h3>
                <span class="my-2 md:my-0 pl-2 text-sm text-gray-100">February, 2022 - April, 2022</span>
              </div>
              <h3 class="font-bold text-gray-100 text-sm">Direct Axis Technology / UAE</h3>
              <p class="mt-2 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                1. Got tasks for building high-performance app. <br/>
                2. Responsible for building UI for some screens. <br/>
                key Technologies:
                  - PHP, Ajax, Bootstrap.
              </p>
            </div>
          </div>
          
          <!-- right timeline -->
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-indigo-400 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div class="order-1 bg-indigo-400 rounded-lg shadow-xl w-5/12 px-4 py-4">
              <div class="flex flex-col lg:flex-row  items-center justify-between">
                <h3 class="font-bold text-white text-sm lg:text-xl">Full Stack Web Developer</h3>
                <span class="my-2 md:my-0 pl-2 text-sm text-gray-100">June, 2020 - December, 2021</span>
              </div>
              <h3 class="font-bold text-gray-100 text-sm">Marsol Sudan / Sudan</h3>
              <p class="mt-2 text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">
                1. A database designed, developed, and modeled tables and their relationships. <br/>
                2. Translated designs and wireframes into high-quality code using HTML, CSS, and
                JavaScript. <br/>
                3. Responsible for building the dashboard. <br/>
                4. Responsible for building the API. <br/>
                key Technologies:
                  - Laravel Framework, Vue.JS, TailwindCss.
              </p>
            </div>
          </div>

          <!-- left timeline -->
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-red-400 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">1</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div class="flex flex-col lg:flex-row items-center justify-between">
                <h3 class="font-bold text-white text-sm lg:text-xl">Back End Developer</h3>
                <span class="my-2 md:my-0 pl-2 text-sm text-gray-100">May, 2019 - April, 2020</span>
              </div>
              <h3 class="font-bold text-gray-100 text-sm">Hash Information Technology / Sudan</h3>
              <p class="mt-2 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                1. Interact with clients to gather requirements, analyze requirements, and develop
                functionality accordingly. <br/>
                2. Responsible for building an API from several different SQL databases. <br/>
                3. Improve existing projects. <br/>
                Key Technologies:
                  - Laravel Framework, Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'Experence'
}

</script>
