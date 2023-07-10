function soma() {
    var numeroum = document.getElementById("numero_um").value;
    var numerodois = document.getElementById("numero_dois").value;

    var resultado = parseInt(numeroum) + parseInt(numerodois);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function divisao() {
    var numeroum = document.getElementById("numero_um").value;
    var numerodois = document.getElementById("numero_dois").value;

    var resultado = parseInt(numeroum) / parseInt(numerodois);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function multiplicacao() {
    var numeroum = document.getElementById("numero_um").value;
    var numerodois = document.getElementById("numero_dois").value;

    var resultado = parseInt(numeroum) * parseInt(numerodois);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function subtracao() {
    var numeroum = document.getElementById("numero_um").value;
    var numerodois = document.getElementById("numero_dois").value;

    var resultado = parseInt(numeroum) - parseInt(numerodois);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function exponenciacao() {
    var numeroum = document.getElementById("numero_um").value;
    var numerodois = document.getElementById("numero_dois").value;

    var resultado = parseInt(numeroum) ** parseInt(numerodois);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}