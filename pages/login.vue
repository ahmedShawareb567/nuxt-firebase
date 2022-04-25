<template lang="pug">
.login.w-100
  .container
    .text-center.mb-5
      img(src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="firebase")
      h4 login
    .row.justify-content-center
      .col-lg-6.col-md-7
        form(@submit.prevent="onSubmit()")
          .row
            .col-12
              input.form-control.mb-3(type="text" placeholder="Email.." v-model="form.email" required)
              input.form-control.mb-3(type="password" placeholder="Password.." v-model="form.password" required)
            .col-12
              .d-flex.align-items-center.justify-content-between
                button.btn.btn-primary
                  Loading.px-1(v-if="isLoading")
                  span(v-else) Login
                nuxt-link(to="/register") Register

              .text-center.pt-4
                nuxt-link(to="/reset") Reset Password

</template>
<script>
export default {
  layout: "minimal",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      isLoading: false,
    };
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      const { success, message } = await this.$store.dispatch(
        "auth/login",
        this.form
      );

      if (success) {
        this.$router.push("/");
      } else {
        this.$toast.open({
          message,
          type: "error",
          position: "top-right",
        });
      }

      this.isLoading = false;
    },
  },
};
</script>
