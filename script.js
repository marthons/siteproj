// Aqui você pode adicionar seu código JavaScript para interagir com os elementos HTML
document.getElementById('criarUsuario').addEventListener('click', function (event) {
    // Seu código aqui para lidar com o evento de clicar em "Criar novo Usuário"
    // Por exemplo, você pode adicionar uma função para rastrear esse evento ou realizar alguma ação específica
});

document.getElementById('alterarAcesso').addEventListener('click', function (event) {
    // Seu código aqui para lidar com o evento de clicar em "Alterar acesso"
});

document.getElementById('reativarAcesso').addEventListener('click', function (event) {
    // Seu código aqui para lidar com o evento de clicar em "Reativar acesso"
});

//novousuario

document.getElementById("solicitarAcessoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Captura dos dados do formulário
    var nome = document.getElementById("nome").value;
    var cidade = document.getElementById("cidade").value;
    var cpf = document.getElementById("cpf").value;
    var setor = document.getElementById("setor").value;
    var acessos = document.getElementById("acessos").value;

    // Exibição dos dados no console (pode ser substituído por envio para servidor)
    console.log("Nome: " + nome);
    console.log("Cidade: " + cidade);
    console.log("CPF: " + cpf);
    console.log("Setor: " + setor);
    console.log("Acessos necessários: " + acessos);

    // Limpa o formulário após o envio
    document.getElementById("solicitarAcessoForm").reset();
});


//alterar acesso

document.getElementById("changeAccessForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var newPassword = document.getElementById("newPassword").value;
    console.log("Usuário: " + username + ", Nova Senha: " + newPassword);
    document.getElementById("changeAccessForm").reset();
    // Adicione lógica para processar a alteração de acesso, como enviar os dados para o servidor
});

//reativa acesso

document.getElementById("reactivateAccessForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    console.log("Email: " + email);
    document.getElementById("reactivateAccessForm").reset();
    // Adicione lógica para reativar o acesso, como enviar um email de confirmação
});

