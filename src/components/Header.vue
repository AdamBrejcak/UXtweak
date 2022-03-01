<template>
  <q-btn-dropdown
    v-if="q.screen.lt.sm"
    class="q-pl-md q-my-md button"
    :color="amberColor"
    unelevated
    no-icon-animation
    no-caps
    label="Menu"
  >
    <q-list>
      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Features</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Pricing</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Contact</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Learn</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
  <div v-if="!q.screen.lt.sm" class="q-pr-md q-mt-md">
    <q-btn
      id="menuFeatures"
      :class="menuFeaturesShow ? '' : 'light-dimmed'"
      :text-color="amberColor"
      unelevated
      no-icon-animation
      no-caps
      @mouseover="menuFeaturesShow = true"
      @mouseleave="menuFeaturesShow = false"
      icon-right="arrow_drop_down"
    >
      <label for="menuFeatures" class="text-black">Features</label>
    </q-btn>

    <q-btn
      id="menuPricing"
      :class="menuPricingShow ? '' : 'light-dimmed'"
      :text-color="amberColor"
      unelevated
      no-icon-animation
      no-caps
      @mouseover="menuPricingShow = true"
      @mouseleave="menuPricingShow = false"
      icon-right="arrow_drop_down"
    >
      <label for="menuPricing" class="text-black">Pricing</label>
    </q-btn>
    <q-btn
      id="menuContact"
      :class="menuContactShow ? '' : 'light-dimmed'"
      :text-color="amberColor"
      unelevated
      auto-close
      no-icon-animation
      no-caps
      @mouseover="menuContactShow = true"
      icon-right="arrow_drop_down"
    >
      <label for="menuContact" class="text-black">Contact</label>
      <q-menu
        v-model="menuContactShow"
        @mouseleave="menuContactShow = false"
        transition-show="jump-up"
        transition-hide="jump-down"
      >
        <div class="row no-wrap q-pa-md">
          <q-item clickable v-close-popup>
            <q-item-section>
              <div>
                <q-item-label class="text-weight-bold"
                  >Contact Form</q-item-label
                >
                <span>Feel free to send us a message</span>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup>
            <q-item-section>
              <div>
                <q-item-label class="text-weight-bold"
                  >Schedule a Live Demo</q-item-label
                >
                <span class="text-caption"
                  >Book a live demo with our product specialist</span
                >
              </div>
            </q-item-section>
          </q-item>
        </div>
      </q-menu>
    </q-btn>
    <q-btn
      id="menuLearn"
      :class="menuLearnShow ? '' : 'light-dimmed'"
      :text-color="amberColor"
      unelevated
      no-icon-animation
      no-caps
      @mouseover="menuLearnShow = true"
      @mouseleave="menuLearnShow = false"
      icon-right="arrow_drop_down"
    >
      <label for="menuLearn" class="text-black">Learn</label>
    </q-btn>
  </div>

  <div class="q-pl-md q-my-md">
    <q-btn
      outline
      class="bg-white button"
      :text-color="amberColor"
      stack
      unelevated
      no-caps
    >
      <div class="column items-center no-wrap">
        <span class="text-black q-mt-none">Register </span>
        <span class="free-small"> for free </span>
      </div>
    </q-btn>
    <q-btn
      class="q-ml-md button"
      :color="amberColor"
      label="Log In"
      unelevated
      no-caps
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'HeaderComponent',
  props: {
    amberColor: {
      type: String,
    },
  },
  setup() {
    const q = useQuasar();
    return {
      menuFeaturesShow: ref(false),
      menuPricingShow: ref(false),
      menuContactShow: ref(false),
      menuLearnShow: ref(false),
      q,
    };
  },
});
</script>
<style lang="scss" scoped>
.button {
  height: 44px;
  width: 103px;
}
.free-small {
  font-size: 12px;
  margin-top: -5px;
}
</style>
