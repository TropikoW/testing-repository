<template>
  <div class="flex justify-end">
    <div class="bg-blue-400 rounded pl-2 pr-2 inline-block ">
      <NuxtLink  ink :to="to" class="text-white font-bold">{{ placeHolder }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToPage',
  data() {
    return {

    }
  },
  props: {
    to: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      required: true
    }
  }  
}
</script>