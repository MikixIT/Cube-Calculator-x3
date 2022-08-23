let button = document.querySelector('button');
let numberOne = document.querySelector('input');
let result;
let printResult = document.getElementById('print');

button.addEventListener('click', ()=>{buttonclicked()});


function cube(number){
    result = number * number * number;
    return result;
} 

function buttonclicked(){
    if (isNaN(numberOne.value)) {
        alert('Not a Number!');
    } else {
        printResult.innerHTML = cube(numberOne.value);
    }
}
 