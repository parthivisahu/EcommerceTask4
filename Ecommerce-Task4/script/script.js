document.addEventListener("DOMContentLoaded", function () {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        displayProducts(data);
    })
        .catch(function (error) {
        console.error("Error fetching products:", error);
    });
});
function displayProducts(products) {
    var productsContainer = document.getElementById('products');
    products.forEach(function (product) {
        var productDiv = document.createElement('div');
        productDiv.className = 'prod';
        productDiv.innerHTML = "\n            <div class=\"card\">\n                <a href=\"product.html?id=".concat(product.id, "\">\n                    <img src=\"").concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"card-img-top\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        \n                        \n                        <p><strong>Category:</strong> ").concat(product.category, "</p>\n                        <p><strong>Price:</strong> \u20B9").concat(product.price * 100, "</p>\n\n                        <button class=\"btn-cart\" onclick=\"addToCart(").concat(product.id, ", '").concat(product.title, "', ").concat(product.price, ", '").concat(product.category, "', '").concat(product.description, "', '").concat(product.image, "')\">Add to Cart</button>\n\n                    </div>\n                </a>\n            </div>\n        ");
        if (productsContainer) {
            productsContainer.appendChild(productDiv);
        }
    });
}
function addToCart(productID, productName, productPrice, productCategory, productDescription, productImage) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var productIndex = cart.findIndex(function (item) { return item.id === productID; });
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    }
    else {
        cart.push({
            id: productID,
            title: "",
            name: productName,
            price: productPrice,
            category: productCategory,
            description: productDescription,
            image: productImage,
            quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("".concat(productName, " added to cart."));
}
