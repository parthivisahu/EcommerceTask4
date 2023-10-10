document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
});
function displayCartItems() {
    var cartContainer = document.getElementById('cart-items');
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartContainer) {
        cartContainer.innerHTML = "";
        cart.forEach(function (item, index) {
            var tr = document.createElement('tr');
            tr.style.boxShadow = "inset 0px 0.5px 0px 0px #0000001a";
            tr.innerHTML = "\n                <td style=\"width:10rem; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;\"><img src=\"".concat(item.image, "\" alt=\"").concat(item.name, "\" width=\"50\"></td>\n                <td style=\"width:35%;\">").concat(item.name, "</td>\n                <td style=\"width:15%;\">\u20B9").concat(item.price, "</td>\n                <td width:5%;>").concat(item.quantity, "</td>\n                <td style=\"width:15%;\">\u20B9").concat(item.price * item.quantity, "</td>\n                <td style=\"width:30%;\">\n                    <button onclick=\"addQuantity(").concat(index, ")\" class=\"btn-cart\">Add</button>\n                    <button onclick=\"subQuantity(").concat(index, ")\" class=\"btn-cart\">Remove</button>\n                    <button onclick=\"removeFromCart(").concat(index, ")\" class=\"btn-cart\">Delete</button>\n                </td>\n            ");
            if (cartContainer) {
                cartContainer.appendChild(tr);
            }
        });
    }
}
function removeFromCart(index) {
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}
function changeQuantity(index, change) {
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart[index].quantity += change;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}
function proceedToPayment() {
    window.location.href = 'payment.html';
}
