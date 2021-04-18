let buyIns = [];

function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += parseFloat(array[index]);
    }
    let total = document.getElementById("total");
    total.innerHTML = sum;
    return sum;
}
function addBuyIn(array,value){
    array.push(value);
}

function average(array) {
    let moyenne = document.getElementById("moyenne");
    if (array.length > 0) {
    let average = sumArray(array)/array.length;
    let averageRounded= average.toFixed(2);
    moyenne.innerHTML= averageRounded;
    return averageRounded;
    }
    moyenne.innerHTML= 0;
    return 0;
}

function show(){
    
    
    
    
}

function removeLastBuyIn(array) {
    if (array.length > 0) {
        array.pop();
    }
}

// ====================================================
// ==================EVENTS LISTENERS==================
// ====================================================


// Event listener add Buy in
let buttons = document.getElementsByClassName("myButton");

[].forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
        addBuyIn(buyIns,button.id)
        console.log(sumArray(buyIns)); 
        console.log(average(buyIns));
        // show(buyIns);
    });
});

// Event listener remove Buy in
let remover = document.getElementById("remover");
remover.addEventListener("click", function() {
removeLastBuyIn(buyIns);
console.log(sumArray(buyIns));
console.log(average(buyIns));
});