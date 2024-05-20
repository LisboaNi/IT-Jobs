document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;
        const tipoUsuario = document.getElementById('tipoUsuarioLogin').value;

        // Simulação de autenticação - verificar se os dados correspondem aos dados de login válidos
        let usuarioAutenticado = false;
        let usuario;

        if (tipoUsuario === 'empresa') {
            if (email === empresaUsuario.email && senha === empresaUsuario.senha) {
                usuarioAutenticado = true;
                usuario = empresaUsuario;
            }
        } else if (tipoUsuario === 'profissional') {
            if (email === profissionalUsuario.email && senha === profissionalUsuario.senha) {
                usuarioAutenticado = true;
                usuario = profissionalUsuario;
            }
        }

        if (usuarioAutenticado) {
            // Simulação de armazenamento de autenticação bem-sucedida
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(usuario));

            // Redirecionar para o perfil correspondente
            if (usuario.tipoUsuario === 'empresa') {
                window.location.href = 'T_Perfil_Empresa.html';
            } else if (usuario.tipoUsuario === 'profissional') {
                window.location.href = 'perfilProfissional.html'; /*Tem q Alterar*/
            }
        } else {
            alert('E-mail ou senha incorretos. Por favor, tente novamente.');
        }
    });

    // Função para alternar a visibilidade da senha
    window.togglePassword = function() {
        const passwordField = document.getElementById('password');
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    };
});

// Usuário de teste - Empresa
const empresaUsuario = {
    email: "empresa@example.com",
    senha: "senha123",
    tipoUsuario: "empresa",
    nome: "Empresa ABC",
};

// Usuário de teste - Profissional
const profissionalUsuario = {
    email: "profissional@example.com",
    senha: "senha456",
    tipoUsuario: "profissional",
    nome: "João Silva",
};