<template>
  <div>
    <q-page class="column justify-start">
      <div class="row justify-center q-my-xl">
        <img alt="Quasar logo" src="~assets/logo-firebase.png" />
      </div>
      <div class="q-px-lg text-h2 text-center">Quasar Firebase Template</div>
      <div class="q-px-lg q-mt-md text-h6 text-center">
        <a
          target="_blank"
          href="https://github.com/vicktorhu/quasar-firebase-template"
          class="text-primary"
          style="text-decoration: none;"
          >Github Repository</a
        >
      </div>
      <div class="q-px-lg q-mt-md text-h7 text-center">
        By Vicktor Hutama (<a
          target="_blank"
          href="https://github.com/vicktorhu/"
          class="text-primary"
          >vicktorhu</a
        >) | Written for
        <a
          target="_blank"
          href="https://next.quasar.dev"
          class="text-primary"
          >Quasar v2</a
        >
        with
        <a
          target="_blank"
          href="https://v3.vuejs.org/guide/composition-api-introduction.html"
          class="text-primary"
          >Vue 3 Composition API</a
        >
        and
        <a
          target="_blank"
          href="https://www.typescriptlang.org/docs/"
          class="text-primary"
          >Typescript</a
        >
      </div>
    </q-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>