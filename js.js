var carta1 = {
    nome: "andzika",
    atributos: {
        ak47: 8,
        awp: 5,
        pistol: 6
    }
}
var carta2 = {
    nome: "gaylin",
    atributos: {
        ak47: 6,
        awp: 7,
        pistol: 7
    }
}
var carta3 = {
    nome: "zerodelas",
    atributos: {
        ak47: 7,
        awp: 7,
        pistol: 6
    }
}
var carta4 = {
    nome: "janta",
    atributos: {
        ak47: 6,
        awp: 7,
        pistol: 7
    }
}
var carta5 = {
    nome: "gui",
    atributos: {
        ak47: 5,
        awp: 7,
        pistol: 4
    }
}
var carta6 = {
    nome: "alex",
    atributos: {
        ak47: 1,
        awp: 1,
        pistol: 1
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];

var cartaMaquina = 0 
var cartaReal = 0

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 6)
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(numeroCartaMaquina)

    var numeroCartaReal = parseInt(Math.random() * 6)
    while (numeroCartaMaquina == numeroCartaReal) {
        numeroCartaReal = parseInt(Math.random() * 6)
    }
        cartaReal = cartas[numeroCartaReal]
        
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;

        exibirAtributos()
}

function exibirAtributos() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTxt = ""


    for(var atributo in cartaReal.atributos) {
        opcoesTxt += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTxt;
}

function obterAtributoSelecionado () {
    var allAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < allAtributos.length; i++) {
        if (allAtributos[i].checked == true) {
            return allAtributos[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obterAtributoSelecionado();
    var resultadoX1 = document.getElementById("resultado");
    var valorCartaReal = cartaReal.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaReal > valorCartaMaquina) {
        resultadoX1.innerHTML = cartaReal.nome + " vc ganhou"
    }else if (valorCartaMaquina > valorCartaReal){
        resultadoX1.innerHTML = cartaReal.nome + " vc perdeu"
    }else {
        resultadoX1.innerHTML = cartaReal.nome + " empate"
    }
    console.log(cartaReal)
    console.log(cartaMaquina)
}