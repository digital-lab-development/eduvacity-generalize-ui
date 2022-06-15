<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row tw-justify-center">
      <div class="col-12 col-xl-9">
        <div class="lg:tw-bg-gradient-to-l tw-from-lightPink tw-to-white tw-pt-4">
          <q-toolbar class="tw-w-flex tw-justify-center">
            <div class="tw-text-base lg:tw-hidden">
              <q-img
                class="tw-w-28"
                src="~assets/img/landing/eduvacity.png"
              />
            </div>
            <q-space />
            <q-btn
              flat
              size="lg"
              round
              color="accent"
              aria-label="Menu"
              @click="toggleLeftDrawer"
              class="lg:tw-hidden"
            >
              <svg width="32" class="tw-text-primaryColor tw-fill-current" height="16" viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="2" rx="1" fill="#1E136B"/>
                <rect y="7" width="26" height="2" rx="1" fill="#1E136B"/>
                <rect y="14" width="25" height="2" rx="1" fill="#1E136B"/>
              </svg>
            </q-btn>

            <q-toolbar-title class="lg:-tw-ml-56 xl:-tw-ml-80 tw-hidden lg:tw-block">
              <q-img
                class="tw-w-32"
                src="~assets/img/landing/eduvacity.png"
              />
            </q-toolbar-title>

            <div class="lg:tw-flex tw-justify-center tw-w-1/2 md:tw-w-120 xl:tw-w-1/2 tw-hidden">
              <q-btn-dropdown label="Schools" class="tw-text-base tw-w-36 tw-font-semibold" flat no-caps color="black">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
              <q-btn color="black" class="tw-w-36 tw-font-semibold" label="Why choose us" no-caps flat @click="onClick" />
              <q-btn color="black" class="tw-w-36 tw-font-semibold" label="Partnerships" no-caps flat @click="onClick" />
              <q-btn color="black" class="tw-w-36 tw-font-semibold" label="Pricing" no-caps flat @click="onClick" />
            </div>
            
            <div class="tw-text-base tw-w-44 lg:tw-w-56 tw-text-center tw-hidden lg:tw-block">
              <q-btn color="accent" label="Apply Now" no-caps unelevated class="tw-w-32 tw-py-2 tw-font-semibold" />
            </div>
          </q-toolbar>
        </div>

        <q-drawer
          v-model="leftDrawerOpen"
          class="tw-bg-white"
          side="right"
        >
          <q-list class="tw-mt-6">
            <q-expansion-item
              expand-separator
              label="Schools"
              class="tw-text-base tw-text-primaryColor tw-font-semibold"
            >
              <div class="tw-ml-2 tw-text-sm">
                <q-item clickable v-ripple @click="leftDrawerOpen = false">
                  <q-item-section class="tw-text-sm tw-text-primaryColor tw-font-semibold">Photos</q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="leftDrawerOpen = false">
                  <q-item-section class="tw-text-sm tw-text-primaryColor tw-font-semibold">Gallery</q-item-section>
                </q-item>
              </div>
            </q-expansion-item>
            <a href="">
              <q-item clickable v-ripple @click="leftDrawerOpen = false">
                <q-item-section class="tw-text-base tw-text-primaryColor tw-font-semibold">Why choose us</q-item-section>
              </q-item>
            </a>
            <a href="">
              <q-item clickable v-ripple @click="leftDrawerOpen = false">
                <q-item-section class="tw-text-base tw-text-primaryColor tw-font-semibold">Partnerships</q-item-section>
              </q-item>
            </a>
            <a href="">
              <q-item clickable v-ripple @click="leftDrawerOpen = false">
                <q-item-section class="tw-text-base tw-text-primaryColor tw-font-semibold">Pricing</q-item-section>
              </q-item>
            </a>
          </q-list>
          <q-card-actions @click="leftDrawerOpen = false" align="center">
            <q-btn no-caps unelevated color="accent" class="tw-w-56 tw-h-12 tw-font-semibold" label="Apply Now" />
          </q-card-actions>
        </q-drawer>

        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
