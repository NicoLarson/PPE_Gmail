<?php

require_once('Manager.php');

class Connection extends Manager
{

    function checkLoginPassword($inputMail, $inputPassword)
    {
        $db = $this->dbConnect();
        $req = $db->query("SELECT * FROM user_mail WHERE mail = '" . $inputMail . "'");

        $data = $req->fetch();
        $isPasswordCorrect = password_verify($inputPassword, $data['password']);

        if (!$data) {
            return '<h2>Veuillez remplir tous les champs!</h2>';
        } else {
            if ($isPasswordCorrect) {
                session_start();
                $_SESSION['id'] = $data['id'];
                $_SESSION['mail'] = $inputMail;
                return '<h2>Bonjour ' . $data['prenom'] . '. Vous êtes connecté !</h2>';
            } else {
                return '<h2>Erreur identifiant ou mot de passe !</h2>';
            }
        }
    }

    function logIn()
    {
        if (isset($_POST['mail'], $_POST['password'])) {
            return  $this->checkLoginPassword(htmlspecialchars($_POST['mail']), htmlspecialchars($_POST['password']));
        } else {
            return "<h2>Bienvenue dans votre espace.</h2>";
        }
    }
}
