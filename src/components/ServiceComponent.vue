<template>
    <section class="flex flex-col py-4 px-8 md:pt-12 md:px-12 lg:pt-24 lg:pb-28 lg:px-14 bg-indigo-100 font-Ubuntu">
        <h1 class="text-center mt-4 text-2xl lg:text-5xl text-gray-800 font-bold">Services</h1>
        <div class="flex justify-center mx-auto mt-2 lg:mt-6">
            <span class="inline-block w-40 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
            <span class="inline-block w-3 h-1 lg:h-2 mx-1 bg-indigo-400 rounded-full"></span>
            <span class="inline-block w-1 h-1 lg:h-2 bg-indigo-400 rounded-full"></span>
        </div>
        <p class="text-xl text-gray-600 px-2 text-center mt-4 font-Ubuntu">
            These are some of the services I offer. Reach out to me if I can help you with any!
        </p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2 text-left">
            <div class="flex flex-col bg-white py-16 px-8 rounded-md hover:bg-indigo-400 text-gray-800 hover:text-white">
                <img src="../assets/images/web-design.png" class="w-14 h-w-14" />
                <h1 class="mt-4 text-xl font-bold">Front-End Development</h1>
            </div>

            <div class="flex flex-col bg-white py-16 px-8 rounded-md hover:bg-indigo-400 text-gray-800 hover:text-white">
                <img src="../assets/images/backend.png" class="w-14 h-w-14" />
                <h1 class="mt-4 text-xl font-bold">Back-End Development</h1>
            </div>

            <div class="flex flex-col bg-white py-16 px-8 rounded-md hover:bg-indigo-400 text-gray-800 hover:text-white">
                <img src="../assets/images/wordpress.png" class="w-14 h-w-14" />
                <h1 class="mt-4 text-xl font-bold">WordPress</h1>
            </div>
        </div>
    </section>
</template>



<script>
export default {
  name: 'Use',
}
</script>