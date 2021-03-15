document.addEventListener('DOMContentLoaded', () => {

    const submitBtn = document.querySelector('footer form fieldset input:last-child')

    let nameRegex = /^[a-z ,.'-]+$/i
    let mailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
    let passwordRegex = /^[a-zA-Z!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{6,30}$/

    let form = document.querySelector('footer form')

    let addWarning = document.createElement('p')

    let addInSessionStorage = (name, firstName, mail, password) => {
        sessionStorage.setItem("name", name)
        sessionStorage.setItem("firstName", firstName)
        sessionStorage.setItem("mail", mail)
        sessionStorage.setItem("password", password)
    }

    let signInForm = {
        nom: document.querySelector('#nom'),
        firstName: document.querySelector('#firstName'),
        mail: document.querySelector('#mail'),
        password: document.querySelector('#password'),
        formVerification: () => {
            if (this.nom.value == '' || this.firstName.value == '' || this.mail.value == '' || this.password.value == '') {
                addWarning.innerText = "Veuillez remplir tous les champs"
                addWarning.classList.add("appear")
                return false
            } else if (!(nameRegex.test(this.nom.value) && nameRegex.test(this.firstName.value) && mailRegex.test(this.mail.value) && passwordRegex.test(this.password.value))) {
                addWarning.innerText = "Veuillez verifier vos saisis"
                addWarning.classList.add("appear")
                return false
            } else {
                addInSessionStorage(this.nom.value, this.firstName.value, this.mail.value, this.password.value)
                addWarning.classList.remove("appear")
                return true

            }
        }
    }

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        signInForm.formVerification() ? document.location.assign("connection.html") : false
    })

    // Warning
    addWarning.innerText = "Veuillez remplir tous les champs"
    addWarning.classList.add("warning")
    form.prepend(addWarning)




})