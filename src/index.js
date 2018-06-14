let string = document.getElementById("string");
let offset = document.getElementById('offset');
//let text;
//let textoEncriptado;
//text = document.getElementById("message").value;
let textoEncriptado = document.getElementById('encriptado');
let encriptado = document.getElementById('encriptado');
let desencriptado = document.getElementById('desencriptado');
let buttonencode = document.getElementById('encode');
let buttondecode = document.getElementById('decode');


//let encrypt = document.getElementById("Codificar");
//let unencript = document.getElementById('Desencriptar');

  buttonencode.addEventListener ("click", event => {
      window.cipher.encode (offset.value, string.value)
  })

  buttondecode.addEventListener("click", event =>{
     window.cipher.decode(offset.value, textoEncriptado.value)
  })
  //let txtEncode =

//   buttondecode.addEventListener("click",event => {
//   let textoDesencriptado = window.cipher.unencript(offset.value, string.value)
// })
//   console.log(textoDesencriptado);
  //let txtDesencriptado =*/
