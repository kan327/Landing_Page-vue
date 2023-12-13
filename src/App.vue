<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  import SpecialSectionCard from './components/SpecialSectionCard.vue'
  import SectionCard from './components/SectionCard.vue'
</script>

<template>
  <!-- <nav class="flex justify-between  items-center py-5 px-32 backdrop-blur-md fixed w-full top-0 z-50"> -->
  <nav class="flex justify-between items-center py-5 px-32 fixed w-full top-0 z-50">
    <div class="gap-14 flex">
      <RouterLink to="/" class="text-sm text-b-50">
        Home
      </RouterLink>
      <RouterLink to="/" class="text-sm text-b-50">
        About
      </RouterLink>
      <RouterLink to="/" class="text-sm text-b-50">
        Contact
      </RouterLink>
    </div>
    <p class="text-2xl font-black text-b-37">Landing</p>
    <button class="bg-b-11 min-w-[180px] px-9 py-1 text-white font-semibold rounded-sm">Buy Now</button>
    <!-- <button class="bg-b-11 px-16 py-2 text-white font-semibold rounded-sm">Buy Now</button> -->
  </nav>
  <!-- after:contents-[''] after:block after:pb-[100%] -->
  <header class="h-[110vh] overflow-clip ml-32 items-center flex relative overflow-x-hidden">
    <div class="w-[45%] max-w-3xl h-fit relative">
      <h1 class="font-semibold text-5xl text-b-09">Introduce Your Product Quickly & Effectively</h1>
      <p class="mt-5 mb-10 text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      <div class="gap-7 flex">
        <button class="bg-b-11 min-w-[180px] py-1 text-white font-semibold rounded-sm">Purchase UI Kit</button>
        <button class="border-b-09 border-2 min-w-[180px] py-1 text-b-09 font-semibold rounded-sm">Learn More</button>
      </div>
    </div>
    <img class="absolute -z-10 -right-[25%] -top-1/3 w-[100%]" :src="`/images/hero(fixed).svg`" alt="">
  </header>
  <main class="overflow-clip">
    <SpecialSectionCard></SpecialSectionCard>
    <SectionCard image="list-2.svg" title="Light, Fast & Powerful" sub-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."></SectionCard>
    <SectionCard image="list-3.svg" title="Light, Fast & Powerful" sub-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."></SectionCard>
    <SectionCard image="list-4.svg" title="Light, Fast & Powerful" button="true" sub-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."></SectionCard>
  </main>
</template>