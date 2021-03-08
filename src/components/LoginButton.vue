<template>
  <div>
    <div>{{ userName }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    userName: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let userName = ref<string>(props.userName!);
    return { userName };
  },
});
</script>

<style scoped>
</style>