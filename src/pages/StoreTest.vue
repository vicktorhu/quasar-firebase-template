<template>
  <div>
    StoreTest
    <q-checkbox left-label v-model="firebaseProp" label="Orange" />
    {{firebaseProp}}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const $store = useStore();

    const firebaseProp = computed({
      get: () => $store.state.firebase.prop,
      set: val => {
        $store.commit('firebase/updateProp', val)
      }
    })

    return { firebaseProp };
  },
});
</script>

<style scoped>
</style>