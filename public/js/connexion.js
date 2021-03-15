document.addEventListener('DOMContentLoaded', () => {
    let btnSignIn = document.querySelector('header nav ul li:last-child a')
    let btnSubmit = document.querySelector('form input:last-child')

    let message = document.querySelector('main section h2')

    let sessionName = sessionStorage.getItem('name')
    let sessionFirstName = sessionStorage.getItem('firstName')
    let sessionMail = sessionStorage.getItem('mail')
    let sessionPassword = sessionStorage.getItem('password')

    message.innerHTML = "Bonjour " + sessionFirstName + "!"

    let logInForm = {
        login: document.querySelector('#login'),
        password: document.querySelector('#password'),
        logInVerification: () => {
            message.classList.contains('error') ? message.classList.remove('error') : true;            
            if ((login.value == sessionFirstName || login.value == sessionMail || sessionName.value == sessionName) && password.value == sessionPassword) {
                message.classList.add('success')
                message.innerHTML = "Vous êtes connécté"
                return true
            } else if (login.value == "") {
                message.classList.add('error')
                message.innerHTML = "Veuillez remplir le champ login"
                return false
            } else if (login.value != (sessionFirstName || sessionMail)) {
                message.classList.add('error')
                message.innerHTML = "Login invalide"
                return false
            } else if (password.value != sessionPassword) {
                message.classList.add('error')
                message.innerHTML = "Mot de passe incorrecte"
                return false
            }
        }
    }



    btnSignIn.addEventListener('click', () => {
        sessionStorage.clear()
    })

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        logInForm.logInVerification()
    })


})