<script setup>
</script>

<template>
  <section class="mx-3 sm:mx-16 lg:mx-32 2xl:mx-0 pt-52 pb:10 sm:pb-20 relative flex flex-col lg:flex-row items-center lg:block text-center lg:text-start">
    <div class="lg:w-1/2">
      <h2 class="font-semibold text-4xl text-b-09">Light, Fast & Powerful</h2>
      <p class="mt-4 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    </div>
    <img class="md:w-4/5 lg:w-fit lg:absolute top-40 -z-10 right-0" :src="`/images/list-1.svg`" alt="">
    <div class="w-[90%] lg:w-1/2 py-20 flex justify-between">
      <div class="w-[48%] flex flex-col items-center lg:items-start">
        <img class="w-fit" :src="`/images/title-icon.svg`" alt="">
        <h3 class="font-semibold text-b-09 mt-4 mb-2">Title Goes Here</h3>
        <p class="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
      </div>

      <div class="w-[48%] flex flex-col items-center lg:items-start">
        <img class="w-fit" :src="`/images/title-icon.svg`" alt="">
        <h3 class="font-semibold text-b-09 mt-4 mb-2">Title Goes Here</h3>
        <p class="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
      </div>
    </div>
  </section>
</template>