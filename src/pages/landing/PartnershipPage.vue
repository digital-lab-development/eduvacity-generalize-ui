<template>
  <div class="sm:tw-mt-8">
    <div class="tw-bg-partnership-mobile-sectiom sm:tw-bg-partnership-small-sectiom tw-bg-no-repeat xl:tw-bg-partnership-sectiom tw-h-96">
      <div class="tw-text-3xl tw-pt-24 sm:tw-text-5xl xl:tw-text-6xl tw-text-white tw-font-extrabold tw-text-center sm:tw-pt-28 lg:tw-pt-32">
        Partner with us
      </div>
      <div class="tw-text-white tw-text-center tw-pt-3">
        We are open to Scholarship opportunity for students, Collaboration with <br class="tw-hidden sm:tw-block">
        companies, paid internship, event partnership, financing pertnership, <br class="tw-hidden sm:tw-block">
        speaking <br class="sm:tw-hidden"> engagement and master classes.
      </div>
    </div>
    <div class="sm:tw-mt-8 xl:tw-mt-12 tw-bg-partner-section">
      <div class="tw-text-3xl tw-text-center tw-font-extrabold">
        How it works
      </div>
      <div class="sm:tw-flex tw-justify-center tw-mt-12 tw-hidden">
        <div class="tw-pr-4 tw-pb-24">
          <div data-aos="fade-up" class="xl:tw-w-110 tw-mx-5 xl:tw-mx-0 tw-h-80">
            <div></div>
          </div>
          <div data-aos="fade-up" class="xl:tw-w-110 tw-mx-5 xl:tw-mx-0 tw-h-80">
            <div class="tw-text-base tw-font-semibold tw-pt-12">
              For Internships
            </div>
            <div class="tw-pt-4">
              This intern patnership is a great way for our students to get their 
              foot in the door. They will get experience in their field, knowledge 
              about the company and a reference letter from the employer. Some of the 
              interns can also receive a salary for their work. This is one of the best 
              place to get experience student for internship opportunities.
            </div>
            <div class="tw-mt-10">
              <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
            </div>
          </div>
          <div data-aos="fade-up" class="xl:tw-w-110 tw-mx-5 xl:tw-mx-0 tw-h-80">
            <div></div>
          </div>
          <div data-aos="fade-up" class="xl:tw-w-110 tw-mx-5 xl:tw-mx-0 tw-h-80">
            <div class="tw-text-base tw-font-semibold tw-pt-12">
              For financial aids
            </div>
            <div class="tw-pt-4">
              This intern patnership is a great way for our students to get their 
              foot in the door. They will get experience in their field, knowledge 
              about the company and a reference letter from the employer. Some of 
              the interns can also receive a salary for their work. This is one of 
              the best place to get experience student for internship opportunities.
            </div>
            <div class="tw-mt-10">
              <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
            </div>
          </div>
        </div>        
        <div class="tw-border-l-2 tw-border-primaryColor tw-px-4">
          <div data-aos="fade-up" class="xl:tw-w-110 tw-mx-5 xl:tw-mx-0 tw-h-80">
            <div class="tw-text-base tw-font-semibold tw-pt-12">
              For government
            </div>
            <div class="tw-pt-4">
              Partnering with government is a big concern for our company. 
              government the community and societies we are living scholasrhips 
              to give a diverse experience to peolpe in deferent communities. Having 
              scholarships from government or government officials will give a life changing 
              experience to people or beneficiaries of the scholarship.
            </div>
            <div class="tw-mt-10">
              <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
            </div>
          </div>
          <div data-aos="fade-up" class="xl:tw-w-110 tw-mx-5 xl:tw-mx-0 tw-h-80">
            <div></div>
          </div>
          <div data-aos="fade-up" class="xl:tw-w-110 tw-mx-5 xl:tw-mx-0 tw-h-80">
            <div class="tw-text-base tw-font-semibold tw-pt-12">
              For Hackathon & event
            </div>
            <div class="tw-pt-4">
              Our Events are a great way to network and also to increase awarness about 
              learning technical and soft skills. we typically geared students and often 
              have a focus on technology-related projects to give them room of creating 
              and innovating excellent solution to various problem in deferent type of 
              business and ideas.
            </div>
            <div class="tw-mt-10">
              <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
            </div>
          </div>
        </div>
      </div>
      <div class="tw-mt-10 tw-mx-4 sm:tw-hidden">
        <div data-aos="fade-up" class="tw-h-80 tw-mt-5">
          <div class="tw-text-base tw-font-semibold tw-pt-12">
            For government
          </div>
          <div class="tw-pt-4">
            Partnering with government is a big concern for our company. 
            government the community and societies we are living scholasrhips 
            to give a diverse experience to peolpe in deferent communities. Having 
            scholarships from government or government officials will give a life changing 
            experience to people or beneficiaries of the scholarship.
          </div>
          <div class="tw-mt-10">
            <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
          </div>
        </div>
        <div data-aos="fade-up" class="tw-h-80 tw-mt-5">
          <div class="tw-text-base tw-font-semibold tw-pt-12">
            For Internships
          </div>
          <div class="tw-pt-4">
            This intern patnership is a great way for our students to get their 
            foot in the door. They will get experience in their field, knowledge 
            about the company and a reference letter from the employer. Some of the 
            interns can also receive a salary for their work. This is one of the best 
            place to get experience student for internship opportunities.
          </div>
          <div class="tw-mt-10">
            <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
          </div>
        </div>
        <div data-aos="fade-up" class="tw-h-80 tw-mt-5">
          <div class="tw-text-base tw-font-semibold tw-pt-12">
            For Hackathon & event
          </div>
          <div class="tw-pt-4">
            Our Events are a great way to network and also to increase awarness about 
            learning technical and soft skills. we typically geared students and often 
            have a focus on technology-related projects to give them room of creating 
            and innovating excellent solution to various problem in deferent type of 
            business and ideas.
          </div>
          <div class="tw-mt-10">
            <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
          </div>
        </div>
        <div data-aos="fade-up" class="tw-h-80 tw-mt-5">
          <div class="tw-text-base tw-font-semibold tw-pt-12">
            For financial aids
          </div>
          <div class="tw-pt-4">
            This intern patnership is a great way for our students to get their 
            foot in the door. They will get experience in their field, knowledge 
            about the company and a reference letter from the employer. Some of 
            the interns can also receive a salary for their work. This is one of 
            the best place to get experience student for internship opportunities.
          </div>
          <div class="tw-mt-10">
            <q-btn color="accent" unelevated class="tw-w-32 tw-h-12 tw-font-semibold" no-caps label="Apply" @click="onClick" />
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-center">
        <div class="tw-mt-10">
          <div class="tw-text-2xl sm:tw-text-3xl tw-font-extrabold tw-text-center">
            Our partners
          </div>
          <div class="tw-mt-4 row">
            <q-img
              class="tw-w-32 tw-mx-auto"
              src="~assets/img/landing/electrical.png"
            />
          </div>
        </div>
      </div>
      <div class="tw-mt-8 sm:tw-mt-12 xl:tw-mt-24">
        <div class="tw-text-base sm:tw-text-xl xl:tw-text-3xl tw-font-extrabold tw-text-center">
          Become a partner! lets build the future.
        </div>
        <div class="tw-flex tw-justify-center tw-mt-5">
          <div class="tw-w-full tw-mx-4 sm:tw-mx-0 sm:tw-w-2/3 xl:tw-w-140">
            <div class="tw-flex">
              <div class="tw-mr-2 tw-w-full">
                <q-input v-model="text" type="text" class="tw-bg-white" dense label="First name" color="accent" outlined />
              </div>
              <div class="tw-ml-2 tw-w-full">
                <q-input v-model="text" type="text" class="tw-bg-white" dense label="Last name" color="accent" outlined />
              </div>
            </div>
            <div class="tw-mt-6">
              <q-input v-model="text" type="text" class="tw-bg-white" dense label="Email" color="accent" outlined />
            </div>
            <div class="tw-mt-6">
              <q-input v-model="text" type="textarea" class="tw-bg-white" dense label="Message" color="accent" outlined />
            </div>
            <q-card-actions align="center" class="tw-mt-12 tw-pb-24 sm:tw-pb-0">
              <q-btn color="accent" label="Send" no-caps unelevated class="tw-w-32 tw-h-12 tw-font-semibold" @click="onClick" />
            </q-card-actions>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-section class="sm:tw-mt-32" />
</template>

<script>
import { defineComponent } from 'vue'
import FooterSection from 'components/landing/FooterSection.vue'

export default defineComponent({
  name: "PartnershipPage",
  components: {
    FooterSection
  },

  setup() {
    
  },
})
</script>
