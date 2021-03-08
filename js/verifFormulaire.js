document.addEventListener('DOMContentLoaded', () => {

    const submitBtn = document.querySelector('footer form fieldset input:last-child')

    let name = document.querySelector('#name')
    let firstName = document.querySelector('#firstName')
    let mail = document.querySelector('#mail')
    let password = document.querySelector('#password')


    let formControl = (name, firstName, mail, password) => {
        this.name = name,
            this.firstName = firstName,
            this.mail = mail,
            this.password = password
    }

    // Regex test
    let nameRegex = /^[a-z ,.'-]+$/i
    let mailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
    let passwordRegex = /^[a-zA-Z!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{6,30}$/

    // Vérifier formulaire
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (name.value == '' || firstName.value == '' || mail.value == '' || password.value == '') {
            addWarning.innerText = "Veuillez remplir tous les champs"
            addWarning.classList.add("appear")
        } else if (nameRegex.test(name.value) && nameRegex.test(firstName.value) && mailRegex.test(mail.value) && passwordRegex.test(password.value)) {
            addWarning.classList.remove("appear")
            document.location.assign("connection.html")
        } else {
            addWarning.innerText = "Veuillez verifier vos saisis"
            addWarning.classList.add("appear")
        }
    })



    // Warning
    let form = document.querySelector('footer form')
    let addWarning = document.createElement('p')
    addWarning.classList.add("warning")
    form.prepend(addWarning)

})