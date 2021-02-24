<template>
  <form @submit="handleSubmit">
    {{ toast }}
    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'text',
        name: 'name',
        placeHolder: 'project name',
      }"
    />

    <p>{{ errors.name }}</p>

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'number',
        name: 'goal',
        placeHolder: '1000',
      }"
    />
    <p>{{ errors.goal }}</p>

    <Input
      @getUserInput="getUserInput"
      :attributeObj="{
        type: 'text',
        name: 'description',
        placeHolder: 'description',
      }"
    />
    <p>{{ errors.description }}</p>

    <input type="submit" />
  </form>
</template>

<script>
import Input from "./Input";
import { transformDateTypeInString } from "../../helper/helperFunc";
import { validateInput } from "../../helper/validation";
import { createProject } from "../../api/requests";
import { mapState } from "vuex";

export default {
  components: {
    Input,
  },
  computed: {
    ...mapState("auth", ["username"]),
  },
  data() {
    return {
      createdProject: {
        donated: 0,
        image: "/placeholder.jpg",
        date: transformDateTypeInString(),
      },
      errors: {},
      toast: "",
    };
  },
  mounted() {
    if (this.username) {
      this.createdProject["creator"] = this.username;
    }
  },
  methods: {
    getUserInput(inputvalue, inputName) {
      if (inputName === "goal") {
        this.createdProject[inputName] = parseInt(inputvalue);
      } else if (inputvalue === "name") {
        this.createdProject[inputName] = inputvalue.trim();
      } else {
        this.createdProject[inputName] = inputvalue;
      }
    },
    async handleSubmit(e) {
      e.preventDefault();
      const errors = validateInput(this.createdProject);
      if (Object.entries(errors).length !== 0) {
        this.errors = errors;
      } else {
        const res = await createProject(this.createdProject);
        if (res.status === 201) {
          this.toast = "Your project was created";
        } else {
          this.toast = " Something wen't wrong try again later";
        }
      }
    },
  },
};
</script>

<style>
</style>