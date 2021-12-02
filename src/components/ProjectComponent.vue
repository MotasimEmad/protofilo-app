<template>
   <section class="flex flex-col py-8 px-8 md:py-12 md:px-12 lg:py-24 lg:px-14 bg-gray-200 text-center">
        <h1 class="mt-4 text-lg md:text-xl lg:text-3xl text-gray-800 font-bold uppercase">Projects</h1>
        <div class="flex flex-col">
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="flex flex-col">
                    <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
                        <img src="../assets/images/projects/screencapture-127-0-0-1-8000-index-2021-12-01-13_34_26.png" class="">
                    </div>
                </div>
    
                <div class="flex flex-col">
                    <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
                        <img src="../assets/images/projects/screencapture-file-E-Work-space-Tailwind-space-Useful-sudev-public-index-html-2021-12-02-17_37_57.png" class="">
                    </div>
                </div>
    
                <div class="flex flex-col">
                    <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
                        <img src="../assets/images/projects/screencapture-file-E-Work-space-Tailwind-space-Useful-creative-public-index-html-2021-12-02-17_38_21.png" class="">
                    </div>
                </div>
    
                <div class="flex flex-col">
                    <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
                        <img src="../assets/images/projects/screencapture-file-E-Work-space-Tailwind-space-Useful-personal-public-index-html-2021-12-02-17_36_07.png" class="">
                    </div>
                </div>
    
                <div class="flex flex-col">
                    <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
                        <img src="../assets/images/projects/screencapture-localhost-8000-users-2021-12-02-17_42_57.png" class="">
                    </div>
                </div>
    
                <div class="flex flex-col">
                    <div class="overflow-hidden shadow-md rounded-lg w-full h-56">
                        <img src="../assets/images/projects/screencapture-localhost-8000-projects-2021-12-02-17_42_01.png" class="">
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center mt-12">
                <a class="bg-gray-900 py-4 px-8 font-semibold rounded-lg flex items-center text-white hover:bg-gray-700 hover:text-gray-200" href="https://github.com/MotasimEmad">
                    <span>View More On Github</span>

                    <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>


<script>

export default {
  name: 'Project',
}
</script>