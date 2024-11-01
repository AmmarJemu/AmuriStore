let cart = [];

function addToCart(productName, productPrice, productImage) {
    cart.push({ name: productName, price: productPrice, image: productImage });
    updateCart();
    updateCartCount();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item'); // Add a class for styling

        const itemImage = document.createElement('img');
        itemImage.src = item.image; // Set the image source
        itemImage.alt = item.name; // Set the alt text
        itemImage.classList.add('cart-item-image'); // Add a class for styling

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('cart-item-info'); // Add a class for styling
        itemInfo.textContent = `${item.name} - ETB${item.price}`;

        itemElement.appendChild(itemImage); // Append image to the item element
        itemElement.appendChild(itemInfo); // Append info to the item element
        cartItems.appendChild(itemElement); // Append the item element to the cart

        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function toggleCart() {
    const cartDisplay = document.getElementById('cart-display');
    cartDisplay.style.display = cartDisplay.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        // Redirect to the home page
        window.location.href = "#home"; // Change to your home page URL if it's different
    }
}
// Open Payment Modal on Checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        document.getElementById("payment-modal").style.display = "flex";
    }
}

// Close Payment Modal
function closeModal() {
    document.getElementById("payment-modal").style.display = "none";
}

// Finish Purchase and Show Success Message
function finishPurchase() {
    const paymentForm = document.getElementById("payment-form");
    const selectedPayment = paymentForm.querySelector("input[name='payment']:checked");
    
    if (!selectedPayment) {
        alert("Please select a payment method.");
        return;
    }

    document.getElementById("payment-modal").style.display = "none";
    document.getElementById("success-message").style.display = "flex";
}

// Close Success Message
function closeSuccessMessage() {
    document.getElementById("success-message").style.display = "none";
    cart = []; // Clear the cart after purchase
    updateCart(); // Update cart display
    updateCartCount(); // Reset cart count
}
