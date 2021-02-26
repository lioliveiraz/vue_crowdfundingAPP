<template>
  <div v-if="projects" class="home">
    <div class="home--project__left">
      <div v-for="project in filteredProjects" :key="project.id">
        <router-link :to="{ name: 'Project', params: { id: project.id } }">
          <Card :project="project" />
        </router-link>
      </div>
    </div>
    <div class="home--filter__right">
      <SearchBar @filterArrProjects="filterArrProjects" />
      <Filters
        :projects="projects"
        :sortPerMostRecent="sortPerMostRecent"
        :sortHighestGoal="sortHighestGoal"
        @filterCreator="filterCreator"
      />
    </div>
  </div>
</template>

<script>
import { fetchData } from "../api/requests";
import { isElementInString } from "../helper/helperFunc";
import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";
import SearchBar from "../components/Filters/SearchBar";

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
  methods: {
    filterArrProjects(userInputSearchPjc) {
      this.filteredProjects = this.projects.filter(
        ({ name, creator }) =>
          isElementInString(name, userInputSearchPjc) ||
          isElementInString(creator, userInputSearchPjc)
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
    sortHighestGoal() {
      this.filteredProjects = this.projects.slice().sort((a, b) => {
        return b.goal - a.goal;
      });
    },
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  display: flex;
  height: 100vh;
}
.home--project__left {
  width: 55%;
  height: 90%;
  overflow-x: scroll;
  display: flex;
  flex-wrap: wrap;
  margin: 3%;
}
.home--project__left div {
  width: 100%;
  background: rgb(224, 223, 223);
  border-radius: 10px;
  margin-bottom: 5%;
  height: 50vh;
}
.home--project__left div a {
  width: 100%;
}

.home--filter__right {
  width: 45%;
  background: rgb(1, 56, 70);
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 1024px) {
  .home--project__left {
    width: 70%;
  }
  .home--filter__right {
    width: 30%;
    font-size: 1.3rem;
  }
  .home--project__left div {
    width: 45%;
    margin: 2%;
    height: 45vh;
  }
}
</style>