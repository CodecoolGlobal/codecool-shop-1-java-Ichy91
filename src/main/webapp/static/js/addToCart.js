window.onload = function() {

    function putData(url) {
    }

    function addToCart() {
        let numberOfItems = 0
        let cart = document.getElementById("cart")
        cart.innerHTML = "Cart: " + numberOfItems + " item(s)"
        let addToCartButtons = document.getElementsByClassName("btn btn-success")
        for (let button of addToCartButtons) {
            button.addEventListener("click", async function() {
                numberOfItems += 1
                cart.innerHTML = "Cart: " + numberOfItems + " item(s)"
                let id = button.dataset.id
                let url = "/cart?id=" + id
                await putData(url)
            })
        }

    }



    addToCart()
}