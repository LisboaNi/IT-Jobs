function toggleDescricao(id) {
  const descricao = document.getElementById(id);
  if (descricao.style.display === "block") {
    descricao.style.display = "none";
  } else {
    descricao.style.display = "block";
  }
}
