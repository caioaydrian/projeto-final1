window.addEventListener("DOMContentLoaded", function() {

    const conteudo = document.querySelector(".conteudo-sensivel");
    if (!conteudo) return;

    let nome = prompt("Qual é o seu nome?");
    let idade = prompt("Qual é a sua idade?");

    if (!nome || !idade) {
        alert("Você precisa preencher os dados.");
        conteudo.classList.add("bloqueado");
        return;
    }

    idade = parseInt(idade);

    if (isNaN(idade)) {
        alert("Idade inválida. Conteúdo bloqueado.");
        conteudo.classList.add("bloqueado");
        return;
    }

    if (idade >= 12) {
        alert("Bem-vindo(a), " + nome + "! Acesso liberado 🚀");
        conteudo.classList.remove("bloqueado");
    } else {
        alert("Acesso negado, " + nome + ". Conteúdo sensível bloqueado 🚫");
        conteudo.classList.add("bloqueado");
    }

});