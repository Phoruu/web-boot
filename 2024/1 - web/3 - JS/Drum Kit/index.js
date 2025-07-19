


for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", 
        function () {
            alert("I got clicked! at " + i);
        }
    );
}


    

/*
CALL BACK FUNCTION


function add(num1, num2){
return num1+num2;}

function sub(num1, num2){
    return num1-num2}

function multiply(num1, num2){
    return num1*num2}

function div(num1, num2){
    return num1/num2}

function calculator (num1, num2, operator) {
    return operator(num1, num2)
}*/