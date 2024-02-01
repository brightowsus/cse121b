// Function for addition
function add(number1, number2) {
    document.querySelector('#sum').value = number1 + number2;
}

// Function for subtraction
function subtract(number1, number2) {
    document.querySelector('#difference').value = number1 - number2;
}

// Function for multiplication
const multiply = (factor1, factor2) => {
    document.querySelector('#product').value = factor1 * factor2;
}

// Function for division
const divideNumbers = () => {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);

    if (divisor !== 0) {
        const result = dividend / divisor;
        document.getElementById('quotient').value = result;
    } else {
        document.getElementById('quotient').value = "Cannot divide by zero";
    }
}

// Event listeners for corresponding operations
document.getElementById('addNumbers').addEventListener('click', function() {
    add(Number(document.querySelector('#add1').value), Number(document.querySelector('#add2').value));
});

document.getElementById('subtractNumbers').addEventListener('click', function() {
    subtract(Number(document.querySelector('#subtract1').value), Number(document.querySelector('#subtract2').value));
});

document.getElementById('multiplyNumbers').addEventListener('click', function() {
    multiply(Number(document.querySelector('#factor1').value), Number(document.querySelector('#factor2').value));
});

document.getElementById('divideNumbers').addEventListener('click', function() {
    divideNumbers();
});

// Event listener for getting the total due
document.getElementById('getTotal').addEventListener('click', function() {
    getTotalDue();
});

// Function to calculate the total due
function getTotalDue() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;

    let totalDue;

    if (isMember) {
        // If the customer is a club member, apply a discount
        totalDue = subtotal * 0.9; // 10% discount
    } else {
        totalDue = subtotal;
    }

    // Update the total due in the HTML
    document.getElementById('total').innerText = '$' + totalDue.toFixed(2);
}
