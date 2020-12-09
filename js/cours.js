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

      var boutonSession = document.createElement("div");
      boutonSession.classList.add("fleche");
      boutonSession.classList.add(indexSession);
      elUneSession.appendChild(boutonSession);

      const elLesCours = document.createElement("div");
      elLesCours.classList = "lesCours";
      const numeroSession = document.createElement("h1");
      numeroSession.textContent = "Session " + i;
      elUneSession.appendChild(numeroSession);
      var lignes = document.createElement("div");
      lignes.classList = "lignes";
      elUneSession.appendChild(lignes);

      var boutonSession = document.createElement("div");
      boutonSession.classList = "bouton";
      elUneSession.appendChild(boutonSession);

      

      for (const unCours of uneSession) {
        if (unCours.length > 1) {
          const elUnCours = document.createElement("div");
          elUnCours.innerHTML = `
                        <div class="dropdown">
                            <div class="interior"> 
                                <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nomCourt}</p></a>
                                <span class="btnChoix"></span>
                                <span class="btnChoix"></span>
                            </div>
                            <div id="${unCours[0].nom}" class="modal-window">
          <div>
          <a href="# +${unCours[0].nom}" title="Close" class="modal-close">X</a>
          
          <div class="container">
          <div>
          <h1 class="titre">${unCours[0].nom}<br><p class="ponderation">${unCours[0].ponderation}</p></h1>
          
          </div>
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
          elLesCours.appendChild(elUnCours);
        } else {
          const elUnCours = document.createElement("div");
          elUnCours.innerHTML = `
                        <ul class="dropdown ${indexSession}">
                        <div class="interior"> 
                            <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nomCourt}</p></a>
                        </div>
                        <div id="${unCours[0].nom}" class="modal-window" id="cover">
                        <div>
                        <a href="# +${unCours[0].nom}" title="Close" class="modal-close">X</a>
                        
                        <div class="container">
                        <div>
                        <h1 class="titre">${unCours[0].nom}<br><p class="ponderation">${unCours[0].ponderation}</p></h1>
                        
                        </div>
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
          elLesCours.appendChild(elUnCours);
        }
      }
      elUneSession.appendChild(elLesCours);

      let dropdownBtn = document.querySelectorAll(".fleche");
      console.log(dropdownBtn);
      //let menuContent = document.querySelectorAll('.dropdown');

      for (const dropD of dropdownBtn) {
        if (dropD.classList.contains(indexSession)) {
          document.querySelector(`ul ${indexSession}`).display = "block";
        }
      }

      ulCours.appendChild(elUneSession);
      i++;
    }
  });
