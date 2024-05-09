//tooglePopup

function tooglePopup(input, label){
    //mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });

    // ocultar popup obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

// validação

// Validação nome
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

tooglePopup(nomeInput, nomeLabel);

nomeInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if(valor.length < 3) {
        nomeHelper.innerText = "Seu nome precisa ter três ou mais caracteres";
        estilizarInputIncorreto(nomeInput, nomeHelper);
        inputCorretos.nome = false;
    } else {
        estilizarInputCorreto(nomeInput, nomeHelper);
        inputCorretos.nome = true;
    }
});


let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

tooglePopup(cpfInput, cpfLabel);

cpfInput.addEventListener("change", (e) => {
    let valor = e.target.value;



    if (valor.length != 11) {
        cpfHelper.innerText = "CPF inválido: deve conter 11 dígitos.";
        estilizarInputIncorreto(cpfInput, cpfHelper);
        inputCorretos.cpf = false;
    }else {
        estilizarInputCorreto(cpfInput, cpfHelper);
        inputCorretos.cpf = true;
    }

});

// Validação comum
let comumInput = document.getElementById("comum");
let comumLabel = document.querySelector('label[for="comum"]');
let comumHelper = document.getElementById("comum-helper");

tooglePopup(comumInput, comumLabel);

comumInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if(valor.length < 3) {
        comumHelper.innerText = "O comum precisa ter três ou mais caracteres";
        estilizarInputIncorreto(comumInput, comumHelper);
        inputCorretos.comum = false;
    } else {
        estilizarInputCorreto(comumInput, comumHelper);
        inputCorretos.comum = true;
    }
});




// Evitar envio do formulário
let btnSubmit = document.querySelector('button[type="submit"]');
let inputCorretos = {
    nome: false,
    comum: false,
    cpf: false,

};

btnSubmit.addEventListener("click", (e) => {
    if(!Object.values(inputCorretos).every(input => input === true)) {
        e.preventDefault();
        alert("Preencha todos os campos obrigatórios!");
    } else {
        alert("Formulário enviado com sucesso");
    }
});
