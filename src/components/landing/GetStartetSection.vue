<template>
  <div class="tw-mt-12 sm:tw-mt-24 row tw-justify-center">
    <div class="">
      <div class="tw-text-xl sm:tw-text-3xl tw-text-center tw-text-primaryColor tw-font-extrabold">
        Become a highly in demand talent
      </div>
      <div class="tw-text-center tw-pt-4">
        Supporting learners in obtaining mastery and proficiency <br> using a flexible learning approach <br class="tw-hidden sm:tw-block">
        that creates valuable <br class="sm:tw-hidden"> impacts which are modified to give proficiency to each <br class="sm:tw-hidden"> learner. <br class="tw-hidden sm:tw-block">
        We evaluate each learner’s knowledge level <br class="sm:tw-hidden"> with a point and reward <br class="tw-hidden sm:tw-block">
        system which brings fun <br class="sm:tw-hidden"> and curiosity while learning.
      </div>
      <div class="tw-flex tw-justify-center tw-mt-12">
        <div class="tw-bg-pinkBGColor hover:tw-border-2 hover:tw-border-pink-500 step tw-rounded-lg lg:tw-w-110 tw-w-85 tw-h-72 tw-mx-1 lg:tw-mx-3">
          <div class="tw-text-lg lg:tw-text-xl tw-p-5 tw-text-primaryColor tw-font-bold">
            Programming school
          </div>
          <div class="tw-px-5 tw-text-xs lg:tw-text-sm">
            The School of product teaches how to create the products of tomorrow. It’s an extensive, 
            immersive program that provides you with the skills necessary to be a great product manager, 
            designer or product designer. It will all courses of deferent type and show you what makes a 
            good product, what are some examples of good products and why they are good, and how you can 
            become a successful product person through an extensive learning process.
          </div>
          <div class="tw-mt-2 tw-mx-1">
            <q-btn flat unelevated no-caps class="tw-font-semibold viewButton" color="accent" label="View all courses" @click="onClick">
              <svg class="tw-ml-2" width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.801977 7.12495H23.6198L18.3701 1.87522L19.6075 0.637806L26.9697 8L19.6075 15.3622L18.3701 14.1248L23.62 8.87495H0.801977V7.12495Z" fill="#1E136B"/>
              </svg>
            </q-btn>
          </div>
        </div>
        <div class="tw-bg-pinkBGColor hover:tw-border-2 hover:tw-border-pink-500 step tw-rounded-lg lg:tw-w-110 tw-w-85 tw-h-72 tw-mx-1 lg:tw-mx-3">
          <div class="tw-text-lg lg:tw-text-xl tw-p-5 tw-text-primaryColor tw-font-bold">
            Design school
          </div>
          <div class="tw-px-5 tw-text-xs lg:tw-text-sm">
            The design school is set to provides an opportunity for students to learn about design and 
            the different facets of it. Our students are able to learn about the different design skills 
            and how they can be applied to other fields such as architecture or engineering.our Design schools 
            offer courses like graphic design, UI/UX design. The curriculum includes  typography, color theory, 
            digital media and more. 
          </div>
          <div class="tw-mt-6 tw-mx-3">
            <q-btn flat unelevated no-caps class="tw-font-semibold viewButton tw-bg-comingsoonColor" color="accent" label="Coming soon" @click="onClick" />
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-center tw-mt-5">
        <div class="tw-bg-pinkBGColor hover:tw-border-2 hover:tw-border-pink-500 step tw-rounded-lg lg:tw-w-110 tw-w-85 tw-h-72 tw-mx-1 lg:tw-mx-3">
          <div class="tw-text-lg lg:tw-text-xl tw-p-5 tw-text-primaryColor tw-font-bold">
            Product school
          </div>
          <div class="tw-px-5 tw-text-xs lg:tw-text-sm">
            The School of product teaches how to create the products of tomorrow. It’s an extensive, 
            immersive program that provides you with the skills necessary to be a great product manager, 
            designer or product designer. It will all courses of deferent type and show you what makes a 
            good product, what are some examples of good products and why they are good, and how you can 
            become a successful product person through an extensive learning process .
          </div>
          <div class="tw-mt-2 tw-mx-1">
            <q-btn flat unelevated no-caps class="tw-font-semibold viewButton" color="accent" label="View all courses" @click="onClick">
              <svg class="tw-ml-2" width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.801977 7.12495H23.6198L18.3701 1.87522L19.6075 0.637806L26.9697 8L19.6075 15.3622L18.3701 14.1248L23.62 8.87495H0.801977V7.12495Z" fill="#1E136B"/>
              </svg>
            </q-btn>
          </div>
        </div>
        <div class="tw-bg-pinkBGColor hover:tw-border-2 hover:tw-border-pink-500 step tw-rounded-lg lg:tw-w-110 tw-w-85 tw-h-72 tw-mx-1 lg:tw-mx-3">
          <div class="tw-text-lg lg:tw-text-xl tw-p-5 tw-text-primaryColor tw-font-bold">
            Business school
          </div>
          <div class="tw-px-5 tw-text-xs lg:tw-text-sm">
            The Business school offers a wide range of business & administration. These school is set 
            with quality business courses that have evolved to adapt to the changing needs of the business 
            world. Our goal is to prepare our students for careers in the business world.This school will 
            help anyone that is intrested in uplifting business in deferent aspect, interests, goals, and 
            personal preferences with our rebust coriculum.
          </div>
          <div class="tw-mt-6 tw-mx-3">
            <q-btn flat unelevated no-caps class="tw-font-semibold viewButton tw-bg-comingsoonColor" color="accent" label="Coming soon" @click="onClick" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "GetStartedSection",

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
.viewButton:hover {
  transform: translateX(10%);
}
.viewButton {
  transition: all ease 600ms;
}
</style>