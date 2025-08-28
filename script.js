const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector ('#entrada-de-texto').value;
    const camporesultado = document.querySelector ('#resultado-palavrachave');
    camporesultado.textcontent = texto;
    const palavras = processatexto (texto);
    camporesultado.textcontent = palavras.join ("-");
}

function processatexto(texto){
 let palavras = texto.split(/[^a-za-z]+/);
 return palavras;

}