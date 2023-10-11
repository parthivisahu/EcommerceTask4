function processPayment() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        alert("Payment successful !!");
        
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    } else {
        alert("Payment details invalid");
    }
}

