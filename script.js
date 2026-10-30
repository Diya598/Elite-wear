let cart = [];

function addToCart(name, price) {

    let product = cart.find(item => item.name === name);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(name + " added to cart!");
}

function updateCart() {

    let count = 0;
    let total = 0;

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        count += item.quantity;
        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                x ${item.quantity}

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;
    });

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;
}

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

function openCart() {
    document.getElementById("cart").style.display = "block";
}

function closeCart() {
    document.getElementById("cart").style.display = "none";
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for shopping at Elite Wear!");

    cart = [];

    updateCart();

    closeCart();
}
