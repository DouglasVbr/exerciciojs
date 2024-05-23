
// saudação ao usuario
function saudacao(){
var nome = document.getElementById("nomeInput").value;
alert("olá," + nome + "! Bem-Vindo!");
}

// Contador de Caracteres
function contarCaracteres(){
var texto = document.getElementById("textoArea").value;
var numCaracteres = texto.length;
alert("Número de caracteres:" + numCaracteres);

}

// Validar se o valor inserido é um número positivo
function validarNumeroPositivo() {
var numero = parseFloat(document.getElementById("numeroInput").value );
if (numero > 0) {
    alert ("O número é positivo");
    } else{
        alert("Erro: O número não é positivo!");

   }

}


// Calcular a área de um retângulo
function calcularAreaRetangulo(){
var comprimento = parseFloat(document.getElementById("comprimentoInput").value );
var largura = parseFloat(document.getElementById("larguraInput").value);
var area = comprimento * largura;
alert("A área do retângulo é: " + area);

}