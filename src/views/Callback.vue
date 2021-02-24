<template>
  <p>...</p>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.finalizeLogin(window.location.hash);
  },
  mounted() {
    this.$router.push("/");
  },
  methods: mapActions("auth", ["finalizeLogin"]),
};
</script>

<style>
</style>