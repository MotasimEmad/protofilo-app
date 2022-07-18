<template>
 <section class="flex flex-col py-4 px-8 md:py-12 md:px-12 lg:py-24 lg:px-10 bg-gray-50 font-Ubuntu">
        <h1 class="text-center text-2xl lg:text-5xl text-gray-800 font-bold">Skills</h1>
        <div class="flex justify-center mx-auto mt-2 lg:mt-6">
            <span class="inline-block w-40 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
            <span class="inline-block w-3 h-1 lg:h-2 mx-1 bg-indigo-400 rounded-full"></span>
            <span class="inline-block w-1 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-4 gap-4 lg:flex items-center justify-center mt-6 lg:mt-28">
          <a class="flex flex-col items-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/HTML5_Logo.svg" class="w-14 h-14">
          </a>
          <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/icons8-css3.svg" class="w-14 h-14">
          </a>
           <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/icons8-javascript-logo.svg" class="w-14 h-14">
          </a>
           <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/icons8-bootstrap.svg" class="w-14 h-14">
          </a>
           <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/tailwindcss-logotype.128b6e12eb85d013bc9f80a917f57efe.svg" class="w-14 h-14">
          </a>
           <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/vuejs.svg" class="w-14 h-14">
          </a>
          <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/php-logo.svg" class="w-14 h-14">
          </a>
          <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/laravel-2.svg" class="w-14 h-14">
          </a>
          <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/icons8-wordpress-100.png" class="w-14 h-14">
          </a>
          <a class="flex items-center justify-center mx-2 bg-indigo-400 text-white py-6 px-6 rounded-md hover:bg-indigo-300">
            <img src="../assets/images/svg/icons8-git-96.png" class="w-14 h-14">
          </a>
        </div>
    </section>
</template>


<script>

export default {
  name: 'Skill',
}
</script>