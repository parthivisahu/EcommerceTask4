import { FC } from 'react';

document.addEventListener("DOMContentLoaded", function () {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const productId: string | null = urlParams.get('id');

    if (productId) {
        
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then((data: Product) => {
            displayProductDetails(data);
        })
        .catch((error: Error) => {
            console.error("Error fetching product:", error);
        });

    } else {
        
        alert("Invalid product ID.");
    }
});

interface Product {
    title: string;
    image: string;
    description: string;
    price: number;
    category: string;
}

function displayProductDetails(product: Product) {
    const productDetailContainer: HTMLElement | null = document.getElementById('product-detail');

    if (productDetailContainer) {
        const productDetailContainer: HTMLElement | null = document.getElementById('product-detail');

        if (productDetailContainer) {
            productDetailContainer.innerHTML = `
            <div class="card text-bg-dark mb-3" >
                <img src="${product.image}" class="card-img" alt="${product.title}">
                <div class="card-img-overlay">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><small>Price: ₹${product.price}</small></p>
                    <button class="btn-cart" onclick="addToCart('${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
                </div>
            </div>
            `;
        }
        
}

function addToCart(productName: string, productPrice: number, productImage: string) {
    let cart: { name: string, price: number, image: string, quantity: number }[] = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex: number = cart.findIndex(item => item.name === productName);

    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart.`);
}