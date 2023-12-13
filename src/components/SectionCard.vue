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
  <section :class="`mx-32 2xl:mx-0 py-36 flex justify-between ${reverse ? 'md:flex-row-reverse flex-col-reverse' : 'md:flex-row flex-col-reverse'} items-center gap-5`">
    <div>
      <img class="" :src="`/images/`+image" alt="">
      <button v-if="button" class="bg-b-11 min-w-[180px] py-1 text-white font-medium rounded-sm mt-10 block md:hidden">Purchase Now</button>
    </div>
    <div class="w-1/3">
      <h2 class="font-semibold text-4xl text-b-09">{{ title }}</h2>
      <p class="mt-4" v-html="subTitle"></p>
      <button v-if="button" class="bg-b-11 min-w-[180px] py-1 text-white font-medium rounded-sm mt-10 hidden md:block">Purchase Now</button>
    </div>
  </section>
</template>
