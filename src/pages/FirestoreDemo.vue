<template>
  <div>
    <div v-if="currentUser != null">
      <div class="q-gutter-md q-pa-md">
        <h5 class="q-mb-none text-primary">Firestore Test</h5>
        <q-input v-model="input" type="text" label="Post" />
        <q-btn color="primary" label="Post" @click="post" />
      </div>
    </div>
    <div v-else>
      <h5 class="q-ma-md text-primary">Not Logged In</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import firebase from "firebase/app";
import { User } from "components/models";

export default defineComponent({
  setup() {
    const db = firebase.firestore();

    const currentUser = computed(() => useStore().state.firebase.currentUser);

    const input = ref<string>("");

    const post = () => {
      db.collection("posts")
        .add({
          uid: currentUser.value.uid,
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

    return { currentUser, input, post };
  },
});
</script>

<style scoped>
</style>