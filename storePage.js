var searchBar = document.getElementById("searchBar")
var searchButton = document.getElementById("magnifyGlassImg")
var cartButton = document.getElementById("cartImg")
var itemSection = document.getElementById("itemSection")

var itemNameList = [
    "apple",
    "avacado",
    "banana",
    "cherries",
    "grapes",
    "lemon",
    "lime",
    "orange",
    "pomegranate",
    "raspberries",
    "strawberries",
]

var cart = [];

cartCount = 0

function addItemToCart(name, price) {

    localStorage.setItem("name", name)
    
    cart = JSON.parse(localStorage.getItem('cart'))

    item = { "id": 0, "name": name, "price": price}

    

    cart.push(item)

    for(let i = 0; i < cart.length; i ++){
        cart[i].id = i
    }

    for (var item of cart) {
        console.log(item.id + " - " + item.name + " - " + item.price)
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'))

    cartCount++;

}


window.onload = (event) => {

    itemCount = 0;
    itemSection.innerHTML = ""

    for (var item of itemNameList) {
        var precision = 100; // 2 decimals
        var randomPrice = Math.floor(Math.random() * (3 * precision - 1 * precision) + 1 * precision) / (1*precision);
        itemCard = `<div id="itemCard">
        <img onclick="addItemToCart(itemNameList[` + itemCount + `], ${randomPrice})" id = "itemImage" src = "../public/images/items/` + item + `.jpg" >
        <p id="itemDescription">` + item + `</p>
        <p>$` + randomPrice + `</p>
        <button id="addToCart" onclick="addItemToCart(itemNameList[` + itemCount + `], ${randomPrice})">Buy</button>
        </div >`
        itemSection.innerHTML += itemCard
        itemCount++;
    }

    localStorage.set("itemListSize", itemNameList.length())

}

function searchList() {
    searchTerm = document.getElementById("searchBar").value
    itemSection.innerHTML = ""
    for (var item of itemNameList) {
        if(item.includes(searchTerm)) {
            var precision = 100; // 2 decimals
            var randomPrice = Math.floor(Math.random() * (3 * precision - 1 * precision) + 1 * precision) / (1*precision);
            itemCard = `<div id="itemCard">
            <img onclick="addItemToCart(itemNameList[` + itemCount + `], ${randomPrice})" id = "itemImage" src = "../public/images/items/` + item + `.jpg" >
            <p id="itemDescription">` + item + `</p>
            <p>$` + randomPrice + `</p>
            <button id="addToCart" onclick="addItemToCart(itemNameList[` + itemCount + `], ${randomPrice})">Buy</button>
            </div >`
            itemSection.innerHTML += itemCard
            itemCount++;
        }
    }
}

