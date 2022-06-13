<template>
  <div class="tw-bg-jumbotron-section tw-h-screen">
    <talents-section></talents-section>
  </div>
  <learning-section></learning-section>
  <engage-guide-section></engage-guide-section>
  <get-started-section></get-started-section>
  <content-section></content-section>
  <analytics-section></analytics-section>
</template>

<script>
import { defineComponent } from 'vue'
import TalentsSection from 'components/landing/TalentsSection.vue'
import LearningSection from 'components/landing/LearningSection.vue'
import EngageGuideSection from 'components/landing/EngageGuideSection.vue'
import GetStartedSection from 'components/landing/GetStartetSection.vue'
import ContentSection from 'components/landing/ContentSection.vue'
import AnalyticsSection from 'components/landing/AnalyticsSection.vue'

export default defineComponent({
  name: "LandingPage",
  components: {
    TalentsSection,
    LearningSection,
    EngageGuideSection,
    GetStartedSection,
    ContentSection,
    AnalyticsSection
  },
  setup() {
    
  },
})
</script>