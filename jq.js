function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var Samsung = new Phone("Samsung Galaxy S6", 1256, "black");
var iPhone = new Phone("iPhone 6s", 1456, "silver");
var OnePlus = new Phone("OnePlus One", 1288, "white");

Samsung.printInfo();
iPhone.printInfo();
OnePlus.printInfo();
