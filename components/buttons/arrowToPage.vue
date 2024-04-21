<template>
  <div class="absolute p-2">
    <div class="bg-purple-100 shadow-lg rounded-full w-8 h-8 flex justify-center items-center">
      <NuxtLink :to="to">
        <span class="material-symbols-outlined text-gray-400" v-if="(placeholder==='back')">
          arrow_back
        </span>
        <span class="material-symbols-outlined" v-else>
          arrow_forward
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrowToPage',
  data() {
    return {
      prueba: 20
    }
  },
  props: {
    to: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>