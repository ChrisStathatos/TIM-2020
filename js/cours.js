

fetch("data/cours.json")
            .then(reponse => reponse.json())
            .then(lesCours => {
                const ulCours = document.querySelector("#listeDesCours")
                // console.log(lesCours)

                for (const [indexSession, uneSession] of Object.entries(lesCours)) {
                    // console.log(typeof uneSession)
                    const elUneSession = document.createElement("div")
                    elUneSession.classList = "sessions";
                    for (const unCours of uneSession) {
                        const elUnCours = document.createElement("div")

                        elUnCours.innerHTML = `
                        <div class="interior">
                            <a class="btn" href="#${unCours.nom}"><p class="textBtn">${unCours.nom}</p></a>
                        </div>
                        <div id="${unCours.nom}" class="modal-window">
                <div>
                    <a href="#" title="Close" class="modal-close">X</a>
                    <h1>${unCours.nom}</h1>
                    
                    <div class="ponderation">${unCours.ponderation}</div>
                    <div> Préalabe: ${unCours.prealabe}</div>
                    <vue-markdown>${unCours.description}</vue-markdown>
                    </div>
                </div>`;
                        elUneSession.appendChild(elUnCours);

                    }

                    ulCours.appendChild(elUneSession);
                }

            })
