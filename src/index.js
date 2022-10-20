import validator from './validator.js';

//Cuando se hace click en el botón me traigo los números de la cc-number.
document.getElementById("submitcard").addEventListener("click", creditCardNumber); 


//Los número del que me traje los voy a pasar por esta función.
function creditCardNumber() {
  
  //Primera variable es, sí se escribe algo que no sea un número remplaza el espacio por nada.
  let creditCardNumber = document.getElementById("cc-number").value.replace(/\D/g, ''); 

  //Segunda variable sirve para enmascarar número de la tarjeta de crédito con # .
  let cc = validator.maskify(creditCardNumber);
  
  // Tercera variable es para ejecutar el algoritmo de luhn
  let luhn = validator.isValid(creditCardNumber); 
  
// Después me traigo los digitos de la tarjeta de crédito con las varibles ejecutadas.
  document.getElementById("cc-number").value = cc;

// Utilizó un boolean para validar si es true o false mi tarjeta de credito.
  if (luhn){
    console.log("Tarjeta valida");
    alert("Tarjeta valida")
    
  } else {
    console.log("Tarjeta invalida");
        alert("Tarjeta invalida")

  }
}
