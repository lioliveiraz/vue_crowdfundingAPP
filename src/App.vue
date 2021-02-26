<template>
  <div id="app">
    <nav>
      <div class="home--routes__left">
        <router-link to="/">Home</router-link> |

        <router-link v-if="isLoggedIn" :to="{ name: 'CreateProject' }"
          >Create your project</router-link
        >
      </div>

      <div class="home--user__right">
        <p>Hello, {{ username }}</p>
        <button v-if="isLoggedIn" @click="logout">Log out</button>
        <button v-else @click="login">Log in</button>
      </div>
    </nav>
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
}
::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-button {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #efeff0;
}
nav {
  background: rgb(1, 56, 70);
  height: 10vh;
  color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 0.7rem;
}

nav div,
nav div p,
nav div a {
  color: white;
}
nav a {
  margin: 10px;
}

button {
  background: transparent;
  border: 1px white solid;
  margin: 3%;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
}

button:hover {
  background: rgb(0, 38, 48);
}

.home--user__right button {
  height: 70%;
  width: 30%;
}
nav a.router-link-exact-active {
  color: rgb(59, 236, 213);
  text-decoration-line: underline;
}
.home--routes__left {
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
}
.home--user__right {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
}
.home--user__right p {
  font-size: 0.8rem;
}
/*delete*/

@media screen and (min-width: 1024px) {
  nav {
    font-size: 1.5rem;
  }
  .home--user__right p {
    font-size: 1.2rem;
  }
} ;
</style>
