<template>
  <div>
    <q-btn color="primary" label="Check User" @click="getUser" />
    <q-btn color="primary" label="Logout" @click="logout" />
    <q-btn color="primary" label="test" @click="test" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "firebase/app";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const getUser = () => {
      console.log(
        `${firebase.auth().currentUser?.email} is currently signed in`
      );
    };

    const logout = () => {
      store.dispatch("firebase/logout");
      router.push("/");
    };

    const test = () => {
      store.dispatch("firebase/test");
    };

    return { getUser, logout, test };
  },
});
</script>
