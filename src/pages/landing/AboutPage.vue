<template>
  <div class="tw-mt-10">
    <div class="tw-flex">
      <div class="tw-bg-about-section-first tw-w-1/2 tw-h-100 tw-pl-14">
        <div class="tw-text-white tw-text-4xl tw-font-extrabold tw-pt-36">
          Who we are
        </div>
        <div class="tw-mr-24 tw-text-white tw-text-sm tw-pt-3">
          We are a result-oriented team set to provide a more innovative environment 
          with technical and digital skills across the globe, Our curriculum uses an 
          agile learning approach perfect for beginners and experienced individuals.
        </div>
      </div>
      <div class="tw-bg-about-section-second tw-w-1/2 tw-h-100 tw-pl-14">
        <div class="tw-text-white tw-text-4xl tw-font-extrabold tw-pt-36">
          What we do
        </div>
        <div class="tw-mr-24 tw-text-white tw-text-sm tw-pt-3">
          We provide industry relevent careers for the future of work looking at the 
          world today there is more need in celebrate an enthusiastic that thrived by
          adapting workforce skills and ways of working to the demands of the new economy 
          people will no longer blame poor
        </div>
      </div>
    </div>
    <div class="tw-mt-10">
      <div class="tw-text-lg tw-text-center tw-font-semibold">
        Watch our explainer video
      </div>
      <div class="tw-flex tw-justify-center tw-mt-5">
        <q-video
          class="tw-w-2/3 tw-h-100"
          src="https://www.youtube.com/embed/saqIOkDsibM"
        />
      </div>
    </div>
    <div class="tw-bg-palePinkColor tw-mt-16 tw-pb-16">
      <div class="tw-pt-9">
        <div class="tw-text-center tw-text-2xl tw-font-semibold">
          Why choose us
        </div>
        <div class="tw-flex tw-justify-center tw-mt-10">
          <div class="tw-border-r-2 tw-border-gray-300 tw-pr-8">
            <div class="tw-w-96">
              <div class="tw-flex">
                <div class="tw-text-lg tw-font-semibold">
                  01
                </div>
                <div class="tw-ml-3">
                  <div class="tw-text-base tw-font-semibold tw-pt-0.5">
                    Structure learning
                  </div>
                  <div class="tw-mt-4 tw-text-xs tw-h-16">
                    we provide efficient learning focusing on giving out information 
                    which lends to offers students the opportunity to be more fully 
                    engaged and explore career interests within a short period of time.
                  </div>
                </div>
              </div>
            </div>
            <div class="tw-w-96 tw-mt-10">
              <div class="tw-flex">
                <div class="tw-text-lg tw-font-semibold">
                  03
                </div>
                <div class="tw-ml-3">
                  <div class="tw-text-base tw-font-semibold tw-pt-0.5">
                    Evaluating learning approach
                  </div>
                  <div class="tw-mt-4 tw-text-xs tw-h-16">
                    Present knowledge of content and pedagogical knowledge to develop 
                    working relationships with students to maximize student learning.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tw-pl-8">
            <div class="tw-w-96">
              <div class="tw-flex">
                <div class="tw-text-lg tw-font-semibold">
                  02
                </div>
                <div class="tw-ml-3">
                  <div class="tw-text-base tw-font-semibold tw-pt-0.5">
                    Expert instructors
                  </div>
                  <div class="tw-mt-4 tw-text-xs tw-h-16">
                    Our expert instructors are professionals in their fields, having 
                    the capacity to plan, initiate, lead and develop best practice 
                    modules for our students
                  </div>
                </div>
              </div>
            </div>
            <div class="tw-w-96 tw-mt-10">
              <div class="tw-flex">
                <div class="tw-text-lg tw-font-semibold">
                  04
                </div>
                <div class="tw-ml-3">
                  <div class="tw-text-base tw-font-semibold tw-pt-0.5">
                    Certificate
                  </div>
                  <div class="tw-mt-4 tw-text-xs tw-h-16">
                    Our certificate are from renowned higher institution as a way to 
                    boost your credentials and make you stand out in the job market.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-mt-16 tw-flex tw-justify-center">
      <q-img
        class="tw-w-5/6"
        src="~assets/img/landing/big-hero.png"
      />
    </div>
    <div class="tw-flex tw-mx-32 tw-bg-join-section tw-justify-center tw-mb-24 tw-bg-no-repeat">
      <div class="tw-pt-28 tw-bg-join-section tw-h-96">
        <div class="tw-bg-joinBGColor tw-pl-10 tw-border-2 tw-border-white tw-h-80 tw-w-120">
          <div class="tw-pt-14 tw-text-lg text-accent tw-font-semibold">
            Join Eduvacity
          </div>
          <div class="tw-w-80 tw-text-xs tw-pt-3 text-accent">
            Come to eduvacity to do the best work, with the best teams and truly be at your best
          </div>
          <div class="tw-mt-4">
            <q-btn flat class="-tw-ml-4 tw-font-semibold viewButton" color="accent" label="See Careers" no-caps unelevated>
              <svg class="tw-ml-2 tw-mt-0.5" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8076 0.734619L16.7405 5.49833L11.8067 10.2612" stroke="#1E136B" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.704099 5.5H16.7412" stroke="#1E136B" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="tw-mt-28">
        <q-img
          class="tw-w-120 tw-h-80"
          src="~assets/img/landing/chineke.png"
        />
      </div>
    </div>
    <footer-section />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FooterSection from 'components/landing/FooterSection.vue'

export default defineComponent({
  name: "AboutPage",

  components: {
    FooterSection
  },

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
