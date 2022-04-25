<template lang="pug">
.home.pt-5.mt-5
  .container
    .row
      .col-12.text-center
        .mb-5
          img(src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="firebase")
          h2 Firebase 🧠
        p {{user}}
  .logout
    button.btn.btn-outline-danger(v-if="isAuth" @click="logout()") LogOut #[span.pl-2: svgIcon(name="logout")]
    nuxt-link.btn.btn-outline-danger(v-else to="/login") Login #[span.pl-2: svgIcon(name="logout")]
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",
  mounted() {},
  computed: {
    ...mapGetters({
      user: "auth/GET_USER",
      isAuth: "auth/IS_AUTH",
    }),
  },
  methods: {
    logout() {
      this.$cookies.remove("token");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss">
.logout {
  position: fixed;
  top: 1rem;
  left: 1rem;
  .btn {
    .icon {
      fill: #dc3545;
    }
    &:hover {
      .icon {
        fill: #fff;
      }
    }
  }
}
</style>
