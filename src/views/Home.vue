<template>
  <div v-if="projects" class="home">
    <SearchBar @filterArrProjects="filterArrProjects" />

    <Filters
      :projects="projects"
      :sortPerMostRecent="sortPerMostRecent"
      @filterCreator="filterCreator"
    />

    <div v-for="project in filteredProjects" :key="project.id" class="project">
      <router-link :to="{ name: 'Project', params: { id: project.id } }">
        <Card :project="project" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { fetchData } from "../api/requests";
import { findElementInString } from "../helper/helperFunc";
import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";
import SearchBar from "../components/Filters/SearchBar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Filters,
    Card,
    SearchBar,
  },

  data() {
    return {
      projects: null,
      filteredProjects: null,
    };
  },
  async created() {
    const res = await fetchData();
    this.projects = res;
    this.filteredProjects = res;
  },
  computed: { ...mapGetters("auth", ["isLoggedIn"]) },
  methods: {
    ...mapActions("auth", ["logout"]),

    filterArrProjects(userInputSearchPjc) {
      this.filteredProjects = this.projects.filter(
        ({ name, creator }) =>
          findElementInString(name, userInputSearchPjc) ||
          findElementInString(creator, userInputSearchPjc)
      );
    },
    sortPerMostRecent() {
      this.filteredProjects = this.projects.slice().sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
    filterCreator(selectedCreator) {
      this.filteredProjects = this.projects.filter(({ creator }) =>
        selectedCreator.includes(creator)
      );
    },
  },
};
</script>
<style scoped>
.project {
  border: 1px black solid;
  width: 70%;
  margin: 1%;
  cursor: pointer;
}
</style>