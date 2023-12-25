// Your script for style toggle and contact form submission goes here

function submitContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate and process contact form data (you can add your validation logic here)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
}
function toggleStyle() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

// Add this script for product-related functionality

// Initial products data
var productsData = [
    { name: "Product A", price: 20.00 },
    { name: "Product B", price: 15.00 },
    { name: "Product C", price: 30.00 }
    // Add more products as needed
];

document.addEventListener("DOMContentLoaded", function () {
    renderProducts(productsData);
});

function renderProducts(products) {
    var productList = document.getElementById("products");
    productList.innerHTML = "";

    products.forEach(function (product) {
        var li = document.createElement("li");
        li.setAttribute("data-name", product.name);
        li.setAttribute("data-price", product.price.toFixed(2));
        li.textContent = product.name + " - $" + product.price.toFixed(2);
        productList.appendChild(li);
    });
}

function sortProducts() {
    var sortSelect = document.getElementById("sort");
    var selectedValue = sortSelect.value;

    if (selectedValue === "name") {
        productsData.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    } else if (selectedValue === "price") {
        productsData.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    renderProducts(productsData);
}
