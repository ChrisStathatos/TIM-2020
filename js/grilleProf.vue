<template>
  <div class="section-profs" v-on:click.self="enleverpopup()">
    <div class="grid-equipe">
      <div
        v-for="(profs, index) in lesProfs"
        :key="index"
        class="boite-photo"
        :class="'prof' + ++index"
      >
        <img
          class="imgEquipe"
          :title="profs.nom"
          v-on:click="popup(profs)"
          :src="profs.photo"
          alt=""
        />
      </div>
    </div>
    <div id="ligneHorizontale"></div>
    <profs :unprofesseur="unprof" v-if="affichemodal"></profs>
  </div>
</template>

<script>
module.exports = {
  name: "grille-prof",
  components: {
    profs: httpVueLoader("js/profs.vue"),
  },
  data() {
    return {
      lesProfs: null,
      unprof: null,
      affichemodal: false,
      lesCours: null
    };
  },
  created() {
    fetch("data/enseignants.json")
      .then((res) => res.json())
      .then((lesDonnes) => (this.lesProfs = lesDonnes));
  },
  methods: {
    popup(professeur) {
      this.unprof = professeur;
      this.affichemodal = !this.affichemodal;
    },
    enleverpopup() {
      this.affichemodal = false;
    }
  },

};
</script>

<style></style>
