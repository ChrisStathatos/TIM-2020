<template>
  <div>
        <div id="popup">
          <div class="boitePortraitPopup">
            <img class="imgProfPopup" :src="unprofesseur.photo" alt="" />
          </div>
          <h3 id="nomProf">{{ unprofesseur.nom }}</h3>
          <h4 id="courrielProf">{{ unprofesseur.courriel }}</h4>
          <p id="description">{{ unprofesseur.description }}</p>
          <h5 id="coursDonnes">Cours donnés :...</h5>
        </div>
      </div>
   
  
</template>

<script>
module.exports = {
  name: "profs",
 props: {
     unprofesseur: Object,
 }
};
</script>

<style></style>
