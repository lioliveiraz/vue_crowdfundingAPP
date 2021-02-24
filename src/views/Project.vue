<template>
  <div v-if="project">
    <Card :project="project" @handleToggleDonate="handleToggleDonate">
      <p>{{ project.goal }}</p>
      <p>{{ project.donated }}</p>
      <p>{{ project.description }}</p>
    </Card>
    <button @click="handleToggleDonate" v-if="!isGoalAchieved">
      Make dreams come true
    </button>
    <p v-else><b>This project already achieve its goal</b></p>
    <div v-if="toggleDonate">
      <Donate :project="project" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card/Card";
import Donate from "../components/Donate/Donate";
import { findMaxValueDonation } from "../helper/helperFunc";
import { fetchDataPerID } from "../api/requests";
export default {
  name: "Project",
  props: ["id"],
  components: { Card, Donate },
  data() {
    return {
      project: null,
      toggleDonate: false,
      isGoalAchieved: false,
    };
  },
  async mounted() {
    const data = await fetchDataPerID(this.id);
    this.project = data[0];
    this.isGoalAchieved =
      findMaxValueDonation(this.project.donated, this.project.goal) === 0;
  },
  methods: {
    handleToggleDonate() {
      this.toggleDonate = !this.toggleDonate;
    },
  },
};
</script>

<style>
</style>