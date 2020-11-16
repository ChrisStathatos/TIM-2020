<template>
  <div>
    <profs></profs>
 
  </div>
</template>

<script>
module.exports = {
  name: "app-prof",
  components: {
    profs: httpVueLoader("js/profs.vue"),
    
  },
  data() {
    return {
      affiche: false,
    };
  },
};
</script>

<style>
</style>