<template>
  <div>
    <q-input v-model="email" type="text" label="Email" />
    <q-input v-model="password" type="password" label="Password" />
    <q-btn color="primary" label="Login" @click="signIn" />
    <q-btn color="primary" label="Check User" @click="getUser" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import firebase from "firebase/app";

export default defineComponent({
  setup() {
    const store = useStore();

    const email = ref<string>("test@test.com");
    const password = ref<string>("testtest");

    const signIn = () => {
      store.dispatch("firebase/login", { email: email.value, password: password.value });
    };

    const getUser = () => {
      console.log(
        `${firebase.auth().currentUser?.email} is currently signed in`
      );
    };

    return { email, password, signIn, getUser };
  },
});
</script>
