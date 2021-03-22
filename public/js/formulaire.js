document.addEventListener('DOMContentLoaded', () => {

    const submitBtn = document.querySelector('footer form fieldset input:last-child')

    let nameRegex = /^[a-z ,.'-]+$/i
    let mailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
    let passwordRegex = /^[a-zA-Z!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{6,30}$/

    let form = document.querySelector('footer form')

    let addWarning = document.createElement('p')


    let addInSessionStorage = (inputName, inputFirstName, inputMail, inputPassword) => {
        sessionStorage.setItem("lastName", inputName)
        sessionStorage.setItem("firstName", inputFirstName)
        sessionStorage.setItem("mail", inputMail)
        sessionStorage.setItem("password", inputPassword)
    }


    let signInForm = {
        lastName: document.querySelector('#lastName'),
        firstName: document.querySelector('#firstName'),
        mail: document.querySelector('#mail'),
        password: document.querySelector('#password'),
        formVerification: () => {
            if (this.lastName.value == '' || this.firstName.value == '' || this.mail.value == '' || this.password.value == '') {
                addWarning.innerText = "Veuillez remplir tous les champs"
                addWarning.classList.add("appear")
                return false
            } else if (nameRegex.test(this.lastName.value) && nameRegex.test(this.firstName.value) && mailRegex.test(this.mail.value) && passwordRegex.test(this.password.value)) {
                addInSessionStorage(this.lastName.value, this.firstName.value, this.mail.value, this.password.value)
                addWarning.classList.remove("appear")
                return true
            } else {
                addWarning.innerText = "Veuillez verifier vos saisis"
                addWarning.classList.add("appear")
                return false
            }
        }
    }



    submitBtn.addEventListener('click', (e) => {
        signInForm.formVerification() ? document.location.assign("index.php?action=logIn") : e.preventDefault()
    })

    // Warning
    addWarning.innerText = "Veuillez remplir tous les champs"
    addWarning.classList.add("warning")
    form.prepend(addWarning)




})