<template>
  <div class="tw-mt-32">
    <div class="tw-flex tw-justify-center sm:tw-mx-44">
      <div data-aos="fade-right" class="lg:tw-mr-44">
        <div class="tw-flex tw-justify-center sm:tw-justify-start">
          <div class="tw-bg-primaryColor tw-rounded-md tw-text-center tw-mx-2 tw-text-white tw-cursor-pointer hover:tw-w-36 hover:tw-h-36 tw-w-28 tw-h-28 sm:tw-w-32 sm:tw-h-32">
            <div class="tw-pt-9 tw-text-base">
              Students
            </div>
            <div class="tw-text-2xl tw-font-bold">
              1M+
            </div>
          </div>
          <div class="tw-bg-primaryColor tw-rounded-md tw-text-center tw-mx-2 tw-text-white tw-cursor-pointer hover:tw-w-36 hover:tw-h-36 tw-w-28 tw-h-28 sm:tw-w-32 sm:tw-h-32">
            <div class="tw-pt-9 tw-text-base">
              Countries
            </div>
            <div class="tw-text-2xl tw-font-bold">
              12
            </div>
          </div>
          <div class="tw-bg-primaryColor tw-rounded-md tw-text-center tw-mx-2 tw-text-white tw-cursor-pointer hover:tw-w-36 hover:tw-h-36 tw-w-28 tw-h-28 sm:tw-w-32 sm:tw-h-32">
            <div class="tw-pt-9 tw-text-base">
              Communities
            </div>
            <div class="tw-text-2xl tw-font-bold">
              300
            </div>
          </div>
        </div>
        <div class="tw-flex tw-justify-center sm:tw-justify-start tw-mt-4">
          <div class="tw-bg-primaryColor tw-rounded-md tw-text-center tw-mx-2 tw-text-white tw-cursor-pointer hover:tw-w-36 hover:tw-h-36 tw-w-28 tw-h-28 sm:tw-w-32 sm:tw-h-32">
            <div class="tw-pt-9 tw-text-base">
              Languages
            </div>
            <div class="tw-text-2xl tw-font-bold">
              3
            </div>
          </div>
          <div class="tw-bg-primaryColor tw-rounded-md tw-text-center tw-mx-2 tw-text-white tw-cursor-pointer hover:tw-w-36 hover:tw-h-36 tw-w-28 tw-h-28 sm:tw-w-32 sm:tw-h-32">
            <div class="tw-pt-9 tw-text-base">
              Partnerships
            </div>
            <div class="tw-text-2xl tw-font-bold">
              2
            </div>
          </div>
          <div class="sm:tw-hidden">
            <q-img
              class="tw-w-28 tw-ml-4 hover:tw-w-40 tw-cursor-pointer"
              src="~assets/img/landing/logo2.png"
            />
          </div>
        </div>
        <div class="tw-pt-6 tw-px-4 sm:tw-pl-2">
          Resonating proficiency is what we are out for, we provide learners with <br class="tw-hidden sm:tw-block">
          mastery at their comfort zone. Anytime anywhere.
        </div>
        <div class="tw-my-8 tw-mx-4 sm:tw-ml-2">
          <q-btn color="accent" label="Get started" no-caps unelevated class="tw-w-44 tw-h-14" @click="onClick" />
        </div>
      </div>
      <div data-aos="fade-left" class="tw-mt-20 tw-hidden sm:tw-block tw-ml-36">
        <q-img
          class="tw-w-36 hover:tw-w-40 tw-cursor-pointer"
          src="~assets/img/landing/logo2.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AnalyticsSection",

  setup() {
    
  },
})
</script>
