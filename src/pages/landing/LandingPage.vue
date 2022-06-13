<template>
  <div class="tw-bg-jumbotron-section tw-h-screen">
    <talents-section></talents-section>
  </div>
  <learning-section></learning-section>
  <engage-guide-section></engage-guide-section>
</template>

<script>
import { defineComponent } from 'vue'
import TalentsSection from 'components/landing/TalentsSection.vue'
import LearningSection from 'components/landing/LearningSection.vue'
import EngageGuideSection from 'components/landing/EngageGuideSection.vue'

export default defineComponent({
  name: "LandingPage",
  components: {
    TalentsSection,
    LearningSection,
    EngageGuideSection
  },
  setup() {
    
  },
})
</script>