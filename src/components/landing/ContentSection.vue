<template>
  <div class="tw-mt-44">
    <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center bg-accent sm:tw-h-64 lg:tw-h-80">
      <div data-aos="fade-down" class="">
        <q-img
          class="tw-w-96 lg:tw-w-120 -tw-mt-32 lg:-tw-mt-48 step"
          src="~assets/img/landing/hero.png"
        />
      </div>
      <div data-aos="fade-up" class="sm:tw-pt-5 tw-px-5 sm:tw-px-0 tw-pb-10 sm:tw-pb-0 lg:tw-pt-16 sm:tw-border-l-2 tw-border-white sm:tw-pl-12">
        <div class="tw-text-xl sm:tw-text-2xl xl:tw-text-4xl tw-font-extrabold tw-text-white">
          Personalized training <br>
          and content
        </div>
        <div class="tw-pt-4 xl:tw-pt-8 tw-text-white">
          Our content approach gives curisty and help set strengths, and interests in what <br class="tw-hidden lg:tw-block">
          you are learning, this helps us in highlighting your abilities rather than iluminating <br class="tw-hidden lg:tw-block">
          your disabilties. navigating through the learning phase is challanging we provide <br class="tw-hidden lg:tw-block">
          you the best support to grow with adaptive apraches
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ContentSection.vue",
  

  setup() {
    
  },
})
</script>

<style scoped>
.step:hover {
  transform: translateY(-5%);
}
.step {
  transition: all ease 600ms;
}
</style>