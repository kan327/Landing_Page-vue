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

  let menuDropDown = ref(true);

  const toggleMenu = () => {
    menuDropDown.value = !menuDropDown.value;
  };
</script>

<template>
  <!-- <nav class="flex justify-between  items-center py-5 px-32 backdrop-blur-md fixed w-full top-0 z-50"> -->
  <nav id="nav" class="py-5 fixed w-full top-0 z-50">
    <div class="2xl:max-w-7xl 2xl:mx-auto mx-5 sm:mx-16 lg:mx-32 flex justify-between items-center">
      <div class="gap-14 hidden sm:flex ">
        <RouterLink to="/" class="text-sm text-b-50">
          Home
        </RouterLink>
        <RouterLink to="/about" class="text-sm text-b-50">
          About
        </RouterLink>
        <RouterLink to="/contact" class="text-sm text-b-50">
          Contact
        </RouterLink>
      </div>
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-4xl cursor-pointer select-none" @click="toggleMenu" v-if="menuDropDown">
          menu
        </span>
        <span class="material-symbols-outlined text-4xl cursor-pointer select-none" @click="toggleMenu" v-if="!menuDropDown">
          close
        </span>
        <p class="text-2xl font-black text-b-37">Landing</p>
      </div>
      <button class="bg-b-11 min-w-[180px] px-9 py-1 text-white font-semibold rounded-sm">Buy Now</button>
      <!-- <button class="bg-b-11 px-16 py-2 text-white font-semibold rounded-sm">Buy Now</button> -->
    </div>
    <div v-if="menuDropDown" class="nav_item">
        <RouterLink to="/" class="bg_blur w-full block py-3 px-6 text-sm text-b-50 border-b-2 border-solid border-b-09">
          Home
        </RouterLink>
        <RouterLink to="/about" class="bg_blur w-full block py-3 px-6 text-sm text-b-50 border-b-2 border-solid border-b-09">
          About
        </RouterLink>
        <RouterLink to="/contact" class="bg_blur w-full block py-3 px-6 text-sm text-b-50 border-b-2 border-solid border-b-09">
          Contact
        </RouterLink>
      </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.bg_blur {
  @apply backdrop-blur-md
}
.nav_item .bg_blur:nth-child(1) {
  @apply backdrop-blur-xl
}
.bg_blur {
  @apply backdrop-blur-2xl
}
.bg_blur {
  @apply backdrop-blur-3xl
}
</style>