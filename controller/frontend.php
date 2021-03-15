<?php

require('./model/Inscription.php');
require('./model/Connection.php');


function logIn()
{
    $addUser = new Inscription;
    $addUser->addUser();
    $connectUser = new Connection;
    require('./view/connexionView.php');
}

function signIn()
{
    $addUser = new Inscription;
    require('./view/inscriptionView.php');
}
