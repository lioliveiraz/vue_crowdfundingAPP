<template>
  <div class="searchbar">
    <p>Search Project</p>

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

<style scoped>
.searchbar {
  width: 90%;
  margin-top: 10%;
  text-align: left;
  height: 15%;
  flex-direction: column;
  justify-content: center;
}

.searchbar input {
  width: 95%;
  height: 5vh;
}
.searchbar input:focus {
  box-shadow: inset 10px -10px 100px rgb(0, 38, 48);
  outline: none;
  color: white;
}
</style>