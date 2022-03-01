<template>
  <q-page class="row items-center justify-evenly page-width">
    <beep-us
      amber-color="amber"
      white-color="white"
      black-color="black"
      amber-text-class="text-amber"
    ></beep-us>
    <contact-us
      amber-color="amber"
      white-color="white"
      black-color="black"
      white-text-class="text-white"
      black-text-class="text-black"
    ></contact-us>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactUs from '../components/ContactUs.vue';
import BeepUs from '../components/BeepUs.vue';

export default defineComponent({
  name: 'ContactPage',
  setup() {
    return {};
  },
  components: { ContactUs, BeepUs },
});
</script>
<style lang="scss" scoped>
.page-width {
  max-width: 1200px;
  margin: 50px auto;
}
</style>
