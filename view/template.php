<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Description" content="Nicolas Yang - PPE BTS SIO SLAM2 - Gmail">
    <title>Gmail</title>
    <link rel="shortcut icon" href="./public/image/mail.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./public/css/reset.css">
    <link rel="stylesheet" href="./public/css/style.css">
</head>

<body>
    <header>
        <h1><img src="./public/image/mail.png" alt=""> Gmail</h1>
        <nav>
            <ul>
                <li><a href="#" class="clickLight">Pour les pros</a></li>
                <li><a href="index.php?action=logIn" class="clickLight">Connexion</a></li>
                <li><a href="<?php $_SERVER['REQUEST_URI'] != '/index.php' ?  print "index.php?action=signIn#footer" : print "#footer"; ?>" class="clickLight">Créer un compte</a></li>
            </ul>
        </nav>
    </header>
    <?= $content ?>
    <script src="./public/js/navBar.js"></script>
    <script src="./public/js/formulaire.js"></script>

</body>

</html>