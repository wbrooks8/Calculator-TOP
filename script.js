let num;
let operator;
let op;
let end;

function operate (a, b, c) {
    
}

function myFunction2() {
    document.getElementById("display").innerHTML = "0";
    num = 0;
    operator = 0;
    op = 0;
    end === 0;
}


function one(a) {

    if (document.getElementById("display").innerHTML=="0") {
        document.getElementById("display").innerHTML = "";
        var paragraph = document.getElementById("display");
        paragraph.textContent += a; 
    }

    else if (end === 9) {
        document.getElementById("display").innerHTML = "";
        var paragraph = document.getElementById("display");
        paragraph.textContent += a; 
        end = 1;
    }

    else {
    var paragraph = document.getElementById("display");
    paragraph.textContent += a; 
    }
}

function addition (a, b) {
    num = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "0";
    op = '+';
}

function subtract (a, b) {
    num = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "0";
    op = '-';
}

function divide (a, b) {
    num = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "0";
    op = '/';
}

function multiply (a, b) {
    num = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "0";
    op = '*';
}

let operators = {
    '+': function(a, b) { return( a + b ) },
    '/': function(a, b) { return( a / b ) },
    '-': function(a, b) { return( a - b ) },
    '*': function(a, b) { return( a * b ) },
};

function equal () {
    let end = operators[op](parseInt(num), parseInt(document.getElementById("display").innerHTML));
    document.getElementById("display").innerHTML = Math.round((end + Number.EPSILON) * 100) / 100;
    end = 9
}

