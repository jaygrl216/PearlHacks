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
	total = total + x;

}

function submit() {
    document.getElementById("data").innerHTML = "This is what you spent: $" + total;
}