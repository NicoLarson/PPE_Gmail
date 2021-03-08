document.addEventListener('DOMContentLoaded', () => {
    let btnSignIn = document.querySelector('header nav ul li:last-child a')

    let btnSubmit = document.querySelector('form input:last-child')
    let loginInput = document.querySelector('#login')
    let passwordInput = document.querySelector('#password')

    let message = document.querySelector('main section h2')

    let sessionFirstName = sessionStorage.getItem('firstName')
    let sessionMail = sessionStorage.getItem('mail')
    let sessionPassword = sessionStorage.getItem('password')

    btnSignIn.addEventListener('click', () => {
        sessionStorage.clear()
    })

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        message.classList.contains('error') ? message.classList.remove('error') : true;
        if ((loginInput.value == sessionFirstName || loginInput.value == sessionMail) && passwordInput.value == sessionPassword) {
            message.classList.add('appear')
            message.innerHTML = "Bonjour " + sessionFirstName + "!"
        } else if (loginInput.value == "") {
            message.classList.add('error')
            message.innerHTML = "Veuillez remplir le champ login"
        } else if (loginInput.value != (sessionFirstName || sessionMail)) {
            message.classList.add('error')
            message.innerHTML = "Login invalide"
        } else if (passwordInput.value != sessionPassword) {
            message.classList.add('error')
            message.innerHTML = "Mot de passe incorrecte"
        }
    })
})