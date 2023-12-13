<script setup>
import { toRefs } from 'vue'
// import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})
const { image, title, subTitle } = toRefs(props)
</script>

<template>
  <section class="px-32 py-32 flex items-center gap-5">
    <div class="w-1/2">
      <img class="" :src="`/images/`+image" alt="">
    </div>
    <div class="w-1/2">
      <h2 class="font-semibold text-4xl text-b-09">{{ title }}</h2>
      <p class="mt-4" v-html="subTitle"></p>
    </div>
  </section>
</template>
