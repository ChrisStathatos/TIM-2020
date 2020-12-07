fetch("data/cours.json")
  .then((reponse) => reponse.json())
  .then((lesCours) => {
    const ulCours = document.querySelector("#listeDesCours");
    // console.log(lesCours)
    var i = 1;
    for (const [indexSession, uneSession] of Object.entries(lesCours)) {
      // console.log(typeof uneSession)
      const elUneSession = document.createElement("div");
      elUneSession.classList = "sessions";
      const numeroSession = document.createElement("h1");
      numeroSession.textContent = "Session " + i;
      elUneSession.appendChild(numeroSession);
      var lignes = document.createElement("div");
      lignes.classList = "lignes";
      elUneSession.appendChild(lignes);

      for (const unCours of uneSession) {
        if (unCours.length > 1) {
          const elUnCours = document.createElement("div");
          elUnCours.innerHTML = `
                        <ul class="dropdown ${indexSession}" >
                            <div class="interior"> 
                                <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nomCourt}</p></a>
                            </div>
                            <div id="${unCours[0].nom}" class="modal-window">
                            <div>
                            <a href="# +${unCours[0].nom}" title="Close" class="modal-close">X</a>
                            <div>
                            <h1 class="titre">${unCours[0].nom}</h1>
                            <p class="ponderation">${unCours[0].ponderation}</p>
                            </div>
                            <div class="container">
                            <p class="description" >${unCours[0].description}</p>
                            <img src="${unCours[0].photo}" class="imgCours" >
                            <div class="prerequis"> <p>Cours prérequis:</p> <br> <p>${unCours[0].prealabe}</p></div>
                            <div class="heures"> <p>Nombres d'heures:</p> <br> <p>${unCours[0].nombreHeure}</p></div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                  </ul>`;
          elUneSession.appendChild(elUnCours);
        } else {
          const elUnCours = document.createElement("div");
          elUnCours.innerHTML = `
                        <ul class="dropdown ${indexSession}" >
                        <div class="interior"> 
                            <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nomCourt}</p></a>
                        </div>
                        <div id="${unCours[0].nom}" class="modal-window">
                        <div>
                        <a href="# +${unCours[0].nom}" title="Close" class="modal-close">X</a>
                        <div>
                        <h1 class="titre">${unCours[0].nom}</h1>
                        <p class="ponderation">${unCours[0].ponderation}</p>
                        </div>
                        <div class="container">
                        <p class="description" >${unCours[0].description}</p>
                        <img src="${unCours[0].photo}" class="imgCours" >
                        <div class="prerequis"> <p>Cours prérequis:</p> <br> <p>${unCours[0].prealabe}</p></div>
                        <div class="heures"> <p>Nombres d'heures:</p> <br> <p>${unCours[0].nombreHeure}</p></div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
              </ul>`;
          elUneSession.appendChild(elUnCours);
        }
      }

      
      var boutonSession = document.createElement("div");
      boutonSession.classList.add("fleche");
      boutonSession.classList.add(indexSession);
      elUneSession.appendChild(boutonSession);

      let dropdownBtn = document.querySelectorAll('.fleche');
      
      //let menuContent = document.querySelectorAll('.dropdown');

      for (const dropD of dropdownBtn) {
        if (dropD.classList.contains(indexSession)) { 
            document.querySelector(`ul ${indexSession}`).display = "block";
            
         // ouvrir le display de la meme classe que celle de la fleche
      
        }}
     

      ulCours.appendChild(elUneSession);
      i++;
    }
  });
