<?php

require_once('./model/Manager.php');

class Inscription extends Manager
{

    function isEmailExist($inputEmail)
    {
        $db = $this->dbConnect();
        $reqEmail = $db->query("SELECT mail FROM user_mail WHERE mail = '" . $inputEmail . "'");
        $data =  $reqEmail->fetch();
        return $inputEmail == $data['mail'];
    }
    function insertLine($inputName, $inputFirstName,  $inputMail, $inputPassword,)
    {
        $db = $this->dbConnect();

        $req = $db->prepare('INSERT INTO user_mail (nom, prenom, mail, password) VALUES( :nom, :prenom, :mail, :password)');
        return $req->execute(array(
            'nom' => $inputName,
            'prenom' => $inputFirstName,
            'mail' =>  $inputMail,
            'password' => password_hash($inputPassword, PASSWORD_DEFAULT)
        ));
    }

    function addUser()
    {
        if (isset($_POST['name'], $_POST['firstName'], $_POST['mail'], $_POST['password'])) {
            if ($this->isEmailExist($_POST['mail'])) {
                return "<p>Cette email est déjà utilisé.</p>";
            } else {
                $this->insertLine($_POST['name'], $_POST['firstName'], $_POST['mail'], $_POST['password']);
                return "<p>insertion ligne success.</p>";
            }
        }
    }
}
