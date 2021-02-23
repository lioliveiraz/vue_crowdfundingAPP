<template>
  <div>
    <h4>{{ project.name }}</h4>
    <img :src="project.image" :alt="project.name" />
    <p>Creator: {{ project.creator }}</p>

    <p>Date: {{ project.date }}</p>

    <slot></slot>
  </div>
</template>

    <script>
export default {
  props: ["project"],
};
</script>