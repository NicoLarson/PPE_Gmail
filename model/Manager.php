<?php

class Manager
{
    protected function dbConnect()
    {
        try {
            $db = new PDO('mysql:host=localhost;dbname=user_inscription', 'nicolas', 'nicolas', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            return $db;
        } catch (Exception $e) {
            die('Erreur: ' . $e->getMessage());
        }
    }
}
