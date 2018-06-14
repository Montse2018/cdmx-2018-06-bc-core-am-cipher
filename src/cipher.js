window.cipher = {
  offset : 33,
  string : "",
  encode: (offset, string) => {
    let stringArr = [];
//con la formula se logra encriptar el mensaje completo que el usuario ingresa,
//para los espacios respeta el mismo código ASCCI segun el valor de offset
    for (let i = 0; i < string.length; i++) {
      let character = String.fromCharCode((string[i].charCodeAt()-65+offset%26+65));
      stringArr.push(character);
      // let joinLetter = stringArr.join("");
  }
  let joinLetter = stringArr.join("");
  encriptado.value = joinLetter;
  return joinLetter;
},
  decode: (offset, string) => {
      let stringA = [];
    //let str = [];
//con la formula ingresada se realiza el retorno al mensaje original que el usuario ingreso,
//respeta mayusculas, minusculas, espacio y caracteres especiales
    for (let i = 0; i < string.length; i++) {
     let character2 = String.fromCharCode((string[i].charCodeAt()+65-offset%26-65));
     //console.log((string[i].charCodeAt()+65-offset%26-65));
     stringA.push(character2);
     //let joinLetter2 = string.join("");
    }
  let joinLetter2 = stringA.join("");
  desencriptado.value = joinLetter2
    return joinLetter2;
  },
};

    /*cipher = object,
    encode = function (),
    decode = function ();*/

/*function encode ={
        let text = document.getElementById("message").value;
        let string = [];
        for (var i = 0; i < text.length; i++) {
          let character = Sting.fromCharCode((text[i].charCodeAt()-65+33%26+65));
          string.push(character);
          let joinLetter = string.join("");
        }
        document.getElementById("encriptado").value = joinLetter;
        return joinLetter;
}


/*function encrypt (){
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
};*/

/*window.cipher = {
  // ...
};*/
