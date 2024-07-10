let calculation = "";

function appendNumber(number) {
  calculation += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (/[\+\-\*\/] $/.test(calculation)) {
    alert('Cannot place two operators together');
  } else {
    calculation += operator;
    updateDisplay();
  }
}

function appendDot() {
  const lastNumber = calculation.split(/[\+\-\*\/ ]/).pop();
  if (calculation.endsWith(' ') || lastNumber.includes('.')) {
    alert('Decimal already exists');
  } else {
    calculation += '.';
    updateDisplay();
  }
}

function calculateResult() {
  try {
    const result = eval(calculation);
    calculation = result.toString();
    updateDisplay();
  } catch (error) {
    console.error('Invalid calculation:', error);
    alert('Invalid calculation');
  }
}

function clearCalculation() {
  calculation = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = calculation;
}
