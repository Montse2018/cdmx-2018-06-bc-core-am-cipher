var text;
var i;
var newText;
var string = [];
var code = [];


function encrypt (){
    var text = document.getElementById("message").value;
    var string = [];
    for (var i = 0; i < text.length; i++) {
        var character = String.fromCharCode((text [i]).charCodeAt()-65+13%26+65);
        string.push(character);
        var joinLetter = string.join("");
      }
      document.getElementById("encriptado").value = joinLetter;
      return joinLetter;
}

    function unencript (){
    var string = [];
    var textoEncriptado = document.getElementById("encriptado").value;
    console.log(textoEncriptado);
    var string = [];
    for (var i = 0; i < textoEncriptado.length; i++) {
        var character = String.fromCharCode((textoEncriptado [i]).charCodeAt()+65-13%26-65);
    console.log((textoEncriptado [i]).charCodeAt()+65-13%26-65);
        string.push(character);
        var joinLetter2 = string.join("");
      }
      document.getElementById("desencriptado").value = joinLetter2;
      return joinLetter2;
}


/*window.cipher = {
  // ...
};*/
