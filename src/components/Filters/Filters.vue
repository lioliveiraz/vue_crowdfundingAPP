<template>
  <div class="filters">
    <div class="filters--sortButtons">
      <p>Sort</p>
      <div>
        <button @click="sortPerMostRecent">Most Recent</button>
        <button @click="sortHighestGoal">Most Recent</button>
      </div>
    </div>
    <div class="filters--creatorsFilters">
      <p>Chose the creator</p>
      <div class="filter--creatorsList">
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
    </div>
  </div>
</template>

<script>
import { deleteRepeatedElementArr } from "../../helper/helperFunc";

export default {
  props: ["sortPerMostRecent", "projects", "sortHighestGoal"],
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

<style scoped>
.filters {
  width: 90%;
  height: 60%;
  color: white;
}
.filters--sortButtons {
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10%;
}
.filters--sortButtons div {
  flex-wrap: wrap;
}
.filters--sortButtons button {
  height: 8vh;
  border-radius: 0;
}
.filters--creatorsFilters {
  margin-top: 5%;
}
.filter--creatorsList {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 0.8rem;
  margin: 5%;
}
@media screen and (min-width: 1024px) {
  .filter--creatorsList {
    font-size: 1.2rem;
  }
}
</style>