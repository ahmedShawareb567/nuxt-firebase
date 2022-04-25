<template lang="pug">
.login.w-100
  .container
    .text-center.mb-4
      h2 Reset Password
    .row.justify-content-center
      .col-lg-6.col-md-7
        form(@submit.prevent="onSubmit()")
          .row
            .col-12
              input.form-control.mb-3(type="text" placeholder="Email" v-model="form.email")
            .col-12
              .d-flex.align-items-center.justify-content-between
                button.btn.btn-primary Login
                nuxt-link(to="/login") login

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
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
