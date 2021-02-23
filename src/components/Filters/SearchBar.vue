<template>
  <div>
    <input
      type="text"
      placeholder="search project"
      v-model="userInputSearchPjc"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInputSearchPjc: "",
    };
  },
  updated() {
    this.$emit("filterArrProjects", this.userInputSearchPjc);
  },
};
</script>

<style>
</style>