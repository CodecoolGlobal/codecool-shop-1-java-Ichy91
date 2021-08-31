window.onload = function() {
    function addToCart() {
        let numberOfItems = 0
        let cart = document.getElementById("cart")
        cart.innerHTML = "Cart: " + numberOfItems
        let addToCartButtons = document.getElementsByClassName("btn btn-success")
        for (let button of addToCartButtons) {
            button.addEventListener("click", function() {
                numberOfItems += 1
                cart.innerHTML = "Cart: " + numberOfItems
            })
        }

    }

    addToCart()
}