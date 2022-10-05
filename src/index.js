import validator from './validator.js';
console.log(validator);


// const ok = document.getElementsByTagName("img")[1];    - esto  no  funciona hasta que no le de uso
// const error = document.getElementsByTagName("img")[2]; - esto  no  funciona hasta que no le de uso

//Se añade evento de click para confirmr 
document.getElementById("submitcard").addEventListener("click", creditCardNumber);

//Función para atrapar el numero de tarjeta que incluye el algoritmo de luhn
function creditCardNumber() {
  let creditCardNumber = Array.from(document.getElementById("cc-number").value.replace(/\D/g, '')); 


  let luhn = validator.isValid(creditCardNumber);
  console.log(luhn);

}



