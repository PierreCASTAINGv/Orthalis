export class MajAccueil {

    constructor(accueil) {
        this.accueil = accueil;
        this.ajout();
    }

    ajout() {

        document.querySelector('#imgUser').setAttribute('src', this.accueil.photos[0].lien)

        for (let note of this.accueil.notifications) {

            if (note.niveauUrgence == 1) {

                // if (note.nomPatient == this.accueil.notice[0].nomPatient) {

                document.querySelector('#notifs').innerHTML +=
                    `<div class="col s12 m8 offset-m2 l6 offset-l3 first_rdv">
                            <div class="blink card-panel card-panel-notif grey lighten-5 z-depth-2 first_rdv">
                                <div class="row valign-wrapper first_rdv">
                                    <div class="phtdoc col s2 first_rdv">
                                    <img src="./img/utilisateur.jpg" alt="" class="circle responsive-img"></img>
                                    </div>
                                    <div class="Notif col s10 first_rdv">
                                    <p class="pnotif prenom">Sidonie</p>
                                    <p class="pnotif">${note.message}</p>
                                    <p class="pnotif">${note.typeActe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`

            } else {

                document.querySelector('#notifs').innerHTML +=
                    `<div class="col s12 m8 offset-m2 l6 offset-l3 other_rdv" style="background-color: #fdb74d !important">
                            <div class="card-panel card-panel-notif grey lighten-5 z-depth-2 other_rdv" style="background-color: #fdb74d !important">
                                <div class="row valign-wrapper">
                                    <div class="phtdoc col s2">
                                        <img src="./images/patient2.png" alt="" class="circle responsive-img">
                                    </div>
                                    <div class="Notif col s10">
                                    <p class="pnotif prenom">Eléonore</p>
                                    <p class="pnotif">${note.message}</p>
                                    <p class="pnotif">${note.typeActe}</p>
                                
                                    </div>
                                </div>
                            </div>
                        </div>`
            }

        }
    }
}

// Classe InfosCabinet, se sert de la partie cabinet de la bdd pour remplir son contenu
// Export rend cette classe publique, elle peut être importée
export class InfosCabinet {

    constructor(cabinet) {
        this.cabinet = cabinet;
        this.recupererInfosCabinet();
    }

    recupererInfosCabinet() {
        document.getElementById('logo_d').setAttribute('src', this.cabinet.logoCab);
        document.getElementById('nameCabinet').textContent = this.cabinet.description;
        document.getElementById('imagHeader').setAttribute('src', this.cabinet.image[0]);
    }
}
