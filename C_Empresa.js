document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm1');
  
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const nomeEmpresa = document.getElementById('nome_empresa').value;
        const cnpj = document.getElementById('cnpj').value;
        const cep = document.getElementById('cep').value;
        const email = document.getElementById('email').value;
        const confirmarEmail = document.getElementById('confirmar_email').value;
        const senha = document.getElementById('password').value;
        const confirmarSenha = document.getElementById('confirmar_senha').value;
        const nomeFicticio = document.getElementById('nome_ficticio').value;
        const contato = document.getElementById('contato').value;
        const numero = document.getElementById('numero').value;
  
          // Validações adicionais
          if (!/^\d{14}$/.test(cnpj)) {
            alert('CNPJ deve conter 14 dígitos numéricos.');
            return;
        }
  
        if (!/^\d{8}$/.test(cep)) {
            alert('CEP deve conter 8 dígitos numéricos.');
            return;
        }
  
        if (!/^\d{10,11}$/.test(contato)) {
            alert('Contato deve conter 10 ou 11 dígitos numéricos.');
            return;
        }
  
        // Validação de e-mail e senha
        if (email !== confirmarEmail) {
            alert('Os e-mails não coincidem!');
            return;
        }
  
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }
  
        const user = {
            nomeEmpresa,
            cnpj,
            cep,
            email,
            senha,
            nomeFicticio,
            contato,
            numero
        };
  
        // Armazenar dados no localStorage
        localStorage.setItem('user', JSON.stringify(user));
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'T_Cadastro_login.html'; // Redirecionar para a página de login
    });
  
    window.togglePassword = function() {
      const passwordField = document.getElementById('password');
      if (passwordField.type === 'password') {
          passwordField.type = 'text';
      } else {
          passwordField.type = 'password';
      }
  };
  });