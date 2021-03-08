<template>
  <div class="q-gutter-md q-pa-md">
    <h5 class="q-mb-none text-primary">Login</h5>
    <q-input
      v-model="email"
      type="text"
      label="Email"
      @keydown.enter="signIn"
    />
    <q-input
      v-model="password"
      type="password"
      label="Password"
      @keydown.enter="signIn"
    />
    <q-btn color="primary" label="Login" @click="signIn" />
    <q-btn
      class="text-grey-10"
      color="accent"
      label="Forget Password"
      to="/auth/forget"
    />
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
    const password = ref<string>("");

    const signIn = () => {
      store
        .dispatch("firebase/login", {
          email: email.value,
          password: password.value,
        })
        .then(() => {
          router.push("/profile/");
        });
    };

    return { email, password, signIn };
  },
});
</script>
