<template>
  <div class="q-gutter-md q-pa-md">
    <h5 class="q-mb-none text-primary">Recover Password</h5>
    <q-input
      v-model="email"
      type="text"
      label="Email"
      @keydown.enter="forgetPassword"
    />
    <q-btn color="primary" label="Recover Password" @click="forgetPassword" />
    <q-btn class="text-grey-10" color="accent" label="Back" to="/auth/login" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const email = ref<string>("");

    const forgetPassword = () => {
      store.dispatch("firebase/sendRecoveryEmail", email.value).then(() => {
        router.push("/auth/login/");
      });
    };
    return { email, forgetPassword };
  },
});
</script>
