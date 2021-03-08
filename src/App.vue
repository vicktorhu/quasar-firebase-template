<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  created() {
    this.$q.dark.set(true);
  },
});
</script>
