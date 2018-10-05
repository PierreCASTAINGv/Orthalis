export class HistPaiements {

    constructor(histPaiements) {
        this.histPaiements = histPaiements;
        this.ajout();
    }


    ajout() {
        for (let hist of this.histPaiements.paiements) {

            document.querySelector('#paiements').innerHTML +=
                `<div class="paiements">
                <p>${hist.date} : ${hist.montant} €</p>
            </div>`
        }
    }
}

export class HistoRdv {
    constructor(histRdv) {
        this.histRdv = histRdv;
        this.ajouter();
    }

    ajouter() {
        for (let rdv of this.histRdv.historiqueRendezvous) {
            document.querySelector('#rdvo').innerHTML +=
                `<li class="center">
                        <div class="collapsible-header headerintra Paiement">
                            Votre RDV du : <span>${rdv.date}</span>
                            <p><i class="material-icons">arrow_drop_down</i></p>
                        </div>
                        <div class="collapsible-body bodyintra">
                            <p>Avec le Dr : ${rdv.prenomPraticien} ${rdv.nomPraticien}</p>
                            <p>Acte : ${rdv.typeActe}</p>
                            <p>${rdv.message}</p>
                        </div>
                    </li>`
        }
    }
}

export class Solde {
    constructor(solde) {
        this.solde = solde;
        this.ajouter();
    }

    ajouter() {

        for (let sol of this.solde.echeances) {
            document.querySelector('#solde').innerHTML +=
                `<p id="echean">Date échéance : <span id="echeance">${sol.date}</span></p>
                <p id="sold"> SOLDE : <span id="solde">${sol.solde} €</span></p>`
        }
    }
}

export class Images {
    constructor(images) {
        this.images = images;
        this.imageProfil();
        this.imageDent();
    }

    imageProfil() {

            for (let img of this.images.photos) {
            if (img.lien == this.images.photos[0].lien) {
            document.getElementById('photoProfil').src = img.lien;
            document.querySelector('#imgClient').src = img.lien;
            }
        }
    }

    imageDent() {
        for (let desc of this.images.photos) {

          if (desc.lien == this.images.photos[0].lien) {
          
            document.querySelector('.cont_photo').innerHTML +=
            `<div class="photo_dent" style="display:none">
            </div>` 
          
        } else if (desc.lien == 0) {

            document.querySelector('.cont_photo').innerHTML +=
            `<div class="photo_dent">
                <div class="col s6 m6 l6">
                    <img src="./img/nophoto.png" alt="photo non disponible" class="z-depth-2 tooth responsive-img materialboxed" id="photoFaceAv">
                        <p class="info_img_dent"> 
                            <span class="age_soin">photo non disponible</span> 
                        </p>
                </div>  
            </div>`
        
        } else {

          document.querySelector('.cont_photo').innerHTML +=
            `<div class="photo_dent">
                <div class="col s6 m6 l6">
                    <img src="${desc.lien}" alt="" class="z-depth-2 tooth responsive-img materialboxed" id="photoFaceAv">
                        <p class="info_img_dent"> 
                            <span class="age_soin">${desc.description}</span> 
                        </p>
                </div>  
            </div>`
                            var elems = document.querySelectorAll('.materialboxed');
                            var instances = M.Materialbox.init(elems);
            }
        }
    }
}
