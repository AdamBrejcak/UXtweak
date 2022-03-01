<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row justify-between bg-white page-width" unelevated>
      <header-component amber-color="amber"></header-component>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      v-if="!q.screen.lt.sm"
      class="bg-grey-2 text-black row page-width"
      unelevated
    >
      <footer-component></footer-component>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import HeaderComponent from 'src/components/Header.vue';
import FooterComponent from 'src/components/Footer.vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const q = useQuasar();
    return { q };
  },
  components: { HeaderComponent, FooterComponent },
});
</script>

<style lang="scss" scoped>
.page-width {
  max-width: 1200px;
  margin: 0 auto;

  .button {
    height: 44px;
    width: 103px;
  }
  .free-small {
    font-size: 12px;
    margin-top: -5px;
  }
  .small-text {
    font-size: 11px;
  }
}
</style>
