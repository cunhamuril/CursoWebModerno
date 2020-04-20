<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{legenda}}</h2>

    <input type="text" v-bind:value="legenda" />
    <!-- OU -->
    <!-- <input type="text" :value="legenda" /> -->

    <button @click="resetLegenda">Reset Legenda</button>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data: () => ({ legenda: "Estou no Vue" }),
  methods: {
    resetLegenda() {
      console.log("Evento de click no Vue");
    }
  }
};
</script>

<style>
</style>