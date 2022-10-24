const valorA = document.querySelector('#valor-a');
const valorB = document.querySelector('#valor-b');
const valorC = document.querySelector('#valor-c');

const campDelta = document.querySelector('#valor-delta');
const campoX1 = document.querySelector('#valor-x1');
const campoX2 = document.querySelector('#valor-x2');

const buttonCalculator = document.querySelector('#button-calcular');

buttonCalculator.addEventListener('click', function(e){
    console.log(typeof(valorA.value));
    const a = parseInt(valorA.value);
    const b = parseInt(valorB. value);
    const c = parseInt(valorC.value);
    
    const delta = Math.pow(b, 2) - (4*a*c);
    const x1 = (-b + Math.sqrt(delta, 2))/2*a;
    
    campDelta.innerText = `O valor do Delta é ${delta}`;

});
