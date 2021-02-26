<template>
  <div class="card">
    <div class="card--image__top">
      <img
        :src="project.image"
        :alt="project.name"
        class="h-48 w-full object-cover md:w-48"
      />
    </div>
    <div class="card--details__bottom">
      <h4 class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        {{ project.name }}
      </h4>

      <p class="mt-2 text-gray-500">Creator: {{ project.creator }}</p>

      <p class="mt-2 text-gray-500">Date: {{ project.date }}</p>

      <slot></slot>
    </div>
  </div>
</template>

    <script>
export default {
  props: ["project"],
};
</script>
<style scoped>
.card {
  display: none;
}
</style>