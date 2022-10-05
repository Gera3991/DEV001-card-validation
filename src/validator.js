const validator = {
  // creditCardNumber entra como un array ordendo y depurado

  isValid : function(creditCardNumber){

    let value = creditCardNumber.reverse();
  
      for (let i=0; i<value.length; i++){
        
        if (i%2 != 0){ // si el indice esta en posicion par
          value[i] = value[i] * 2; //multiplica el valor en el indice x 2
        
  
        if (value[i] > 9){ //si el valor del indice es mayor a 9
            value[i] = parseInt(String(value[i]).charAt(0)) + parseInt(String(value[i]).charAt(1))
            //el valor del indice es igual a la suma de sus digitos (12 = 1 + 2 = 3)
                
            
          }
  
        }
      
      }

    let sum = 0;

      for (let i=1; i<value.length; i++){
        sum += parseInt(value[i]); //va sumando los valores del indice (mientra convoierte el array)
        console.log(sum);
      }
      // si el último digito es superior a 0 es invalido
      // si es  igual a 0 es valido

      if (sum, ("si el último digito es superior a 0"){
        return false
      }
      else if (sum, "si el digito es igual a 0"){
        return true
      }
      
      //Return boolean
  
},
}
export default validator;