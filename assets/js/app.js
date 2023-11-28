const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const btnSubmit = document.getElementById('btn-submit')
const inputField = document.querySelector('.input-field')

//desisti disso aqui

btnSubmit.addEventListener('click', () =>{
    checkName()
    checkEmail()
    checkPassword()
})

function checkName(){
    if(firstNameInput.value.trim() = ''){
        alert("a")
        firstNameInput.classList.add('invalid')
    }else{
        firstNameInput.classList.remove('invalid')
    }
}

function checkEmail(){
    alert("b")
}

function checkPassword(){
    alert("C")
}