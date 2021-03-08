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
import firebase from "firebase/app";

export default defineComponent({
  setup() {
    let email = ref<string>("test@test.com");
    let password = ref<string>("testtest");

    const signIn = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user?.email);
        })
        .catch((error) => {
          console.log(`${error.code} - ${error.message}`);
        });
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
