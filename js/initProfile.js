
import { InfosProfil } from './InfosProfil.js';

class Init {

    constructor() {
      
            this.myObj = JSON.parse(localStorage.getItem('infopatient'));
            this.page = new InfosProfil(this.myObj);
        }
    }

var init = new Init();
