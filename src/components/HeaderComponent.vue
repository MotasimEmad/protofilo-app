<template>
    <section class="wrapper h-auto md:min-h-screen" style="background-repeat: no-repeat; background-size: cover; background-image: url('https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')">
        <header>
            <div class="flex flex-col md:flex-row items-center justify-center py-8 px-8 lg:py-24 lg:px-24">
                <div class="hidden md:block md:w-1/2 text-center">
                    <h1 class="mt-2 text-2xl lg:text-5xl text-white font-Licorice font-bold">
                        Motasim Emad
                    </h1>  
                    <h1 class="mt-2 text-xl lg:text-xl text-white font-bold">
                        Web Developer
                    </h1>   
                        
                    <div class="flex items-center mt-4 justify-center">
                        <a target="_blank" class="flex items-center mx-2 bg-indigo-400 text-white py-2 px-2 rounded-md hover:bg-indigo-500" href="https://twitter.com/6lzona">
                            <svg class="h-5 w-5 sm:h-4 sm:w-4 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
                            </svg>
                        </a>

                        <a target="_blank" class="flex items-center mx-2 bg-indigo-400 text-white py-2 px-2 rounded-md hover:bg-indigo-500" href="https://www.linkedin.com/in/motasim-emad-8b4901192/">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        </a>
                    </div>
                </div>

                  <div class="md:w-1/2">
                    <p class="text-xl text-white font-semibold">Hi,</p>
                    <h1 class="my-8 text-2xl lg:text-5xl text-white font-Quicksand font-bold">
                       I'm Motasim Emad
                    </h1>  
                    <p class="text-white text-md font-semibold">
                        Web Developer with around 3+ years of professional experience in Web Development and User Interface Development. I have experience using PHP framework (Laravel), Vue.js, building an Application programming interface (API), WordPress, and styling with TailwindCss.
                    </p>
                        
                    <div class="flex items-center mt-6">
                        <a target="_blank" class="bg-indigo-400 py-2 px-8 lg:py-4 lg:px-8 font-semibold rounded-lg flex items-center text-white hover:bg-indigo-500 hover:text-gray-200" href="https://drive.google.com/file/d/1CRJrYFa_8TtZXpyyR3IJvNz67VgBRAFd/view?usp=sharing">
                            <span>Get Full Resume</span>

                            <svg class="ml-3 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </section>
</template>

<script>

export default {
  name: 'About'
}
</script>
