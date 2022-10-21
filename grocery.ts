//grocery class with properties and constructor
class GroceryItem {
    name: string;
    quantity: string;
    unitPrice: string;
    totalPrice: string;

    constructor(name: string, quantity: number, unitPrice: number){  //some parameters come in as numbers but are converted for toFixed to work
        this.name = name;
        this.quantity = quantity.toString();
        this.unitPrice = unitPrice.toFixed(2);
        this.totalPrice = (quantity*unitPrice).toFixed(2);  //logic to calculate total price
    }
}

//instantiate grocery items
const LineItem1 = new GroceryItem("Banana", 4, 1.00);
const LineItem2 = new GroceryItem("Milk", 1, 3.50);
const LineItem3 = new GroceryItem("Chicken Leg", 2, 1.00);
const LineItem4 = new GroceryItem("Broccoli", 1, 1.99);

//array for the shopping cart
const cartArray: {name: string, quantity: string, unitPrice: string, totalPrice: string} [] = [
    LineItem1, LineItem2, LineItem3, LineItem4
];

const displayCartArray = document.getElementById("displayCartArray");  //bring id in from html page-set to variable
//iterate through the shopping cart array to display-for loop use for...of
for (let item of cartArray){
    const li = document.createElement("li");  //create line item element
    li.textContent = "Name: " + item.name + "|||Qty: " + item.quantity.toString() + "|||Unit Price: " + item.unitPrice.toString() + "|||Total Price: "+ item.totalPrice.toString();
    displayCartArray?.appendChild(li);
}
