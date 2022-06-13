<template>
  <div class="tw-mt-44">
    <div class="tw-flex tw-justify-center bg-accent tw-h-80">
      <div class="step">
        <q-img
          class="tw-w-120 -tw-mt-48"
          src="~assets/img/landing/hero.png"
        />
      </div>
      <div class="tw-pt-16  tw-border-l-2 tw-border-white tw-pl-12">
        <div class="tw-text-4xl tw-font-extrabold tw-text-white">
          Personalized training <br>
          and content
        </div>
        <div class="tw-pt-8 tw-text-white">
          Our content approach gives curisty and help set strengths, and interests in what <br>
          you are learning, this helps us in highlighting your abilities rather than iluminating <br>
          your disabilties. navigating through the learning phase is challanging we provide <br>
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