<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{legenda}}</h2>

    <input type="text" v-bind:value="legenda" />
    <!-- OU -->
    <!-- <input type="text" :value="legenda" /> -->
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data: () => ({ legenda: "Estou no Vue" })
};
</script>

<style>
</style>