// QuerySelectors
const prevNum = document.querySelector('[data-prevNum]');
const currNum = document.querySelector('[data-currNum]');
const operandButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const equals = document.querySelector('[data-equals]');
const eraseButton = document.querySelector('[data-erase]');
const deleteButton = document.querySelector('[data-deleteAll]');





// Declarations
let firstNumber = '';
let secondNumber = '';
let displayValue= '';
let result = '';
let operator = '';
let input = '';
currNum.innerHTML = '';
prevNum.innerHTML = '';
let substring;
let displayString;





// Functions
function add(firstNum, secondNum) {return result = Number(firstNum) + Number(secondNum)}
function subtract(firstNum, secondNum) {return result = Number(firstNum) - Number(secondNum)}
function multiply(firstNum, secondNum) {return result = Number(firstNum) * Number(secondNum)}
function divide(firstNum,secondNum) {return result = Number(firstNum) / Number(secondNum)}
function operate(a, b, ope){
    if(ope === '+'){return result = add(a,b)}
    else if(ope === '-'){return result = subtract(a,b)}
    else if(ope === 'x'){return result = multiply(a,b)}
    else if(ope === '÷'){return result = divide(a,b)}}
function captureValue(){
    firstNumber = displayValue;
    displayValue = '';
    console.log(`firstNumber = ${firstNumber}`);
}






// addEventListeners
deleteButton.addEventListener('click', function(){
    currNum.innerHTML = '';
    prevNum.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    displayValue = '';
    result = '';
});

numberButtons.forEach((button) => {
    button.addEventListener('click', function(){
        if(displayValue.includes('.') && button.innerHTML === '.') return;
        displayValue += button.innerHTML;
        currNum.innerHTML += button.innerHTML;
        
        
    });
});

operandButtons.forEach((button) =>{
    button.addEventListener('click', function(){ // makes negative numbers buggy
        if(currNum.innerHTML === '') return;
        if(currNum.innerHTML.includes('+')) return;
        if(currNum.innerHTML.includes('-')) return;
        if(currNum.innerHTML.includes('x')) return;
        if(currNum.innerHTML.includes('÷')) return;
        operator = button.innerHTML;
        console.log(`operator: ${operator}`);
        if(firstNumber === ''){captureValue()}
        currNum.innerHTML += button.innerHTML;
    });
});

equals.addEventListener('click', function(){
    if(prevNum === ''){prevNum.innerHTML += currNum.innerHTML;}else if(prevNum !== ''){prevNum.innerHTML = ''; prevNum.innerHTML += currNum.innerHTML}
    result = operate(firstNumber, displayValue, operator);
    firstNumber = result;
    console.log(`displayVal = ${displayValue}`);
    displayValue = '';
    currNum.innerHTML = firstNumber;

});
eraseButton.addEventListener('click', function(){
    substring = currNum.innerHTML.slice(0, -1);
    currNum.innerHTML = substring;
    console.log(typeof displayValue); // string
    displayString = displayValue.slice(0, -1);
    displayValue = displayString;
    console.log(`DisVal is ${displayValue}`);
});
