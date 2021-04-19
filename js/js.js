const fields = document.querySelectorAll("[required]")
const spanError = document.querySelector("span.validation")
const email = document.getElementById('email')
const password = document.getElementById('password')
const subLogin = document.getElementById('sub-login')

/*Verfica se os campos estão vazios*/
function validationForm(){
    email.addEventListener("blur", () => {
        //Se desfocar com campo vazio
        if (email.value == '') {
            //ativa o alerta
            spanError.classList.add("alert", "error")
            spanError.innerHTML = 'O campo "email" é de preenchimento obrigatório!'
            //adiciona classe de focus com erro
            email.classList.add('focusError')
            email.focus()
        }
        //Se desfocar com campo preenchido
        else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf(".") - email.value.indexOf("@") == 1 || (email.value.length - 1) == email.value.indexOf(".")) {
            //ativa o alerta
            spanError.classList.add("alert", "error")
            spanError.innerHTML = 'O e-mail informado para autenticação, não é um e-mail válido'
            //adiciona classe de focus com erro
            email.classList.add('focusError')
            email.focus()        
        }else {
            //Input fica normal, sem box-shadow nenhum
            email.classList.add('blur')
            email.classList.remove('focusError')
            //Remove os alertas
            spanError.classList.remove("alert", "error")
            spanError.innerHTML = ''
        }
    })
    email.addEventListener("focus", () => {
        //Se focar com campo preenchido
        if (email.value != '') {
            //adiciona classe focus
            email.classList.add('focus')
            email.classList.remove('blur')
        }
    })
    
    password.addEventListener("blur", () => {
        //Se desfocar com campo vazio
        if (password.value == '') {
            //ativa o alerta
            spanError.classList.add("alert", "error")
            spanError.innerHTML = 'O campo "senha" é de preenchimento obrigatório!'
            //adiciona classe de focus com erro
            password.classList.add('focusError')
            password.focus()
        }
        //Se desfocar com campo preenchido
        else if (password.value.length < 6){
             //ativa o alerta
             spanError.classList.add("alert", "error")
             spanError.innerHTML = 'A senha deve conter no mínimo 6 dígitos.'
             //adiciona classe de focus com erro
             password.classList.add('focusError')
             password.focus()
        }else{
            //Input fica normal, sem box-shadow nenhum
            password.classList.add('blur')
            password.classList.remove('focusError')
            //Remove os alertas
            spanError.classList.remove("alert", "error")
            spanError.innerHTML = ''
        }
    })
    password.addEventListener("focus", () => {
        //Se focar com campo preenchido
        if (password.value != '') {
            //adiciona classe focus
            password.classList.add('focus')
            password.classList.remove('blur')
        }
    })
}

validationForm();

subLogin.addEventListener('click', (event) => {
    if(email.value == '' || password.value == ''){
        event.preventDefault();
        email.classList.add('focusError')
        password.classList.add('focusError')
        spanError.classList.add("alert", "error")
        spanError.innerHTML = 'O preenchimento dos campos é Obrigatório!'
        email.focus()
    }
})

//Verificando Horário
function verifyTime() {
    let hE = document.getElementById("input-he").value
    let hS = document.getElementById("input-hs").value

    if (hE > hS) {
        alert("Ajuste de Hora inserido Inválido. Verifique os valores informados.")
    }
}

//Verificando Data
function verifyDate() {
    let dE = document.getElementById("input-data-entrada").value
    let dS = document.getElementById("input-data-saida").value

    if (dE > dS) {
        alert("A Data de Entrada não pode ser maior que a Data de Saída")
    }
}