var total = 0;
var total1=0;
var total2=0;
var total3=0;
var budget=0;


function budgetAdd(){
	budget = budget + parseInt(document.saver.budget.value);
	document.getElementById("budget").innerHTML = "Your budget is: $" + budget;
}

function addTotals() {
	var x = parseInt(document.saver1.price.value);
	if(document.saver1.category.value == "food"){
	total1 = total1 + x;
	}
	else if(document.saver1.category.value=="clothes"){
		total2 = total2 + x;
	} else {
		total3 = total3 + x;
	}

}

function submit() {
	total= total1 + total2 + total3;
	var remain = budget - total;
    document.getElementById("food").innerHTML = "Spent on food: $" + total1;
    document.getElementById("clothes").innerHTML = "Spent on clothes: $" + total2;
    document.getElementById("makeup").innerHTML ="Spent on Makeup: $" + total3;
    document.getElementById("all").innerHTML ="Your collective total is: $" + total;
    document.getElementById("r") = "Remaining Budget: $" + remain;
}