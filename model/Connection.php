<?php

require_once('Manager.php');

class Connection extends Manager
{

    function checkLoginPassword($inputLogin, $inputPassword)
    {
        $db = $this->dbConnect();
        $req = $db->query("SELECT * FROM user_mail WHERE mail = '" . $inputLogin . "'OR nom = '" . $inputLogin . "'");

        $data = $req->fetch();
        $isPasswordCorrect = password_verify($inputPassword, $data['password']);

        if (!isset($inputLogin, $inputPassword)) {
            return '<h2>Veuillez remplir tous les champs!</h2>';
        } elseif ($isPasswordCorrect) {
            session_start();
            $_SESSION['id'] = $data['id'];
            $_SESSION['login'] = $inputLogin;
            return '<h2>Bonjour ' . $data['prenom'] . '. Vous êtes connecté !</h2>';
        } else {
            return '<h2>Erreur identifiant ou mot de passe !</h2>';
        }
    }

    function logIn()
    {
        if (isset($_POST['login'], $_POST['password'])) {
            return  $this->checkLoginPassword(htmlspecialchars($_POST['login']), htmlspecialchars($_POST['password']));
        } else {
            return "<h2>Bienvenue dans votre espace.</h2>";
        }
    }
}
