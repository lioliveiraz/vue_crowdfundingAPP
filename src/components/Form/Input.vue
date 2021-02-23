<template>
  <div>
    <label>{{ attributeObj.name }}</label>
    <input
      :type="attributeObj.type"
      :name="attributeObj.type"
      :placeholder="attributeObj.placeHolder"
      autofocus
      v-model="currnetvalue"
      required
    />
  </div>
</template>

<script>
export default {
  props: ["attributeObj"],
  data() {
    return {
      currnetvalue: "",
    };
  },
  updated() {
    this.$emit("getUserInput", this.currnetvalue, this.attributeObj.name);
  },
};
</script>

<style>
</style>