<template>
    <section class="flex flex-col py-8 px-8 md:py-12 md:px-12 lg:py-24 lg:px-14 bg-gray-100">
        <h1 class="mt-4 text-lg md:text-xl lg:text-3xl text-gray-800 font-bold uppercase">What I Use</h1>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div class="ml-2 bg-white shadow-md rounded-lg py-4 px-6 w-full h-48 lg:h-72 transform  hover:-translate-y-1 hover:scale-110">
               <a href="https://laravel.com">
                    <img src="../assets/images/svg/laravel-2.svg" class="mx-auto w-28 h-28 lg:w-36 lg:h-36 mt-6 lg:mt-12">
               </a>
            </div>
           <div class="ml-2 bg-white shadow-md rounded-lg py-4 px-6 w-full h-48 lg:h-72 transform lg:scale-110 lg:-rotate-6 hover:-translate-y-1 hover:scale-110">
               <a href="https://tailwindcss.com">
                    <img src="../assets/images/svg/tailwindcss-logotype.128b6e12eb85d013bc9f80a917f57efe.svg" class="mx-auto w-36 h-36 lg:w-36 lg:h-36 mt-4 lg:mt-12">
               </a>
            </div>
            <div class="ml-2 bg-white shadow-md rounded-lg py-4 px-6 w-full h-48 lg:h-72 transform hover:-translate-y-1 hover:scale-110">
                <a href="https://vuejs.org">
                    <img src="../assets/images/svg/vuejs.svg" class="mx-auto w-28 h-28 lg:w-36 lg:h-36 mt-6 lg:mt-12">
                </a>
            </div>
        </div>
    </section>
</template>



<script>
export default {
  name: 'Use',
}
</script>