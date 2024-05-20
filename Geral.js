/*--------         MENU         --------*/
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão do menu e o menu
    var menuBtn = document.getElementById("menu-btn");
    var menu = document.getElementById("menu");
    
    // Adiciona um evento de clique no botão do menu
    menuBtn.addEventListener("click", function() {
      // Alterna a visibilidade do menu ao clicar no botão
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });
  });

