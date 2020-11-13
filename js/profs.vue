<template>
  <div>
      <section v-for="(prof,index) in lesProfs" :key="index">
          <!-- <img :src="{{prof.photo}}" alt=""> -->
          <h1>{{prof.nom}}</h1>
          <h2></h2>
          <vue-markdown></vue-markdown>
      </section>
  </div>
</template>

<script>
module.exports = {
    name:"profs",
    data() {
        return {
            lesProfs : null
        }
    },
    created() {
        fetch("data/enseignants.json")
        .then(res => res.json())
        .then(lesDonnes => this.lesProfs = lesDonnes)
    }
}
</script>

<style>

</style>