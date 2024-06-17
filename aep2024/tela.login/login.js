function login(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)
    
    // Obter os valores dos campos de usuário e senha
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    // Verificar se o usuário e a senha estão corretos (aqui você pode fazer a validação)
    const isValidUser = (user === 'usuario' && pass === 'senha'); // Exemplo de validação simples

    if (isValidUser) {
        // Login bem-sucedido, redirecionar para a tela do estoque
        window.location.href = '../estoque_front/estoque.html'; // ajuste conforme a estrutura do seu projeto

    } else {
        // Exibir mensagem de erro (opcional)
        alert('Usuário ou senha incorretos. Por favor, tente novamente.');
    }
}

// Adicionar um ouvinte de evento para o envio do formulário
document.getElementById('loginForm').addEventListener('submit', login);
