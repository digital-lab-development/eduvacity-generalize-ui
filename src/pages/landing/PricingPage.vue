<template>
  <div class="row tw-justify-center tw-bg-partner-section tw-h-screen">
    <div class="col-8">
      <div class="tw-ml-4 tw-pt-20">
        <div class="tw-text-2xl tw-font-extrabold">
          Flexible payment, <br>
          Price can't stop you from learning.
        </div>
      </div>
      <div class="tw-flex tw-justify-start tw-mt-14">
        <div class="tw-w-64 tw-h-56 tw-border-2 tw-bg-white tw-border-gray-400 tw-px-4 tw-mx-4 step hover:tw-border-pink-500">
          <div class="tw-pt-6 tw-font-semibold">
            One time payment
          </div>
          <div class="text-accent tw-text-xl tw-font-semibold tw-pt-5">
            $200
          </div>
          <div class="tw-text-xs tw-pt-4 tw-text-gray-600">
            This payment is not renewed. Payment can be made with credit card or bank transfer.
          </div>
        </div>
        <div class="tw-w-64 tw-h-56 tw-border-2 tw-bg-white tw-border-gray-400 tw-px-4 tw-mx-4 step hover:tw-border-pink-500">
          <div class="tw-pt-6 tw-font-semibold">
            Monthly payment
          </div>
          <div class="text-accent tw-text-xl tw-font-semibold tw-pt-5">
            $17
          </div>
          <div class="tw-text-xs tw-pt-4 tw-text-gray-600">
            This type of payment is paid on a monthly basis and will be renewed each month.
            Payment can be made with credit card or bank transfer.
          </div>
        </div>
        <div class="tw-w-64 tw-h-56 tw-border-2 tw-bg-white tw-border-gray-400 tw-px-4 tw-mx-4 step hover:tw-border-pink-500">
          <div class="tw-pt-6 tw-font-semibold">
            Per term payment
          </div>
          <div class="text-accent tw-text-xl tw-font-semibold tw-pt-5">
            $67
          </div>
          <div class="tw-text-xs tw-pt-4 tw-text-gray-600">
            per-time payment is also renewed every 6-month. Payment can be made with credit card or bank transfer.
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-start tw-mt-10">
        <div class="tw-w-64 tw-h-56 tw-border-2 tw-bg-white tw-border-gray-400 tw-px-4 tw-mx-4 step hover:tw-border-pink-500">
          <div class="tw-pt-6 tw-font-semibold">
            Weekly payment
          </div>
          <div class="text-accent tw-text-xl tw-font-semibold tw-pt-5">
            $4
          </div>
          <div class="tw-text-xs tw-pt-4 tw-text-gray-600">
            This payment plan is renewd in a weekly basis and you will pay same price each work through out your leaning phases till you finished
          </div>
        </div>
        <div class="tw-w-64 tw-h-56 tw-border-2 tw-bg-white tw-border-gray-400 tw-px-4 tw-mx-4 step hover:tw-border-pink-500">
          <div class="tw-pt-6 tw-font-semibold">
            Daily payment
          </div>
          <div class="text-accent tw-text-xl tw-font-semibold tw-pt-5">
            $0.6
          </div>
          <div class="tw-text-xs tw-pt-4 tw-text-gray-600">
            The daily plan is a life changing plan if you cant pay for any above you can secure you learning with the daily plan and it will be paid each day till you.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "PricingPage",

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