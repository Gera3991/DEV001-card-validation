import validator from './validator.js';

//Se añade evento de click para confirmr 
document.getElementById("submitcard").addEventListener("click", creditCardNumber);

//Función para atrapar el numero de tarjeta que incluye el algoritmo de luhn
function creditCardNumber() {
  let creditCardNumber = document.getElementById("cc-number").value.replace(/\D/g, ''); 

  let cc = validator.maskify(creditCardNumber);

  let luhn = validator.isValid(creditCardNumber);

  document.getElementById("cc-number").value = cc;

  if (luhn){
    console.log("Tarjeta valida");
    alert("Tarjeta valida")
    
   

  } else {
    console.log("Tarjeta invalida");
    alert("Tarjeta invalida")

  }
}