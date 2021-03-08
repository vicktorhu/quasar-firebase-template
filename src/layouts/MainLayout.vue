<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <login-button :userName="username" />
        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-10">
      <q-list>
        <q-item-label header class="text-grey-1">
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from "components/EssentialLink.vue";
import LoginButton from "components/LoginButton.vue";

const linksList = [
  {
    title: "Home",
    icon: "school",
    link: "/",
  },
  {
    title: "Login",
    icon: "school",
    link: "/login",
  },
  {
    title: "Store Test",
    icon: "school",
    link: "/storetest",
  },
];

import { defineComponent, ref } from "vue";
import firebase from "firebase/app";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    LoginButton,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    let username = ref<string>("");

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        username.value = user.email!;
        console.log(`${user.email} is verified = ${user.emailVerified}`);
      }
    });

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      username,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
