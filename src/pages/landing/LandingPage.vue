<template>
  <div class="tw-bg-jumbotron-section tw-h-screen">
    <talents-section></talents-section>
  </div>
  <div class="tw-bg-learning-section tw-h-2/3">
    <learning-section></learning-section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TalentsSection from 'components/landing/TalentsSection.vue'
import LearningSection from 'components/landing/LearningSection.vue'

export default defineComponent({
  name: "LandingPage",
  components: {
    TalentsSection,
    LearningSection
  },
  setup() {
    
  },
})
</script>