let operator = '';
let v1 = '0';
let v2 = '0';
let res = '';
let clearValue = true;
let op2 = false;

function display (str) {
    document.getElementById('result').value += str;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function operatorPressed(op) { 
    display(op);
}

function solveQueryString() {
    var x = document.getElementById('result').value;
    var y = 0;
    try {
        y = eval(x); 
    } catch(e) {
        document.getElementById('result').value = 'Error';
    }
    
    document.getElementById('result').value = y;
}