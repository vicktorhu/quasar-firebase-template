<template>
  <div>
    <div v-if="currentUser != null">
      <h5 class="q-ma-md text-primary">Profile</h5>
      <div class="row q-gutter-md">
        <div class="columns q-gutter-md">
          <div class="text-primary">Display Name</div>
          <div class="text-primary">Email</div>
          <div class="text-primary">UID</div>
          <div class="text-primary">Verified</div>
        </div>
        <div class="columns q-gutter-md">
          <div>{{ currentUser.displayName }}</div>
          <div>{{ currentUser.identifier }}</div>
          <div>{{ currentUser.uid }}</div>
          <div>{{ currentUser.verified }}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <h5 class="q-ma-md text-primary">Not Logged In</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { User } from "components/models";

export default defineComponent({
  setup() {
    const currentUser = computed(
      (): User => useStore().state.firebase.currentUser
    );

    return { currentUser };
  },
});
</script>

<style scoped>
</style>