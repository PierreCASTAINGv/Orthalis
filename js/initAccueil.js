
import { RequeteAjax } from "./req_ajax.js";
import { MajAccueil, InfosCabinet } from "./infosAccueil.js";

class Init {

    constructor() {
        this.xhr = new RequeteAjax('./json/patient.json', 'json');
        this.xhr.xmlhttp.onload = () => {
            this.myObj = this.xhr.xmlhttp.response;
            this.page = new MajAccueil(this.myObj);
            localStorage.setItem('infopatient', JSON.stringify(this.myObj));
        }
        this.xhrc = new RequeteAjax('./json/cabinet.json', 'json');
        this.xhrc.xmlhttp.onload = () => {
            this.myObjc = this.xhrc.xmlhttp.response;
            this.pagec = new InfosCabinet(this.myObjc);
            localStorage.setItem('infocabinet', JSON.stringify(this.myObjc));
        }
    }
}
var init = new Init();
