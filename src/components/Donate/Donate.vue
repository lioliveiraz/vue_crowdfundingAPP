<template>
  <form @submit="handleSubmit">
    <h2>How much do you want to donate?</h2>
    <p>{{ toast }}</p>
    <label>{{ donationValue }}</label>
    <input type="range" v-model="donationValue" min="10" :max="maxValue" />
    <input type="submit" :disabled="toggleDisable" />
  </form>
</template>

<script>
import { findMaxValueToDonate } from "../../helper/helperFunc";
import { changeDonatedValue } from "../../api/requests";

export default {
  props: ["project"],
  data() {
    return {
      donationValue: 0,
      maxValue: findMaxValueToDonate(this.project.donated, this.project.goal),
      toast: "",
      toggleDisable: false,
    };
  },
  updated() {
    this.maxValue = findMaxValueToDonate(
      this.project.donated,
      this.project.goal
    );
    if (this.maxValue <= 0) {
      this.toggleDisable = true;
    } else {
      this.toggleDisable = false;
    }
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.project["donated"] =
        parseInt(this.project["donated"]) + parseInt(this.donationValue);
      const res = await changeDonatedValue(this.project.id, this.project);
      this.donationValue = 0;
      if (res.status === "201") {
        this.toast = "Thank you";
      } else {
        this.toast = "Something went wrong. Try again later";
      }
    },
  },
};
</script>

<style>
</style>