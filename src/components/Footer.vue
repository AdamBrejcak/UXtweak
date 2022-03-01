<template>
  <div class="q-pr-xl">
    <h6 class="q-px-md q-my-md text-weight-bold">Product</h6>
    <q-list dense class="text-weight-light small-text">
      <q-item clickable v-ripple>
        <q-item-section>Features</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Pricing</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Demos</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Consulting</q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pr-xl">
    <h6 class="q-px-md q-my-md text-weight-bold">Resources</h6>
    <q-list dense class="text-weight-light small-text">
      <q-item clickable v-ripple>
        <q-item-section>Documentation</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Performance</q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pr-xl">
    <h6 class="q-px-md q-my-md text-weight-bold">Legal</h6>
    <q-list dense class="text-weight-light small-text">
      <q-item clickable v-ripple>
        <q-item-section>Privacy by design</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>GDPR compilance</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Terms of service</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Privacy policy</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Opt-out</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>DPA</q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pr-xl">
    <h6 class="q-px-md q-my-md text-weight-bold">Company</h6>
    <q-list dense class="text-weight-light small-text">
      <q-item clickable v-ripple>
        <q-item-section>Contact form</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Blog</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Careers</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompositionComponent',

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.small-text {
  font-size: 11px;
}
</style>
