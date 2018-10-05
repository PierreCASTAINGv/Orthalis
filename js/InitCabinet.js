
import { InfosCabinet } from './InfosCabinet.js';

class Init {

    constructor() {
        
            this.myObj = JSON.parse(localStorage.getItem('infocabinet'));
            this.page = new InfosCabinet(this.myObj);
    }
}
var init = new Init();