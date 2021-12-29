<template>
  <section
    class="flex flex-col py-8 px-8 md:py-12 md:px-12 lg:py-24 lg:px-14 bg-gray-200 text-center"
  >
    <h1
      class="mt-4 text-lg md:text-xl lg:text-3xl text-gray-800 font-bold uppercase"
    >
      Side - Projects
    </h1>

    <div class="flex flex-col">
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img src="../assets/images/projects/movies.png" class="image" />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>
                Movies app. show you Popular, Playing Now & Top Rated Movies and
                Series. Build with Vue JS.
              </p>
              <a
                class="mt-2 bg-transparent border border-gray-400 py-2 font-semibold rounded-full text-white hover:bg-gray-700 hover:text-gray-200"
                href="https://movies-website.herokuapp.com"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img
              src="../assets/images/projects/screencapture-file-E-Work-space-Tailwind-space-Useful-sudev-public-index-html-2021-12-02-17_37_57.png"
              class=""
            />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>
                Website design for sudev developers community. Build with
                TailwindCss.
              </p>
              <a
                class="mt-2 bg-transparent border border-gray-400 py-2 font-semibold rounded-full text-white hover:bg-gray-700 hover:text-gray-200"
                href="https://sudev-website.herokuapp.com"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img
              src="../assets/images/projects/screencapture-file-E-Work-space-Tailwind-space-Useful-creative-public-index-html-2021-12-02-17_38_21.png"
              class=""
            />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>Website design for Creative people. Build with TailwindCss.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img
              src="../assets/images/projects/screencapture-file-E-Work-space-Tailwind-space-Useful-personal-public-index-html-2021-12-02-17_36_07.png"
              class=""
            />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>Web developer protofilo template. Build with TailwindCss</p>
              <a
                class="mt-2 bg-transparent border border-gray-400 py-2 font-semibold rounded-full text-white hover:bg-gray-700 hover:text-gray-200"
                href="https://protofilo-template.herokuapp.com"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img
              src="../assets/images/projects/screencapture-localhost-8000-users-2021-12-02-17_42_57.png"
              class=""
            />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>Marsol dashboard for mobile application build with Laravel.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img
              src="../assets/images/projects/screencapture-localhost-8000-projects-2021-12-02-17_42_01.png"
              class=""
            />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>Bird app to manage your tasks. Build with Laravel.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mt-12">
        <a
          class="bg-gray-900 py-4 px-8 font-semibold rounded-lg flex items-center text-white hover:bg-gray-700 hover:text-gray-200"
          href="https://github.com/MotasimEmad"
        >
          <span>View More On Github</span>

          <svg
            class="h-5 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style scoped>
.container {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  /* bottom: 100%; */
  left: 0;
  right: 0;
  background-color: #242829;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.container:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  /* text-align: center; */
}
</style>
