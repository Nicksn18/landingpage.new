// login.js

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Captura os valores inseridos nos campos
    const email = document.getElementById("novoEmail").value;
    const senha = document.getElementById("novaSenha").value;
    
    // Validação simples de campos
    if (email === "" || senha === "") {
        document.getElementById("mensagemCadastro").innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos.</p>";
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("mensagemCadastro").innerHTML = "<p style='color: red;'>Por favor, insira um e-mail válido.</p>";
    } else if (senha.length < 6) {
        document.getElementById("mensagemCadastro").innerHTML = "<p style='color: red;'>A senha deve ter pelo menos 6 caracteres.</p>";
    } else {
        // Caso o formulário seja preenchido corretamente
        document.getElementById("mensagemCadastro").innerHTML = "<p style='color: green;'>Login realizado com sucesso! Verifique seu e-mail para mais informações.</p>";
        
        // Limpa os campos após o cadastro (opcional)
        document.getElementById("formCadastro").reset();
    }
});
