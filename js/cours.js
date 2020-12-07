

fetch("data/cours.json")
            .then(reponse => reponse.json())
            .then(lesCours => {
                const ulCours = document.querySelector("#listeDesCours")
                // console.log(lesCours)
                var i = 1;
                for (const [indexSession, uneSession] of Object.entries(lesCours)) {
                    
                    // console.log(typeof uneSession)
                    const elUneSession = document.createElement("div");
                    elUneSession.classList = "sessions";
                    const elLesCours = document.createElement("div");
                    elLesCours.classList = "lesCours";
                    const numeroSession = document.createElement("h1");
                    numeroSession.textContent = "Session " +  i;
                    elUneSession.appendChild(numeroSession);
                    var lignes = document.createElement("div");
                    lignes.classList = "lignes";
                    elUneSession.appendChild(lignes);

                    var boutonSession = document.createElement("div");
                    boutonSession.classList = "bouton" ;
                    elUneSession.appendChild(boutonSession);

                    let dropdownBtn = document.querySelector('div');
                    let menuContent = document.querySelector('.dropdown');
                    dropdownBtn.addEventListener('click',()=>{
                       if(menuContent.style.display===""){
                          menuContent.style.display="block";
                       } else {
                          menuContent.style.display="";
                       }
                    })


                    for (const unCours of uneSession) {
                     if(unCours.length>1){
                        const elUnCours = document.createElement("div")
                        elUnCours.innerHTML = `
                        <div class="dropdown">
                            <div class="interior"> 
                                <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nomCourt}</p></a>
                            </div>
                            <div id="${unCours[0].nom}" class="modal-window">
                            <div>
                            <a href="# +${unCours[0].nom}" title="Close" class="modal-close">X</a>
                            <div>
                            <h1>${unCours[0].nom}</h1>
                            <p class="ponderation">${unCours[0].ponderation}</p>
                            </div>
                            <div class="container">
                            <p class="description" >${unCours[0].description}</p>
                            <img src="${unCours[0].photo}" class="imgCours" >
                            <div class="prerequis"> <p>Cours prérequis:</p> <br> <p>${unCours[0].prealabe}</p></div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                  </div>`;
                        elLesCours.appendChild(elUnCours);
                     }
                     else{
                        const elUnCours = document.createElement("div")
                        elUnCours.innerHTML = `
                    <div class="dropdown">
                            <div class="interior">
                                <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nomCourt}</p></a>
                            </div>
                            <div id="${unCours[0].nom}" class="modal-window">
                            <div>
                            <a href="# +${unCours[0].nom}" title="Close" class="modal-close">X</a>
                            <div>
                            <h1>${unCours[0].nom}</h1>
                            <p class="ponderation">${unCours[0].ponderation}</p>
                            </div>
                            <div class="container">
                            <p class="description" >${unCours[0].description}</p>
                            <img src="${unCours[0].photo}" class="imgCours" >
                            <div class="prerequis"> <p>Cours prérequis:</p> <br> <p>${unCours[0].prealabe}</p></div>
                            </div>
                            </div>
                            </div>
                        </div>
                     </div>
                    </div>`;
                        elLesCours.appendChild(elUnCours);

                    }
                }
                    elUneSession.appendChild(elLesCours)
                    ulCours.appendChild(elUneSession);
                    i++
                }

            })


           
               
             