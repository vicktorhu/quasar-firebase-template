<template>
  <div>
    <q-btn color="primary" label="Check User" @click="getUser" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import firebase from "firebase/app";

export default defineComponent({
  setup() {
    const getUser = () => {
      console.log(
        `${firebase.auth().currentUser?.email} is currently signed in`
      );
    };

    return { getUser };
  },
});
</script>
