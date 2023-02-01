var totalPriceHTML = document.getElementById("totalPrice")
var itemSection = document.getElementById("itemSection")

var totalPrice = 0;
var cart = []

function removeItemFromCart(itemId) {

    if (itemId > -1) { // only splice array when item is found
        cart.splice(itemId, 1); // 2nd parameter means remove one item only
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    document.location.reload();

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
        <p>` + item.price + `</p>
        <button id="removeFromCart" onclick="removeItemFromCart(` + item.id + `)">Remove</button>
        </div >`
        itemSection.innerHTML += itemCard
        itemCount++;

        totalPrice += item.price



    }

    totalPriceHTML.innerHTML = Math.round(totalPrice * 100) / 100

}

module.exports = checkoutPage;