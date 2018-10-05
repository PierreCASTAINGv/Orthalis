export class InfosProfil {
    constructor(profil) {
        this.profil = profil;
        this.recupererInfosProfil();
        this.imageProfil();
    }

    recupererInfosProfil() {

            for (let civil of this.profil.etatCivil) {
            
            document.getElementById('prenom').value = civil.prenom;
            document.getElementById('nom').value = civil.nom;
            document.getElementById('dateNaissance').value = civil.dateNaissance;
            document.getElementById('telephone1').value = civil.telephones[0];
            document.getElementById('telephone2').value = civil.telephones[1];
            document.getElementById('email').value = civil.email;
            document.querySelector('.textHeader').innerHTML += 
            `<h4 class="TextNomUtilisateur center orange-text">${civil.prenom} ${civil.nom}</h4>`
        }
    }

    imageProfil() {

            for (let img of this.profil.photos) {
            if (img.lien == this.profil.photos[0].lien) {
            document.getElementById('photoProfil').src = img.lien;
            document.querySelector('#imgClient').src = img.lien;
            }
        }
    }
}