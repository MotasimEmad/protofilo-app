<template>
    <section class="wrapper h-96 md:min-h-screen bg-gray-800">
        <header class="border-t-4 border-indigo-600">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="flex items-center text-gray-200 hover:text-indigo-600" href="#">
                            <svg class="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>

                            <span class="mx-3 font-bold text-sm md:text-base uppercase">Web Developer</span>
                        </a>
                    </div>
                    <div class="flex items-center -mx-2">
                        <a class="flex items-center mx-2 text-gray-200 hover:text-indigo-600" href="https://twitter.com/6lzona">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
                            </svg>
                        </a>

                        <a class="flex items-center mx-2 text-gray-200 hover:text-indigo-600" href="https://www.linkedin.com/in/motasim-emad-8b4901192/">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex items-center py-8 px-8 lg:py-24 lg:px-24">
                <div class="md:w-1/2">
                    <p class="text-sm text-white font-semibold">Hi, My Name is</p>
                    <h1 class="mt-2 text-2xl lg:text-4xl text-indigo-600 font-bold transform hover:-translate-y-1">
                        Motasim Emad
                    </h1>   
                   <div class="flex items-center">
                        <div class="text-white font-semibold text-2xl lg:text-4xl">I'm a</div>
                        <ul class="option text-2xl lg:text-4xl font-bold text-indigo-600">
                            <li><span>Web Developer</span></li>
                            <li><span>Front-End Developer</span></li>
                            <li><span>Back-End Developer</span></li>
                            <li><span>Freelancer</span></li>
                        </ul>
                    </div>
                        
                    <div class="flex items-center mt-6">
                        <a target="_blank" class="bg-gray-700 py-2 px-4 lg:py-4 lg:px-8 font-semibold rounded-lg flex items-center text-white hover:bg-gray-500 hover:text-gray-200" href="https://drive.google.com/file/d/1IIk0qBBAObBYG6dLT8UiD3KMBcAzMKRe/view?usp=sharing">
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
