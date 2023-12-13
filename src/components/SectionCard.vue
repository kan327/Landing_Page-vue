<script setup>
import { toRefs } from 'vue'
// import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String,
    button: Boolean,
    reverse: Boolean,
})
const { image, title, subTitle } = toRefs(props)
</script>

<template>
  <section :class="`mx-3 sm:mx-16 lg:mx-32 2xl:mx-0 py-24 sm:py-36 flex justify-between ${reverse ? 'lg:flex-row-reverse flex-col-reverse' : 'lg:flex-row flex-col-reverse'} items-center gap-5`">
    <div>
      <img class="max-w-2xl" :src="`/images/`+image" alt="">
      <button v-if="button" class="bg-b-11 mx-auto lg:mx-0 min-w-[180px] py-1 text-white font-medium rounded-sm mt-10 block lg:hidden">Purchase Now</button>
    </div>
    <div class="text-center lg:text-start lg:w-1/3">
      <h2 class="font-semibold text-4xl text-b-09">{{ title }}</h2>
      <p class="mt-4 text-sm sm:text-base" v-html="subTitle"></p>
      <button v-if="button" class="bg-b-11 min-w-[180px] py-1 text-white font-medium rounded-sm mt-10 hidden lg:block">Purchase Now</button>
    </div>
  </section>
</template>
