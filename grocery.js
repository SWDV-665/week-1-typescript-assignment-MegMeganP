//grocery class with properties and constructor
var GroceryItem = /** @class */ (function () {
    function GroceryItem(name, quantity, unitPrice) {
        this.name = name;
        this.quantity = quantity.toString();
        this.unitPrice = unitPrice.toFixed(2);
        this.totalPrice = (quantity * unitPrice).toFixed(2); //logic to calculate total price
    }
    return GroceryItem;
}());
//instantiate grocery items
var LineItem1 = new GroceryItem("Banana", 4, 1.00);
var LineItem2 = new GroceryItem("Milk", 1, 3.50);
var LineItem3 = new GroceryItem("Chicken Leg", 2, 1.00);
var LineItem4 = new GroceryItem("Broccoli", 1, 1.99);
//array for the shopping cart
var cartArray = [
    LineItem1, LineItem2, LineItem3, LineItem4
];
var displayCartArray = document.getElementById("displayCartArray"); //bring id in from html page-set to variable
//iterate through the shopping cart array to display-for loop use for...of
for (var _i = 0, cartArray_1 = cartArray; _i < cartArray_1.length; _i++) {
    var item = cartArray_1[_i];
    var li = document.createElement("li"); //create line item element
    li.textContent = "Name: " + item.name + "|||Qty: " + item.quantity.toString() + "|||Unit Price: " + item.unitPrice.toString() + "|||Total Price: " + item.totalPrice.toString();
    displayCartArray === null || displayCartArray === void 0 ? void 0 : displayCartArray.appendChild(li);
}
