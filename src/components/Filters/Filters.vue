<template>
  <div>
    <button @click="sortPerMostRecent">Most Recent</button>
    <div v-for="creator in creatorsArr" :key="creator">
      <label>
        {{ creator }}
        <input
          type="checkbox"
          v-model="selectedCreator"
          :name="creator"
          :value="creator"
        />
      </label>
    </div>
  </div>
</template>

<script>
import { deleteRepeatedElementArr } from "../../helper/helperFunc";

export default {
  props: ["sortPerMostRecent", "projects"],
  data() {
    return {
      creatorsArr: [],
      selectedCreator: [],
    };
  },
  mounted() {
    this.setCreatorsArray();
  },
  updated() {
    if (this.selectedCreator.length > 0) {
      this.$emit("filterCreator", this.selectedCreator);
    } else {
      this.$emit("filterCreator", this.creatorsArr);
    }
  },
  methods: {
    setCreatorsArray() {
      const creators = [];

      this.projects.forEach((project) => {
        creators.push(project.creator);
      });

      this.creatorsArr = deleteRepeatedElementArr(creators);
    },
  },
};
</script>

<style>
</style>