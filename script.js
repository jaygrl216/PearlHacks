var ans;
var amount = 0;
var menuChoice;
var total = 0;
var total1=0;
var total2=0;
var total3=0;
var total4=0;
var price = 0;

function addTotals() {
	var x = parseInt(document.saver.price.value);
	if(document.saver.category.value == "food"){
	total1 = total1 + x;
	}
	else if(document.saver.category.value=="clothes"){
		total2 = total2 + x;
	}

}

function submit() {
	total= total1 + total2 + total3;
    document.getElementById("data").innerHTML = "Spent on food: $" + total1 +"\nSpent on clothes: $" + total2 +
    "\n your collective total is: $" + total;
}