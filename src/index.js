import validator from './validator.js';

console.log(validator);

let inputCard= document.getElementById("NumberCardInput");
let button= document.getElementById("BotonValidar");

  
// MASKIFY
function maskify() {
    let input= document.getElementById('NumberCardInput').value;
    validator.maskify(inputCard);
    }

    
