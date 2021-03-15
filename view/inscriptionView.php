<?php
ob_start();
?>

<main>
    <section class="sign-in-page">
        <h2>Retrouvez la fluidité et la simplicité de Gmail sur tous vos appareil</h2>
        <a href="#footer">Crée un compte</a>
    </section>
</main>
<footer id="footer">
    <h2>Une boîte de reception entièrement repensée</h2>
    <p>Avec les nouveaux onglets personnalisables, repérez immédiatement les nouveaux messages et choisissez ceux
        que vous souhaitez lire en priorité.</p>
    <form action="index.php?action=logIn" method="post">
        <?= $addUser->addUser() ?>
        <fieldset>
            <legend>Créer un compte</legend>
            <label for="name">Nom *</label>
            <input type="text" name="name" id="name" placeholder="Votre nom" aria-required="true">
            <label for="firstName">Prénom *</label>
            <input type="text" name="firstName" id="firstName" placeholder="Votre prenom" aria-required="true">
            <label for="mail">Mail *</label>
            <input type="email" name="mail" id="mail" placeholder="Votre mail" aria-required="true">
            <label for="password">Choisir votre mot de passe *</label>
            <input type="password" name="password" id="password" placeholder="Votre mot de passe" aria-required="true">
            <input type="submit" value="Valider votre compte">
        </fieldset>
    </form>

    <a href="#footer" aria-hidden="true" tabindex='-1'><img src="./public/image/arrow.png" alt="arrow"></a>
</footer>
<?php
$content = ob_get_clean();
require('template.php');
?>