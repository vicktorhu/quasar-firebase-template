<template>
  <div>
    <h3>Firestore Test</h3>
    <q-input v-model="input" type="text" label="Tweet" />
    <q-btn color="primary" label="Post" @click="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import firebase from "firebase/app";

export default defineComponent({
  setup() {
    var db = firebase.firestore();

    var input = ref<string>("");

    const post = () => {
      db.collection("tweet")
        .add({
          id: firebase.auth().currentUser?.uid,
          text: input.value,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          input.value = "";
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    };

    return { input, post };
  },
});
</script>

<style scoped>
</style>