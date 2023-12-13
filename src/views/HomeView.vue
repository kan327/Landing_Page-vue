<script setup>
  import SpecialSectionCard from '../components/SpecialSectionCard.vue'
  import SectionCard from '../components/SectionCard.vue'
</script>

<template>
  <header class="h-[110vh] sm:min-h-[623px] max-h-[1270px] overflow-hidden 2xl:max-w-7xl sm:ml-16 lg:ml-32 2xl:mx-auto items-center flex justify-center md:justify-start relative z-20">
    <div class="w-[90%] sm:w-1/2 lg:w-[45%] max-w-3xl h-fit relative text-center md:text-left">
      <h1 class="font-semibold text-xl md:text-3xl lg:text-5xl text-b-09">Introduce Your Product Quickly & Effectively</h1>
      <p class="mt-5 mb-10 text-xs md:text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      <div class="gap-7 flex flex-col sm:flex-row justify-center md:justify-start">
        <button class="bg-b-11 min-w-[180px] py-1 text-white font-semibold rounded-sm">Purchase UI Kit</button>
        <button class="border-b-09 border-2 min-w-[180px] py-1 text-b-09 font-semibold rounded-sm">Learn More</button>
      </div>
    </div>
    <img class="absolute -z-10 min-w-[740px] filter-blur md:filter-none -right-[20%] 2xl:right-0 md:-top-5 lg:-top-16 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2 w-[80%]" :src="`/images/hero(fixed).svg`" alt="">
  </header>
  <img class="absolute min-w-[980px] filter-blur md:filter-none -z-10 -right-1/3 2xl:right-[41%] -top-5 lg:-top-1/3 2xl:top-[600px] 2xl:transform 2xl:-translate-y-1/2 2xl:translate-x-1/2" :src="`/images/path-round(fixed).svg`" alt="">
  <main class="overflow-hidden 2xl:max-w-7xl 2xl:mx-auto">
    <SpecialSectionCard />
    <SectionCard image="list-2.svg" title="Light, Fast & Powerful" sub-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." />
    <SectionCard image="list-3.svg" title="Light, Fast & Powerful" reverse="true" sub-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." />
    <SectionCard image="list-4.svg" title="Light, Fast & Powerful" button="true" sub-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br><br> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim." />
  </main>
  <footer class="relative mt-40 text-center pt-14 bg-[#f3f5ff]">
    <img class="absolute w-[100%] -top-24 -z-10" :src="`/images/rectangle.svg`" alt="">
    <div class="items-center w-[80%] md:w-1/2 mx-auto">
      <h2 class="font-semibold text-4xl text-b-09 mb-4">A Price To Suit Everyone</h2>
      <p class="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
    </div>
    <div class="mt-20 mb-14">
      <h1 class="font-semibold text-5xl text-b-09 ">$40</h1>
      <p class="text-b-37">Ui Design Kit</p>
    </div>
    <div>
      <p class="text-sm text-g-5d ">See, One price. Simple.</p>
      <button class="bg-b-11 min-w-[180px] mx-auto py-1 text-white font-medium rounded-sm mt-2 block">Purchase Now</button>
    </div>

    <div class="p-20 bg-w-e7 mt-32 text-left">
      <div class="flex flex-col sm:flex-row items-center justify-between pb-10 border-b-[#CDD1D4] border-b-2 border-b-solid">
        <div>
          <p class="text-2xl font-black text-b-37 block md:hidden text-center sm:text-start">Landing</p>
          <p>©2023 Yourcompany</p>
        </div>
        <p class="text-2xl font-black text-b-37 hidden md:block">Landing</p>
        <button class="bg-b-11 min-w-[180px] py-1 text-white font-medium rounded-sm mt-2">Purchase Now</button>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center sm:items-start justify-between mt-3">
        <div class="gap-10 flex">
          <RouterLink to="/" class="text-sm text-b-92">
            Home
          </RouterLink>
          <RouterLink to="/about" class="text-sm text-b-92">
            About
          </RouterLink>
          <RouterLink to="/conact" class="text-sm text-b-92">
            Contact
          </RouterLink>
        </div>

        <div class="gap-7 flex">
          <RouterLink :to="{ path: '/', target: '_blank' }" class="text-sm text-b-92">
            <img :src="`images/social/fb.svg`" alt="">
          </RouterLink>
          <RouterLink :to="{ path: '/', target: '_blank' }" class="text-sm text-b-92">
            <img :src="`images/social/in.svg`" alt="">
          </RouterLink>
          <RouterLink :to="{ path: '/', target: '_blank' }" class="text-sm text-b-92">
            <img :src="`images/social/x.svg`" alt="">
          </RouterLink>
          <RouterLink :to="{ path: '/', target: '_blank' }" class="text-sm text-b-92">
            <img :src="`images/social/yt.svg`" alt="">
          </RouterLink>
          <RouterLink :to="{ path: '/', target: '_blank' }" class="text-sm text-b-92">
            <img :src="`images/social/ig.svg`" alt="">
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
