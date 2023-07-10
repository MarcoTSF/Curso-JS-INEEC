var visibilidade = false;

function zap() {
    if (visibilidade) {
        document.getElementById("mensagem").style = "display: none;";
        visibilidade = false;
    } else {
        document.getElementById("mensagem").style = "display: block;";
        visibilidade = true;
    }
}