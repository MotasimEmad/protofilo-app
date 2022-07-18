<template>
  <section
    class="flex flex-col py-8 px-8 md:py-12 md:px-12 lg:py-24 lg:px-14 bg-indigo-100 text-center font-Ubuntu"
  >
    <h1 class="text-center text-2xl lg:text-5xl text-gray-800 font-bold">Portfolio</h1>
    <div class="flex justify-center mx-auto mt-2 lg:mt-6">
        <span class="inline-block w-40 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
        <span class="inline-block w-3 h-1 lg:h-2 mx-1 bg-indigo-400 rounded-full"></span>
        <span class="inline-block w-1 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
    </div>

    <div class="flex flex-col">
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img src="../assets/images/projects/ads.png" class="image bg-cover" />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>
                Register and get an easy and simple landing page specific to your business. 
                Use it to show your services....
                Build with <span class="font-bold">Laravel.</span>
              </p>
              <a
                class="mt-2 bg-transparent border border-gray-400 py-2 font-semibold rounded-full text-white hover:bg-gray-700 hover:text-gray-200"
                href="https://www.cssix.com"
                target="_blank" 
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col container">
          <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
            <img src="../assets/images/projects/movies.png" class="image" />
          </div>
          <div class="overlay">
            <div class="text flex flex-col">
              <p>
                Movies app. show you Popular, Playing Now & Top Rated Movies and
                Series. Build with <span class="font-bold">Vue JS.</span>
              </p>
              <a
                class="mt-2 bg-transparent border border-gray-400 py-2 font-semibold rounded-full text-white hover:bg-gray-700 hover:text-gray-200"
                href="https://movies-website.herokuapp.com"
                target="_blank"
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
                <span class="font-bold">TailwindCss.</span>
              </p>
              <a
                class="mt-2 bg-transparent border border-gray-400 py-2 font-semibold rounded-full text-white hover:bg-gray-700 hover:text-gray-200"
                href="https://sudev-website.herokuapp.com"
                target="_blank"
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
              <p>Website design for Creative people. Build with <span class="font-bold">TailwindCss.</span></p>
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
              <p>Web developer protofilo template. Build with <span class="font-bold">TailwindCss.</span></p>
              <a
                class="mt-2 bg-transparent border border-gray-400 py-2 font-semibold rounded-full text-white hover:bg-gray-700 hover:text-gray-200"
                href="https://protofilo-template.herokuapp.com"
                target="_blank"
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
              <p>Marsol dashboard for mobile application build with <span class="font-bold">Laravel.</span></p>
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
              <p>Bird app to manage your tasks. Build with <span class="font-bold">Laravel.</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-12 justify-center">
          <a target="_blank" class="bg-indigo-400 py-2 px-8 lg:py-4 lg:px-8 font-semibold rounded-lg flex items-center text-white hover:bg-indigo-500 hover:text-gray-200" href="https://github.com/MotasimEmad">
              <span>View More On GitHub</span>

              <svg class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"></path>
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
  font-family: 'Ubuntu';
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
