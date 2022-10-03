import validator from './validator.js';
  
document.getElementById("botonvalidar").addEventListener("click", CreditCardNumber);
const value = document.getElementsByName("CreditCardNumber")

//Función para almacenar el numero de tarjeta que incluye el algoritmo de luhn
    let inputValue = Array.from(document.getElementById("CreditCardNumber").value.replace(/\D/g, '')); 
  
  
    let luhn = validator.isValid(inputValue);
    console.log(luhn);
    
  
  
      if (luhn == true){
        console.log(checked);
        checked.classList.remove("hide");
      } else if (luhn == false) {
        console.log(wrong);
        wrong.classList.remove("hide");
      }
  
  
