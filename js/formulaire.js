document.addEventListener('DOMContentLoaded', () => {

    const submitBtn = document.querySelector('footer form fieldset input:last-child')

    let nameRegex = /^[a-z ,.'-]+$/i
    let mailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
    let passwordRegex = /^[a-zA-Z!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{6,30}$/

    let form = document.querySelector('footer form')
    let addWarning = document.createElement('p')

    let signInForm = {
        name: document.querySelector('#name'),
        firstName: document.querySelector('#firstName'),
        mail: document.querySelector('#mail'),
        password: document.querySelector('#password'),
        formVerification: () => {
            if (this.name.value == '' || this.firstName.value == '' || this.mail.value == '' || this.password.value == '') {
                addWarning.innerText = "Veuillez remplir tous les champs"
                addWarning.classList.add("appear")
                return false
            } else if (nameRegex.test(this.name.value) && nameRegex.test(this.firstName.value) && mailRegex.test(this.mail.value) && passwordRegex.test(this.password.value)) {
                sessionStorage.setItem("name", this.name.value)
                sessionStorage.setItem("firstName", this.firstName.value)
                sessionStorage.setItem("mail", this.mail.value)
                sessionStorage.setItem("password", this.password.value)
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
        e.preventDefault()
        console.log(signInForm.name.value + "   " + signInForm.mail.value)
        signInForm.formVerification() ? document.location.assign("connection.html") : false
    })

    // Warning
    addWarning.classList.add("warning")
    form.prepend(addWarning)




})