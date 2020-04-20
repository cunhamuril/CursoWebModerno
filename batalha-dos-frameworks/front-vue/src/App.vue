<template>
  <div id="app">
    <Home msg="Componente Home" />
    <Home msg="Do Vue" />
  </div>
</template>

<script>
import Home from "./views/home/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
