<template>
  <div>
    <h1>Session 1</h1>
   
    <compteur></compteur>
    <cours ></cours>
  </div>
</template>

<script>
module.exports = {
  name: "app",
  components: {
    cours: httpVueLoader("js/cours.vue"),
  },
  data() {
    return {
      affiche: false,
    };
  },
};
</script>

<style>
.yeet {
    position: absolute;
    top: 50%;
    left: 25%;
    width: 20vw;
    height: 30vh;
    z-index: 69;
    background-color: white;
}

</style>
