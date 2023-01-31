var totalPriceHTML = document.getElementById("totalPrice")
var itemSection = document.getElementById("itemSection")


window.onload = (event) => {
    sessionCart = sessionStorage.getItem('cart');
    cart = JSON.parse(sessionCart)

    alert(cart[0].price)

    itemCount = 0;
    itemSection.innerHTML = ""

    for (var item of cart) {
        itemCard = `<div id="itemCard">
        <img id = "itemImage" src = "../public/images/items/` + item.name + `.jpg" >
        <p id="itemDescription">` + item.name + `</p>
        <p>` + item.price + `</p>
        <button id="removeFromCart" onclick="removeItemFromCart(` + item.name + `, ${item.price})">Buy</button>
        </div >`
        itemSection.innerHTML += itemCard
        itemCount++;

        totalPrice += item.price
    }

    totalPriceHTML.innerHTML = totalPrice

}