const validator = {
  isValid : function(creditCardNumber){
    if (creditCardNumber == null) { // Sí "cc" es nula te la muestra como invalida.
      return false;
    }

    if (creditCardNumber.length == 0) { // Sí la amplitud de la cc es 0 también es invalida.
      return false;
    }

    try {
      var sumTable = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]]; // Variable con datos primitivos(ARRAY) es para verificar que sólo se encuentren digitos del 0-9
      var sum = 0, flip = 0;

      for (var i = creditCardNumber.length - 1; i >= 0; i--, flip++) {
          sum += sumTable[flip & 0x1][parseInt(creditCardNumber.charAt(i))];
      }

      return ((sum % 10) == 0);

    } catch (e) {
      return false;
    }    
  },
  maskify: function(creditCardNumber) {
    return creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4);
  }
};

export default validator;
