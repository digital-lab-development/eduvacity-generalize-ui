<template>
  <div class="row tw-justify-center tw-bg-partner-section">
    <div class="col-sm-11 col-lg-8">
      <div class="tw-text-center tw-pt-20">
        <div class="tw-text-2xl tw-font-extrabold">
          Flexible payment, <br>
          Price can't stop you from learning.
        </div>
      </div>
      <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center tw-mt-14">
        <div :class="selected == 'onetime' ? 'tw-bg-primaryColor tw-border tw-border-pink-500 tw-text-white' : 'tw-bg-white tw-border-gray-400' " class="tw-w-64 tw-h-56 tw-border-2 tw-px-4 tw-mx-1 lg:tw-mx-4 step hover:tw-border-pink-500 tw-mt-3 sm:tw-mt-0" @click="oneTimeDiv">
          <div class="tw-pt-6 tw-font-semibold">
            One time payment
          </div>
          <div :class="selected == 'onetime' ? 'tw-text-white' : 'text-accent' " class="tw-text-xl tw-font-semibold tw-pt-5">
            $200
          </div>
          <div :class="selected == 'onetime' ? 'tw-text-white' : 'tw-text-gray-600' " class="tw-text-xs tw-pt-4">
            This payment is not renewed. Payment can be made with credit card or bank transfer.
          </div>
        </div>
        <div :class="selected == 'monthly' ? 'tw-bg-primaryColor tw-border tw-border-pink-500 tw-text-white' : 'tw-bg-white tw-border-gray-400' " class="tw-w-64 tw-h-56 tw-border-2 tw-px-4 tw-mx-1 lg:tw-mx-4 step hover:tw-border-pink-500 tw-mt-3 sm:tw-mt-0" @click="monthlyDiv">
          <div class="tw-pt-6 tw-font-semibold">
            Monthly payment
          </div>
          <div :class="selected == 'monthly' ? 'tw-text-white' : 'text-accent' " class="tw-text-xl tw-font-semibold tw-pt-5">
            $17
          </div>
          <div :class="selected == 'monthly' ? 'tw-text-white' : 'tw-text-gray-600' " class="tw-text-xs tw-pt-4">
            This type of payment is paid on a monthly basis and will be renewed each month.
            Payment can be made with credit card or bank transfer.
          </div>
        </div>
        <div :class="selected == 'perterm' ? 'tw-bg-primaryColor tw-border tw-border-pink-500 tw-text-white' : 'tw-bg-white tw-border-gray-400' " class="tw-w-64 tw-h-56 tw-border-2 tw-px-4 tw-mx-1 lg:tw-mx-4 step hover:tw-border-pink-500 tw-mt-3 sm:tw-mt-0" @click="pertermDiv">
          <div class="tw-pt-6 tw-font-semibold">
            Per term payment
          </div>
          <div :class="selected == 'perterm' ? 'tw-text-white' : 'text-accent' " class="tw-text-xl tw-font-semibold tw-pt-5">
            $67
          </div>
          <div :class="selected == 'perterm' ? 'tw-text-white' : 'tw-text-gray-600' " class="tw-text-xs tw-pt-4">
            per-time payment is also renewed every 6-month. Payment can be made with credit card or bank transfer.
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center sm:tw-mt-4 lg:tw-mt-10">
        <div :class="selected == 'weekly' ? 'tw-bg-primaryColor tw-border tw-border-pink-500 tw-text-white' : 'tw-bg-white tw-border-gray-400' " class="tw-w-64 tw-h-56 tw-border-2 tw-px-4 tw-mx-1 lg:tw-mx-4 step hover:tw-border-pink-500 tw-mt-3 sm:tw-mt-0" @click="weeklyDiv">
          <div class="tw-pt-6 tw-font-semibold">
            Weekly payment
          </div>
          <div :class="selected == 'weekly' ? 'tw-text-white' : 'text-accent' " class="tw-text-xl tw-font-semibold tw-pt-5">
            $4
          </div>
          <div :class="selected == 'weekly' ? 'tw-text-white' : 'tw-text-gray-600' " class="tw-text-xs tw-pt-4">
            This payment plan is renewed in a weekly basis and you will pay same price each work through out your leaning phases till you finished
          </div>
        </div>
        <div :class="selected == 'daily' ? 'tw-bg-primaryColor tw-border tw-border-pink-500 tw-text-white' : 'tw-bg-white tw-border-gray-400' " class="tw-w-64 tw-h-56 tw-border-2 tw-px-4 tw-mx-1 lg:tw-mx-4 step hover:tw-border-pink-500 tw-mt-3 sm:tw-mt-0" @click="dailyDiv">
          <div class="tw-pt-6 tw-font-semibold">
            Daily payment
          </div>
          <div :class="selected == 'daily' ? 'tw-text-white' : 'text-accent' " class="tw-text-xl tw-font-semibold tw-pt-5">
            $0.6
          </div>
          <div :class="selected == 'daily' ? 'tw-text-white' : 'tw-text-gray-600' " class="tw-text-xs tw-pt-4">
            The daily plan is a life changing plan if you cant pay for any above you can secure you learning with the daily plan and it will be paid each day till you finished.
          </div>
        </div>
        <div class="tw-w-64 tw-h-56 tw-px-4 tw-mx-1 lg:tw-mx-4 tw-hidden sm:tw-block"></div>
      </div>
    </div>
  </div>
  <footer-section />
</template>

<script>
import { defineComponent, ref } from 'vue'
import FooterSection from 'components/landing/FooterSection.vue'

export default defineComponent({
  name: "PricingPage",
  components: {
    FooterSection
  },

  setup() {
    const selected = ref('')
    const onetime = ref(false)

    const oneTimeDiv = () => {
      selected.value = 'onetime'
    }

    const monthlyDiv = () => {
      selected.value = 'monthly'
    }

    const pertermDiv = () => {
      selected.value = 'perterm'
    }

    const weeklyDiv = () => {
      selected.value = 'weekly'
    }

    const dailyDiv = () => {
      selected.value = 'daily'
    }
    
    return {
      selected,
      onetime,
      oneTimeDiv,
      monthlyDiv,
      pertermDiv,
      weeklyDiv,
      dailyDiv
    }
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
