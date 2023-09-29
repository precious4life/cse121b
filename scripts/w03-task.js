/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let number1 = Number(document.querySelector("#add1").value);
    let number2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(number1, number2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

function subtract(number1, number2){
    return number1 - number2;

}
function subNumbers(){
    let number1 = Number(document.querySelector("#subtract1").value);
    let number2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(number1, number2);
    
}
document.querySelector("#subtractNumbers").addEventListener("click", subNumbers);



/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) =>{
    return number1 * number2;
}

let multiplyNumber = ()=> {
    //code block
    let number1 = Number(document.querySelector("#factor1").value);
    let number2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(number1, number2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumber);





let divide = (number1, number2) => {
    if (number2 === 0) {
        // Handle division by zero error
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

let divideNumbers = () => {
    let number1 = Number(document.querySelector("#dividend").value);
    let number2 = Number(document.querySelector("#divisor").value);
    let quotientElement = document.querySelector("#quotient");

    // Check if number2 is zero before performing division
    if (isNaN(number1) || isNaN(number2)) {
        // Handle invalid input (e.g., non-numeric values)
        quotientElement.value = "Invalid input";
    } else {
        quotientElement.value = divide(number1, number2);
    }
}

// Use divideNumbers as the callback function for the event listener
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);



/* Open Function Use - Divide Numbers */
/*`let divide =(number1, number2) =>{
    return number1 / number2;
}

let divideNumbers = ()=>{
    let number1 = Number(document.querySelector("#dividend").value);
    let number2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#qoutient").value = divide(number1, number2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let yearFormElement = document.getElementById("year");
yearFormElement.value = currentYear;


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arrayElement = document.getElementById("array");


/* Output Source Array */
arrayElement.innerHTML = numbersArray.join(",");

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 !== 0);


/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 ===0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) =>sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number *2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(number => number *2).reduce((sum, number) =>sum + number);