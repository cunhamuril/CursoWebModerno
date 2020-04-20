<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{legenda}}</h2>

    <!-- v-model: Two way data binding-->
    <input type="text" v-model="legenda" />

    <!-- <input type="text" v-bind:value="legenda" /> -->
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
      this.legenda = "Estou no Vue";
    }
  }
};
</script>

<style>
</style>