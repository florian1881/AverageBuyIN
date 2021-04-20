let buyIns = [];
let BaseBuyIns=[0.25,0.5,1,2,5,10];


let buttons = document.getElementsByClassName("myButton");
let details = document.getElementById("details");

function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += parseFloat(array[index]);
    }
    let totalBi = document.getElementById("totalBi");
    totalBi.innerHTML = sum;

    let totalTable = document.getElementById("totalTable");
    totalTable.innerHTML = array.length;

    return sum;
}

function addBuyIn(array, value) {
    array.push(value);
}

function average(array) {
    let moyenne = document.getElementById("moyenne");
    if (array.length > 0) {
        let average = sumArray(array) / array.length;
        let averageRounded = average.toFixed(2);
        moyenne.innerHTML = averageRounded;
        return averageRounded;
    }
    moyenne.innerHTML = 0;
    return 0;
}

function showDetails(array) {

    let buyInsOccurency=[[0.25,0],[0.5,0],[1,0],[2,0],[5,0],[10,0]];
    // Itération, tri du tableau et affichage dans la partie details
    for (let index = 0; index < array.length; index++) {
        array[BaseBuyIns.indexOf(array[index])][1]+1;    
    }
    details.innerHTML=arrayBis;
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


[].forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
        arrayBis.push(button.id)
        console.log(arrayBis);
        addBuyIn(buyIns, button.id)
        sumArray(buyIns);
        average(buyIns);
        // showDetails(buyIns);
    });
});

// Event listener remove Buy in
let remover = document.getElementById("remover");
remover.addEventListener("click", function () {
    removeLastBuyIn(buyIns);
    sumArray(buyIns);
    average(buyIns);
    showDetails(buyIns); 
});