const validator = {
  isValid : function(creditCardNumber){
    
    // Sí "cc" es nula te la muestra como invalida.
    if (creditCardNumber == null) { 
      return false;
    }
    
    // Sí la amplitud de la cc es 0 también es invalida.
    if (creditCardNumber.length == 0) { 
      return false;
    }
    
    // Variable con datos primitivos(ARRAY) es para verificar que sólo se encuentren digitos del 0-9
    try {
      var sumTable = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]]; 
      
      //Def la posición de flip, partida, que es 0.
      var sum = 0, flip = 0;

      for (var i = creditCardNumber.length - 1; i >= 0; i--, flip++) {
          sum += sumTable[flip & 0x1][parseInt(creditCardNumber.charAt(i))];
      }
      
      // Sí el resultado es un multiplo de 10 o 0 es valida.
      return ((sum % 10) == 0);
      
      // Una sentencia para atrapar errores en bloque, se utiliza como buena practica, en el caso de que pueda afectar dependencias.
    } catch (e) {
      return false;
    }    
  },
  maskify: function(creditCardNumber) {
    
    // retornar enmascarado entre los numero de la posición 0 y -4 y reemplazarlos por # - Retornar los últimos 4 digitos.
    return creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4);
  }
};

export default validator;
