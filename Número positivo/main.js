document.getElementById('validarBtn').addEventListener('click', function() {
    validarNumeroPositivo();
});

function validarNumeroPositivo() {
    var valor = document.getElementById('numeroInput').value;
    var numero = parseFloat(valor);
    var mensagem = "";

    if (isNaN(numero)) {
        mensagem = "Por favor, insira um número válido.";
    } else if (numero > 0) {
        mensagem = "O número é positivo.";
    } else {
        mensagem = "Erro: o número não é positivo.";
    }

    document.getElementById('mensagem').textContent = mensagem;
}
