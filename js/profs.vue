<template>
  <div>
      <section v-for="(profs,index) in lesProfs" :key="index">
   <div :id="'#' + index + 'profs'" v-for="(profs,index) in lesProfs" :key="index" >


   <div id="popup">
            <div class="boitePortraitPopup" ><img class="imgProfPopup" :src="profs.photo"  alt=""></div>
            <h3 id="nomProf">{{profs.nom}}</h3>
            <h4 id="courrielProf">{{profs.courriel}}</h4>
            <p id="description">{{profs.description}}</p>
            <h5 id="coursDonnes">Cours donnés :...</h5>
        </div>

   </div>
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