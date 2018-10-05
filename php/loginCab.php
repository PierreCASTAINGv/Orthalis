<?php

//header('Access-Control-Allow-Origin: *');

// #############################################################################
//
// #####  pierre@ : Recevoir, sécuriser, préparer et exécuter une requête ######
//
// #############################################################################


// ############  si erreurs -> affichage ###########

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

// ############  on récupère le code cabinet  ###########

$log = htmlspecialchars($_POST['cabinet']);

// ############  paramètres connexion à la BDD ###########

$host = "";
$dbname = "";
$user = "";
$passwd = "";
//$charset = "utf8mb4";

$dhn = "mysql:host=$host;dbname=$dbname";

$options = [
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES UTF8',
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false
];

// ############ Connexion à la BDD (si échec -> msg erreur) ###########

try
{
    $connect = new PDO($dhn, $user, $passwd, $options);
}
catch (Exception $e)
{

    die('Erreur : ' . $e->getMessage() . '<br /> N° : <span style="color:red">' . $e->getCode() . '</span>'
    );
}

// ############ Préparation et exécution de la requête ###########

$sql = "SELECT nom_cabinet
        FROM cabinet
        WHERE nom_cabinet = :nom_cabinet";

$state = $connect->prepare($sql);

$state->bindParam(':nom_cabinet', $log, PDO::PARAM_STR);

$state->execute();
//$result = $state->fetch(PDO::FETCH_ASSOC);

// ############ to do suivant résultat ###########

if ($state->rowCount() > 0) {  

    $resp = 'good';

} else { 

   $resp = 'error';
}

echo json_encode(['result' => $resp]);

// ########### Fermeture connexion à la BDD ###########

$state->closeCursor();

?>