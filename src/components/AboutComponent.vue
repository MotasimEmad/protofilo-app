<template>
    <section class="font-sans py-8 px-8 lg:py-24 lg:px-24 bg-gray-900">
        <div class="wrapper">
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="flex items-center">
            <div class="md:w-1/2">
                <p class="text-sm text-white font-semibold">Hi, My Name is</p>
                <h1 class="mt-2 text-2xl lg:text-4xl text-indigo-600 font-black transform hover:-translate-y-1">
                    Motasim Emad
                </h1>   
                <p class="mt-2 text-gray-200 font-semibold text-base lg:text-lg">
                    Back-End Developer & sometimes Front-End with +2 years experience in web development with PHP framework 
                    <div class="relative inline">
                        <span class="text-indigo-600 font-black text-xl lg:text-2xl">Laravel</span>
                        <div class="absolute top-0 right-0 -mt-3 -mr-2 w-3 h-3 rounded-full bg-indigo-500 animate-ping"></div>
                        <div class="absolute top-0 right-0 -mt-3 w-3 -mr-2 h-3 rounded-full bg-indigo-500"></div>
                    </div> , 
                    <p class="text-gray-200 font-semibold text-base lg:text-lg inline">designed and developed web applications across multiple APIs thired-party intergration's and databases.</p>
                <div class="flex items-center mt-6">
                    <a class="bg-gray-800 py-2 px-4 lg:py-4 lg:px-8 font-semibold rounded-lg flex items-center text-white hover:bg-gray-700 hover:text-gray-200" href="motasim_resume.pdf" download>
                        <span>Discover CV</span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="hidden lg:block lg:w-1/2 ml-24">
                <img class="h-72 w-72 rounded-full object-cover object-center"
                    src="../assets/images/spa_2.jpg" />
            </div>
        </div>
    </section>
</template>


<script>

export default {
  name: 'About'
}
</script>
