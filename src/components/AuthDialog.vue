<template>
  <div>
    <div v-if="userName != ''">
      <q-btn
        color="secondary"
        class="text-grey-9"
        icon="person"
        :label="userName"
        @click="showLoginDialog"
      />
    </div>
    <div v-else>
      <q-btn
        color="secondary"
        class="text-grey-9"
        icon="person"
        @click="showLoginDialog"
      />
    </div>

    <q-dialog v-model="loginDialog">
      <div v-if="userName != ''" class="columns dialog">
        <div>
          <q-btn
            class="dialogButtons text-grey-9"
            color="secondary"
            label="Profile"
            to="/profile/"
          />
        </div>
        <div>
          <q-btn
            class="dialogButtons text-grey-9"
            color="secondary"
            label="Logout"
            @click="logout"
          />
        </div>
        <div>
          <q-btn
            class="dialogButtons text-grey-9"
            color="accent"
            label="Cancel"
            v-close-popup
          />
        </div>
      </div>
      <div v-else class="columns dialog">
        <div>
          <q-btn
            class="dialogButtons text-grey-9"
            color="secondary"
            label="Login"
            to="/login/"
          />
        </div>
        <div>
          <q-btn
            class="dialogButtons text-grey-9"
            color="secondary"
            label="Register"
            to="/register/"
          />
        </div>
        <div>
          <q-btn
            class="dialogButtons text-grey-9"
            color="accent"
            label="Cancel"
            v-close-popup
          />
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { User } from "components/models";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    // Get reactive value of currentUser.identifer from vuex
    const userName = computed(() => {
      const user: User = store.state.firebase.currentUser;
      if (user != null) {
        return user.identifier;
      } else {
        return "";
      }
    });

    const loginDialog = ref(false);

    const logout = () => {
      store.dispatch("firebase/logout");
      router.push("/");
    };

    return {
      userName,
      loginDialog,
      logout,
      showLoginDialog() {
        loginDialog.value = true;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.dialog {
  background-color: $primary;
  padding: 20px 20px 0 20px;
}
.dialogButtons {
  width: 100%;
  margin-bottom: 20px;
}
</style>
