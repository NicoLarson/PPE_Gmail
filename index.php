<?php

require('./controller/frontend.php');

if (isset($_GET['action'])) {
    if ($_GET['action'] == 'logIn') {
        logIn();
    } elseif ($_GET['action'] == 'signIn') {
        signIn();
    }
} else {
    signIn();
}
