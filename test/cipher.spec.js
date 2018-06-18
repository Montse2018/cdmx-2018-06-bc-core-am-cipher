describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      asser.equal(window.cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), HIJKLMNOPQRSTUVWXYZABCDEFG);
    });

    it('deberia retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33), 'hijklmnopqrstuvwxyzabcdefg');
    });

    it('deberia retornar "3456789012" para "0123456789" con offser 33', () =>{
      assert.equal(cipher.encode('012456789', 33), '3456789012');
    });

    it('deberia retornar " " para " " con offset 33', () =>{
      assert.equal(cipher.encode(' ', 33), ' ');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      asser.equal(window.cipher.decode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), HIJKLMNOPQRSTUVWXYZABCDEFG);
    });

    it('deberia retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.decode('abcdefghijklmnopqrstuvwxyz', 33), 'hijklmnopqrstuvwxyzabcdefg');
    });

    it('deberia retornar "3456789012" para "0123456789" con offser 33', () =>{
      assert.equal(cipher.decode('012456789', 33), '3456789012');
    });

    it('deberia retornar " " para " " con offset 33', () =>{
      assert.equal(cipher.decode(' ', 33), ' ');
    });
  });

   describe('cipher.createCipherWithOffset', () =>{
     assert.equal(typeof cipher.createCipherWithOffset, 'function');
   });
    it('deberia retornar un objeto con dos funciones (encode y decode) con offset fijado', () =>{
      assert.equal(typeof cipher.createCipherWithOffset(33), 'objeto');
    });
  });
