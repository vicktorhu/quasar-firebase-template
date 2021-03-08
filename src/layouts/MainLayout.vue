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

        <q-toolbar-title> Quasar Firebase Template </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <auth-dialog />
        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      elevated
      show-if-above
      :class="darkMode.sidebar"
    >
      <q-list>
        <q-item-label header class="text-primary">
          Quasar Firebase Template
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <div class="q-pa-md">
        <q-btn
          style="width: 100%"
          :class="darkMode.class"
          :icon="darkMode.icon"
          :label="darkMode.text"
          @click="darkModeToggle"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from "components/EssentialLink.vue";
import AuthDialog from "src/components/AuthDialog.vue";

const linksList = [
  {
    title: "Home",
    icon: "cottage",
    link: "/",
  },
  {
    title: "Profile",
    icon: "face",
    link: "/profile/",
  },
  {
    title: "Firestore Demo",
    icon: "fireplace",
    link: "/firestore/",
  },
];

import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    AuthDialog,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const $q = useQuasar();
    const darkMode = computed(() => {
      return {
        icon: $q.dark.isActive ? "brightness_high" : "dark_mode",
        class: $q.dark.isActive
          ? "bg-primary text-grey-1"
          : "bg-grey-10 text-grey-1",
        text: $q.dark.isActive ? "Light" : "Dark",
        sidebar: $q.dark.isActive ? "bg-grey-10" : "bg-grey-1",
      };
    });

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      darkMode,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      darkModeToggle() {
        $q.dark.toggle();
      },
    };
  },
});
</script>
