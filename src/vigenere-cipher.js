const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = "";
    let keyIndex = 0;

    for (const char of message) {
      if (char >= "A" && char <= "Z") {
        const charCode = ((char.charCodeAt(0) - 65) + (key[keyIndex % key.length].charCodeAt(0) - 65)) % 26;
        encryptedMessage += String.fromCharCode(charCode + 65);
        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = "";
    let keyIndex = 0;

    for (const char of encryptedMessage) {
      if (char >= "A" && char <= "Z") {
        const charCode = ((char.charCodeAt(0) - 65) - (key[keyIndex % key.length].charCodeAt(0) - 65) + 26) % 26;
        message += String.fromCharCode(charCode + 65);
        keyIndex++;
      } else {
        message += char;
      }
    }

    return this.direct ? message : message.split("").reverse().join("");
  }
}



module.exports = {
  VigenereCipheringMachine
};
