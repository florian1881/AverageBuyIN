let buyIns = [];

let buttons = document.getElementsByClassName("myButton");
let details = document.getElementById("details");
let test = document.getElementById("test");

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
    array.push(parseFloat(value));
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
    let baseBuyIns=[0.25,0.5,1,2,5,10];
    let buyInsOccurency=[[0.25,0],[0.5,0],[1,0],[2,0],[5,0],[10,0]];
    test.innerHTML=" ";
    // Itération, tri du tableau et affichage dans la partie details
    for (let index = 0; index < array.length; index++) {
        buyInsOccurency[baseBuyIns.indexOf(array[index])][1]++;
    }    
    for (let index = 0; index < buyInsOccurency.length; index++) {
        test.innerHTML+=`<td class="mt-5 text-2xl border border-gray-600" id="totalTable">${buyInsOccurency[index][1]}</td>`
    }
  
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
        addBuyIn(buyIns, button.id)
        sumArray(buyIns);
        average(buyIns);
        showDetails(buyIns)
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

