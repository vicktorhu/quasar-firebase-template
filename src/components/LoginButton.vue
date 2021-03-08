<template>
  <div>
    <div v-if="userName != ''">
      <q-btn color="secondary" icon="person" :label="userName" to="/profile" />
    </div>
    <div v-else>
      <q-btn color="secondary" icon="person" to="/login" />
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { User } from "components/models";

export default defineComponent({
  setup() {
    // Get reactive value of currentUser.identifer from vuex
    const userName = computed(() => {
      let user: User = useStore().state.firebase.currentUser;
      if (user != null) {
        return user.identifier;
      } else {
        return "";
      }
    });
    return { userName };
  },
});
</script>

<style scoped>
</style>