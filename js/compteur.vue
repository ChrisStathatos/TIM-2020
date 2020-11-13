<template>
  <div>
      <h1>allo</h1>
      <h2>savez-vous compter ?</h2>
      <h3>{{ chiffre }}</h3>
      <button v-on:click="chiffre++">cliquer !</button>
  </div>
</template>

<script>
module.exports = {
    name : "compteur",
    data() {
        return {
            chiffre : 0
        }
    }
}
</script>

<style>

</style>