<template>
  <div>
    <div v-for="(session,index) in listeCours" :key="index">
        <div :id="'#' + index + 'cours'" v-for="(cours,index) in session" :key="index" >
            <div class="interior" style=" margin:5%;">
                <a class="btn"  :href="'#' + cours.nom">{{cours.nom}} </a>
            </div>
        
        <!-- La fênetre de pop-up -->
            <div :id="cours.nom" class="modal-window">
                <div>
                    <a :href="'#' + index + 'cours'" title="Close" class="modal-close">X</a>
                    <h1>{{cours.nom}}</h1>
                    <div class="ponderation"> {{cours.ponderation}}</div>
                    <div >Préalable: {{cours.prealabe}}</div>
                    <vue-markdown class="description">{{cours.description}}</vue-markdown>
                      <div >{{cours.photo}}</div>
                    
                    
                </div>
            </div>
        </div>
    </div>
                
  </div>
</template>

<script>
module.exports = {
  name: "cours",
  data() {
    return { listeCours: null };
  },
  created() {
    fetch("data/cours.json")
      .then((reponse) => reponse.json())
      .then((lesCours) => (this.listeCours = lesCours));
  },
};
</script>

<style scoped lang="scss">
.modal-window {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.25);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    &:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
    &>div {
      width: 800px;
      height: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: #ffffff;
       border:#dfc516 0.8em solid;
    }
    
    header {
      font-weight: bold;
    }
    h1 {
      font-size: 200%;
      margin: 0 0 15px;
      color: #6a07d2;
      font-family: 'Montserrat',sans-serif;
    }
  }
  
  .modal-close {
    color:  #6a07d2;
    line-height: 50px;
    font-size: 50px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 70px;
    text-decoration: none;
    font-family: 'Montserrat',sans-serif;
    &:hover {
      color: black;
    }
  }
  
 
.ponderation{
      color: #6a07d2;
       font-size: 30px;
      font-family: 'Montserrat',sans-serif;
      
    }


.description{
  font-family: 'Poppins Light',sans-serif;
}

  a {
    color: white;
    font-family: 'Montserrat',sans-serif;
  }
  
  .container {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .modal-window div:not(:last-of-type) {
    margin-bottom: 15px;
  }
  
  
  .btn {
    background-color: #6a07d2;
    padding: 1em 1em;
    border-radius: 3px;
    text-decoration: none;
    i {
      padding-right: 0.3em;
    }
    width: 5em;
    height: 2em;
    transform:rotate(45deg);
    border:#dfc516 0.3em solid;
    // z-index: 2;
    // display: flex; 
    // justify-content: space-around;
    // align-items: center;
    a{
      transform:rotate(-90deg);
    }
    &:hover {
      background-color: #dfc516;
      border:#6a07d2 0.3em solid;
    }
  }
  
  
</style>