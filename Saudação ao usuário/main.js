document.getElementById('enviarBtn').addEventListener('click', function() {
    var nome = document.getElementById('nomeInput').value;
    var mensagem = saudacao(nome);
    document.getElementById('saudacao').textContent = mensagem;
});

function saudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a).`;
}




