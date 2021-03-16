<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.getData();
  },
   methods: {
    ...mapActions(["getData"])
  },
};
</script>

<style lang="scss">
// GLOBAL
body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
}
#app {
  overflow: hidden;
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>

<style lang="scss" scoped>
#app {
  height: 100vh;
  width: 100%;
}
</style>
