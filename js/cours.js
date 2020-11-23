

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
                    const numeroSession = document.createElement("h1");
                    numeroSession.textContent = "Session " + i;
                    elUneSession.appendChild(numeroSession);

                    for (const unCours of uneSession) {
                     if(unCours.length>1){
                         
                        const elUnCours = document.createElement("div")
                        elUnCours.innerHTML = `
                            <div class="interior">
                                <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nom}</p></a>
                                <div class="btnChoix"></div
                            </div>
                            <div id="${unCours[0].nom}" class="modal-window">
                            <div>
                            <a href="#" title="Close" class="modal-close">X</a>
                            <h1>${unCours[0].nom}</h1>
                    
                            <div class="ponderation">${unCours[0].ponderation}</div>
                            <div> Préalabe: ${unCours[0].prealabe}</div>
                            <vue-markdown>${unCours[0].description}</vue-markdown>
                        </div>
                     </div>`;
                        elUneSession.appendChild(elUnCours);
                     }
                     else{
                        const elUnCours = document.createElement("div")
                        elUnCours.innerHTML = `
                            <div class="interior">
                                <a class="btn" href="#${unCours[0].nom}"><p class="textBtn">${unCours[0].nomCourt}</p></a>
                            </div>
                            <div id="${unCours[0].nom}" class="modal-window">
                            <div>
                            <a href="# +${unCours[0].nom}" title="Close" class="modal-close">X</a>
                            <h1>${unCours[0].nom}</h1>
                            <div class="ponderation">${unCours[0].ponderation}</div>
                            <div> Préalabe: ${unCours[0].prealabe}</div>
                            <vue-markdown>${unCours[0].description}</vue-markdown>
                        </div>
                    </div>`;
                        elUneSession.appendChild(elUnCours);

                    }
                }

                    ulCours.appendChild(elUneSession);
                    i++
                }

            })
