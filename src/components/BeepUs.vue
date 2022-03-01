<template>
  <div class="q-pt-xl column items-center">
    <h3 class="text-weight-bolder q-mb-md">
      <span :class="amberTextClass">Bee</span>p Us
    </h3>
    <a :class="amberTextClass" class="q-mb-md" href="info@uxtweak.com"
      >info@uxtweak.com</a
    >
    <span class="text-weight-bolder">Office</span>
    <span>UXtweak j.s.a., Obchodna 58, 811 06 Bratislava</span>
    <span>Slovakia (European Union)</span>

    <div class="rounded-borders bg-grey-2 text-center q-mt-xl schedule-demo">
      <h3 class="text-weight-bolder q-ma-auto q-mt-xl">Schedule a Live Demo</h3>
      <q-btn
        :color="whiteColor"
        :text-color="blackColor"
        label="Schedule"
        unelevated
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeepUsComponent',
  props: {
    amberColor: {
      type: String,
    },
    whiteColor: {
      type: String,
    },
    blackColor: {
      type: String,
    },
    amberTextClass: {
      type: String,
    },
  },
});
</script>
<style lang="scss" scoped>
.schedule-demo {
  max-width: 400px;
  height: 300px;
}
</style>
