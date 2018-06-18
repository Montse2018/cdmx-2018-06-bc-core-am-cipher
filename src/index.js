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
let encodeOffset = "";
let decodeOffset = "";
let objectWithOffset = document.getElementById('encode', 'decode');
//let withOfset = document.getElementById('withOffset');


//let encrypt = document.getElementById("Codificar");
//let unencript = document.getElementById('Desencriptar');

  buttonencode.addEventListener ("click", event => {
      window.cipher.encode (offset.value, string.value)
  })

  buttondecode.addEventListener("click", event => {
     window.cipher.decode(offset.value, textoEncriptado.value)
  })


  /*describe('cipher', () => {

    it('debería ser un objeto', () => {
      assert.equal(typeof cipher, 'object');
    });

    describe('cipher.encode', () => {

      it('debería ser una función', () => {
        assert.equal(typeof cipher.encode, 'function');
      });

      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33');
    });

    describe('cipher.decode', () => {

      it('debería ser una función', () => {
        assert.equal(typeof cipher.decode, 'function');
      });

      it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33');
    });

    describe('cipher.createCipherWithOffset', () => {

      it('debería ser una función', () => {
        assert.equal(typeof cipher.createCipherWithOffset, 'function');
      });

      it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

    });

  });*/

  /*withOffset.addEventListener("click", withOffset) => {
    function withOfset() {
      obString.value;
      resultado.innerHTML = window.cipher.createCipherWithOffset(offset.value);

    }
  }*/


  /*function withOfset() {
    obString.value;
    resultado.innerHTML = window.cipher.createCipherWithOffset(offset.value);*/

  //let txtEncode =

//   buttondecode.addEventListener("click",event => {
//   let textoDesencriptado = window.cipher.unencript(offset.value, string.value)
// })
//   console.log(textoDesencriptado);
  //let txtDesencriptado =*/
