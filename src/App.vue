<template>
  <div id="app">
    <div id="nav">
      <p>{{ username }}</p>
      <router-link to="/">Home</router-link> |
      <router-link v-if="isLoggedIn" :to="{ name: 'CreateProject' }"
        >Create your project</router-link
      >
      <button v-if="isLoggedIn" @click="logout">Log out</button>
      <button v-else @click="login">Log in</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState("auth", ["username"]),
    ...mapGetters("auth", ["isLoggedIn"]),
  },

  methods: {
    ...mapActions("auth", ["login", "logout"]),
  },
};
</script>

<style>
* {
  margin: 0;
  text-decoration: none;
  color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
img {
  height: 350px;
}
</style>
