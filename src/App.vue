<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  const handleScroll = () => {
    let viewport = window.scrollY;
    if (viewport >= 25) nav.classList.add('bg_blur');
    else nav.classList.remove('bg_blur');
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <!-- <nav class="flex justify-between  items-center py-5 px-32 backdrop-blur-md fixed w-full top-0 z-50"> -->
  <nav id="nav" class="py-5 fixed w-full top-0 z-50">
    <div class="2xl:max-w-7xl 2xl:mx-auto mx-32 flex justify-between items-center">
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
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.bg_blur {
  @apply backdrop-blur-md
}
</style>