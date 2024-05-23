document.getElementById('enviarBtn').addEventListener('click', function() {
    contarCaracteres();
});

function contarCaracteres() {
    var texto = document.getElementById('textoInput').value;
    var numCaracteres = texto.length;
    document.getElementById('contador').textContent = `Número de caracteres: ${numCaracteres}`;
}

