
// #############################################################################
//
// #####  pierre@ : Voici une belle requête fetch qui attend sa promesse  ######
//
// #############################################################################


// #######  button submit (connexion cabinet) : lauch loginCab function  ####### 

function loginCab(event) {

    event.preventDefault();

    const cab = document.querySelector("#codeCabinet").value;
    const cabi = 'cabinet=' + cab;
    const url = "//www.fabriquenumerique.fr/OrthalisDemo/loginCab.php";

    const params = {

        method: 'POST',
        headers: {

            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: cabi
    }


    fetch(url, params

    ).then((res) => {

        return res.json()

    }).then((data) => {

        if (data.result == 'error') {

            alert('###  Code erroné ! réessayer...  ###');

        } else {

            window.location.href = 'accueil.html';
        }

    }).catch((error) => {
        console.log('Something is no cool :', error);
    });
}

// ########### on submit button, lauch loginCab function #########

document.querySelector('form').addEventListener('submit', loginCab);
