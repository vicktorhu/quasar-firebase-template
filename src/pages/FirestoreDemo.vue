<template>
  <div>
    <div v-if="currentUser != null">
      <div class="q-gutter-md q-pa-md">
        <h5 class="q-mb-none text-primary">Firestore Demo</h5>
        <q-input v-model="input" type="text" label="Post" />
        <q-btn color="primary" label="Post" @click="post" />
      </div>
    </div>
    <div v-else>
      <h5 class="q-ma-md text-primary">Not Logged In</h5>
    </div>
    <div>
      <div class="row" v-for="post in posts" :key="post.id">
        <div class="columns q-gutter-md">
          <div class="row q-gutter-md">
            <div class="text-primary">{{ post.uid }}:</div>
            <div>{{ post.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import firebase from "firebase/app";
import { Post } from "components/models";

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
          loadData();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    };

    const posts = ref<Post[]>([]);

    const loadData = () => {
      posts.value.length = 0;
      db.collection("posts")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const post: Post = new Post(
              doc.id,
              doc.data().uid,
              doc.data().text
            );
            posts.value!.push(post);
          });
        });
    };

    onMounted(() => {
      loadData();
    });

    return { currentUser, input, post, posts };
  },
});
</script>

<style scoped>
</style>