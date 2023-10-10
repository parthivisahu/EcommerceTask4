function processPayment(): void {
    const cardNumber: string = (document.getElementById('card-number') as HTMLInputElement).value;
    const expiryDate: string = (document.getElementById('expiry-date') as HTMLInputElement).value;
    const cvv: string = (document.getElementById('cvv') as HTMLInputElement).value;

  
    if (cardNumber && expiryDate && cvv) {
        alert("Payment successful! Thank You for Shopping with us!!");
       
        localStorage.removeItem('cart');
        window.location.href = './index.html';
    } else {
        alert("Payment details invalid");
    }
}