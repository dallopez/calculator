var billTotal = Number(prompt("What is your bill total?"));

var taxedBill = Number(billTotal+(billTotal*0.07));

var tip = Number(taxedBill * 0.05);

var finalBill = Number(taxedBill+tip)

document.body.querySelector(".calc").innerHTML="Your final bill is $"+ finalBill