<template lang="pug">
div
  .multi-circles(v-if="type == 'section'")
    span
    span
    span
  .loading(v-else)
    span(:class="color")


</template>
<script>
export default {
  name: "Loading",
  props: {
    color: String,
    type: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 0.2rem solid rgba(255, 255, 255, 0.5);
    border-bottom-color: #fff;
    animation: rotateAnimation 0.5s linear infinite;
    margin: 0rem;
    line-height: 0rem;
    margin: 0rem 0.2rem;
    &.primary {
      border-color: rgba(0, 0, 0, 0.05);
      border-bottom-color: red;
    }
  }
}
@keyframes rotateAnimation {
  100% {
    transform: rotate(360deg);
  }
}

.multi-circles {
  position: relative;
  width: 60px;
  height: 40px;
  border: 1px solid transparent;
  margin: 35px auto;
  text-align: center;
  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    margin-top: 14px;
    transform: scale(0);
    animation: anim-ss 1s linear infinite;
    &:first-of-type {
      animation-delay: 0.2s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.4s;
    }
    &:last-of-type {
      animation-delay: 0.6s;
    }
  }
}
@keyframes anim-ss {
  0% {
    transform: scale(0);
  }
  65% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
