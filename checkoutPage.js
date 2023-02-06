var totalPriceHTML = document.getElementById("totalPrice")
var itemSection = document.getElementById("itemSection")
var invoice = document.getElementById("invoice")



var tax = .0825
var shipping = 3.75

var totalPrice = 0;
var cart = []

var itemTotal = 0;
var taxes = 0;
var finalTotal = 0;

function removeItemFromCart(itemId) {

    console.log(itemId, " itemid")

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == itemId) {
            cart.splice(i, 1)
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    document.location.reload();

}

function checkout() {

    var shipName = document.getElementById("shipName").value
    var shipStreet = document.getElementById("shipStreet").value
    var shipCity = document.getElementById("shipCity").value
    var shipZipcode = document.getElementById("shipZip").value
    var shipState = document.getElementById("shipState").value

    invoice.innerHTML += "Thank you for your purchase " + shipName + ".<br>" +
    "Items will arrive in approximately 3 days at this address:<br>" +
    shipStreet + ', ' + shipCity + ', ' + shipZipcode + ', ' + shipState + "<br>" +
    "Total Cost: $" + finalTotal


}


window.onload = (event) => {
    var sessionCart = localStorage.getItem('cart');
    cart = JSON.parse(sessionCart)

    console.log(localStorage.getItem('cart'))

    // alert(cart[0])

    itemCount = 0;
    itemSection.innerHTML = ""

    for (var item of cart) {
        itemCard = `<div id="itemCard">
        <img id = "itemImage" src = "../public/images/items/` + item.name + `.jpg" >
        <p id="itemDescription">` + item.name + `</p>
        <p>$` + item.price + `</p>
        <button id="removeFromCart" onclick="removeItemFromCart(` + item.id + `)">Remove</button>
        </div >`
        itemSection.innerHTML += itemCard
        itemCount++;

        totalPrice += item.price

    }

    if (totalPrice == 0) {
        totalPriceHTML.innerHTML = "Empty"
    } else {
        itemTotal = Math.round(totalPrice * 100) / 100
        taxes = Math.round((tax * itemTotal) * 100) / 100
        finalTotal = Math.round((itemTotal + taxes + shipping) * 100) / 100
        totalPriceHTML.innerHTML = "Item Total: $" + itemTotal + "<br>Tax: $" + taxes + "<br>Shipping: $" + shipping
            + "<br>Total: $" + finalTotal
    }

}
