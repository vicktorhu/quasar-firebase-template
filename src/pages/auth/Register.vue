<template>
  <div class="q-gutter-md q-pa-md">
    <h5 class="q-mb-none text-primary">Register</h5>
    <q-input v-model="name" type="text" label="Display Name" />
    <q-input v-model="email" type="email" label="Email" />
    <q-input v-model="password" type="password" label="Password" />
    <q-btn color="primary" label="Register" @click="signUp" />
    <!-- <q-btn
      class="text-grey-10"
      color="accent"
      label="Login"
      to="/auth/login"
    /> -->
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

    const name = ref<string>("Vicktor");
    const email = ref<string>("vhutamadrive@gmail.com");
    const password = ref<string>("testtest");

    const signUp = () => {
      store
        .dispatch("firebase/register", {
          name: name.value,
          email: email.value,
          password: password.value,
        })
        .then(() => {
          router.push("/profile/");
        });
    };

    return { name, email, password, signUp };
  },
});
</script>
