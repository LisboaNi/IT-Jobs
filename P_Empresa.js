function editProfile() {
    window.location.href = "editProfile.html";
}

window.onload = function() {
    // Aqui você pode recuperar os dados do usuário do seu backend
    // Por simplicidade, estou apenas definindo dados fixos
    const userData = {
        nome: "João Silva",
        email: "joao@example.com",
        idade: 30,
        imagem: "img.png" // Nome do arquivo de imagem
    };

    // Preencha os campos na tela de perfil com os dados do usuário
    document.getElementById("profile-image").src = userData.imagem;
    document.getElementById("name").innerText = userData.nome;
    document.getElementById("email").innerText = userData.email;
    document.getElementById("age").innerText = userData.idade;
};

function saveProfile(event) {
    event.preventDefault();
    
    // Aqui você pode enviar os dados para o backend para salvar no banco de dados
    // Por simplicidade, vou apenas exibir os dados no console
    const formData = new FormData(event.target);
    const userData = {
        nome: formData.get("name"),
        email: formData.get("email"),
        idade: formData.get("age"),
        imagem: formData.get("image").name // Nome do arquivo de imagem
    };

    console.log("Dados do perfil atualizados:", userData);

    // Redirecionar de volta para a página de perfil após salvar
    window.location.href = "T_Perfil_Empresa";
}