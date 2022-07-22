<template>
  <div class="body">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style scoped>
.body {
  font-family: poppins;
}
</style>
