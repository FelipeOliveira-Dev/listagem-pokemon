const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    body.classList.toggle("modo-escuro");
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroAtivo){
        imagemBotaoAlterarTema.setAttribute("src", "./src/img/moon.png");
    } else{
        imagemBotaoAlterarTema.setAttribute("src", "./src/img/sun.png");
    }

});