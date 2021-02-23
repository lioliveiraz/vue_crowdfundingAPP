<template>
  <div v-if="project">
    <Card :project="project" @handleToggleDonate="handleToggleDonate">
      <p>{{ project.goal }}</p>
      <p>{{ project.donated }}</p>
      <p>{{ project.description }}</p>
    </Card>
    <button @click="handleToggleDonate">Make dreams come true</button>
    <div v-if="toggleDonate">
      <Donate :project="project" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card/Card";
import Donate from "../components/Donate/Donate";

import { fetchDataPerID } from "../api/requests";
export default {
  props: ["id"],
  components: { Card, Donate },
  data() {
    return {
      project: null,
      toggleDonate: false,
    };
  },
  async mounted() {
    const data = await fetchDataPerID(this.id);
    this.project = data[0];
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