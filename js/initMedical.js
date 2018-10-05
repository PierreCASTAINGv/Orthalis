
import { HistPaiements, HistoRdv, Solde, Images } from "./dossierMedical.js";

class Init {

    constructor() {
    
            this.myObj = JSON.parse(localStorage.getItem('infopatient'));
            this.facture = new HistPaiements(this.myObj);
            this.rdv = new HistoRdv(this.myObj);
            this.solde = new Solde(this.myObj);
            this.image = new Images(this.myObj);
        } 
}
var init = new Init();