<?php
ob_start();
?>
<main>
    <section class="login-page">
        <?= $connectUser->logIn() ?>
        <form action="index.php?action=logIn" method="post">
            <fieldset>
                <legend>Connectez vous à votre compte</legend>
                <label for="login">Mail ou login*</label>
                <input type="text" name="login" id="login" placeholder="Votre mail" aria-required="true">
                <label for="password">Mot de passe *</label>
                <input type="password" name="password" id="password" placeholder="Votre mot de passe" aria-required="true">
                <input type="submit" value="Connection à votre compte">
            </fieldset>
        </form>
    </section>
</main>
<?php
$content = ob_get_clean();
require('template.php');
?>