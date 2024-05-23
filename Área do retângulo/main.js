document.querySelector("#calcular").addEventListener("click", function() {
    const comprimento = parseFloat(document.querySelector('#comprimento').value.trim());
    const largura = parseFloat(document.querySelector('#largura').value.trim());

    if (isNaN(comprimento) || isNaN(largura)) {
        document.querySelector('#resultado').innerText = "Por favor, insira números válidos.";
        return;
    }

    const area = comprimento * largura;
    document.querySelector('#resultado').innerText = "Área do retângulo: " + area;
});
