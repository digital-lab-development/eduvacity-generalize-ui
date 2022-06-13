<template>
  <div class="tw-bg-jumbotron-section tw-h-screen">
    <talents-section></talents-section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TalentsSection from 'components/landing/TalentsSection.vue'

export default defineComponent({
  name: "LandingPage",
  components: {
    TalentsSection
  },
  setup() {
    
  },
})
</script>