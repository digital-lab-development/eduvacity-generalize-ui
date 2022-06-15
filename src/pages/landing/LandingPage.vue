<template>
  <div class="body">
    <div class="tw-bg-small-jumbotron-section tw-bg-no-repeat lg:tw-bg-jumbotron-section tw-h-120 xl:tw-h-screen">
      <talents-section></talents-section>
    </div>
    <learning-section></learning-section>
    <engage-guide-section></engage-guide-section>
    <get-started-section></get-started-section>
    <content-section></content-section>
    <analytics-section></analytics-section>
    <div class="tw-bg-students-section tw-h-full">
      <students-section></students-section>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TalentsSection from 'components/landing/TalentsSection.vue'
import LearningSection from 'components/landing/LearningSection.vue'
import EngageGuideSection from 'components/landing/EngageGuideSection.vue'
import GetStartedSection from 'components/landing/GetStartetSection.vue'
import ContentSection from 'components/landing/ContentSection.vue'
import AnalyticsSection from 'components/landing/AnalyticsSection.vue'
import StudentsSection from 'components/landing/StudentsSection.vue'
import FooterSection from 'components/landing/FooterSection.vue'

export default defineComponent({
  name: "LandingPage",
  components: {
    TalentsSection,
    LearningSection,
    EngageGuideSection,
    GetStartedSection,
    ContentSection,
    AnalyticsSection,
    StudentsSection,
    FooterSection
  },
  setup() {
    
  },
})
</script>

<style scoped>
.body {
  scroll-behavior: smooth;
}
</style>