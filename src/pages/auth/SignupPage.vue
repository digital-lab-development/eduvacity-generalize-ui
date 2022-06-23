<template>
  <div class="tw-bg-login-small-section sm:tw-bg-partner-section">
    <div class="tw-text-center tw-pt-20 sm:tw-pt-32">
      <div class="tw-text-2xl tw-font-extrabold">
        Application process
      </div>
      <div class="tw-pt-3 tw-px-4 sm:tw-px-0">
        Welcome to eduvacity application process, kindly fill the information below. <br class="tw-hidden sm:tw-block">
        We wish you all the best in your career journey. Cheers in advance!
      </div>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-10">
      <div class="tw-mx-4 sm:tw-mx-0 sm:tw-w-140 tw-bg-white tw-border tw-mb-44 tw-rounded-md">
        <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center tw-mt-10 sm:tw-mt-20">
          <div class="sm:tw-mr-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-input v-model="text" type="text" class="tw-bg-white" dense label="First name" color="accent" outlined />
          </div>
          <div class="sm:tw-ml-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-input v-model="text" type="text" class="tw-bg-white" dense label="Last name" color="accent" outlined />
          </div>
        </div>
        <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center sm:tw-mt-10">
          <div class="sm:tw-mr-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-input v-model="text" type="text" class="tw-bg-white" dense label="Email" color="accent" outlined />
          </div>
          <div class="sm:tw-ml-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-input v-model="text" type="text" class="tw-bg-white" dense label="Phone" color="accent" outlined />
          </div>
        </div>
        <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center sm:tw-mt-10">
          <div class="sm:tw-mr-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-input v-model="text" type="text" class="tw-bg-white" dense label="Country" color="accent" outlined />
          </div>
          <div class="sm:tw-ml-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-input v-model="text" type="text" class="tw-bg-white" dense label="City" color="accent" outlined />
          </div>
        </div>
        <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center sm:tw-mt-10">
          <div class="sm:tw-mr-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-select v-model="model" class="" :options="options" label="Level of education" color="accent" dense outlined />
          </div>
          <div class="sm:tw-ml-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-input v-model="text" type="text" class="tw-bg-white" dense label="City" color="accent" outlined />
          </div>
        </div>
        <div class="tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-justify-center sm:tw-mt-10">
          <div class="sm:tw-mr-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-select v-model="model" class="" :options="options2" label="Track" color="accent" dense outlined />
          </div>
          <div class="sm:tw-ml-2 tw-w-80 tw-mt-4 sm:tw-mt-0 sm:tw-w-72">
            <q-select v-model="model" class="" :options="options3" label="Payment plan" color="accent" dense outlined />
          </div>
        </div>
        <q-card-actions align="center" class="tw-my-12">
          <q-btn unelevated no-caps class="tw-w-44 tw-h-12" color="accent" label="Proceed application" />
        </q-card-actions>
      </div>
    </div>
  </div>
  <footer-section />
</template>

<script>
import { defineComponent, ref } from 'vue'
import FooterSection from 'components/landing/FooterSection.vue'

export default defineComponent({
  name: "SignupPage",

  components: {
    FooterSection
  },

  setup() {
    const options = ref(['non educated', 'O level', 'A level'])
    const options2 = ref(['Web design', 'Andriod development', 'UI/UX design'])
    const options3 = ref(['One time', 'Monthly', 'Per term', 'Weekly', 'Daily'])

    return {
      options,
      options2,
      options3
    }
  },
})
</script>
