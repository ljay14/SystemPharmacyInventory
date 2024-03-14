// productinventory.js

let productIdCounter = 1; // Initial ID counter
let products = []; // Array to store products

// Check if there are existing products in local storage
const storedProducts = localStorage.getItem('products');
if (storedProducts) {
    // Parse the stored products from JSON
    products = JSON.parse(storedProducts);
    // Update the product ID counter based on the existing products
    productIdCounter = Math.max(...products.map(product => product.id)) + 1;
}

function saveProductsToLocalStorage() {
    // Save the products array to local storage
    localStorage.setItem('products', JSON.stringify(products));
}

// Function to add a new product
function addProduct() {
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const expireDate = document.getElementById("expireDate").value;

    // Generate unique ID
    const productId = productIdCounter++;
    // Create product object
    const product = {
        id: productId,
        name: productName,
        quantity: parseInt(quantity),
        price: unitPrice,
        expireDate: expireDate
    };
    // Add product to the array
    products.push(product);
    // Save updated products array to local storage
    saveProductsToLocalStorage();
    // Call updateTable to update the UI
    updateTable();
    // Clear the input fields
    clearInputFields();
}

// Function to update the table with products
function updateTable(productsToDisplay = products) {
    const tableBody = document.getElementById("productTableBody");
    // Clear existing rows
    tableBody.innerHTML = "";
    // Re-populate the table with product information
    productsToDisplay.forEach(product => {
        const newRow = tableBody.insertRow(-1);
        newRow.insertCell(0).textContent = product.id;
        newRow.insertCell(1).textContent = product.name;
        newRow.insertCell(2).textContent = product.quantity;
        newRow.insertCell(3).textContent = product.price;
        newRow.insertCell(4).textContent = product.expireDate;
        // Add Buy button with event listener
        const actionCell = newRow.insertCell(5);
        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.onclick = function () {
            buyProduct(product.id, newRow);
        };
        actionCell.appendChild(buyButton);
    });
}

// Function to clear input fields after adding a product
function clearInputFields() {
    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("unitPrice").value = "";
    document.getElementById("expireDate").value = "";
}

// Function to buy a product
function buyProduct(productId, row) {
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        const availableQuantity = products[productIndex].quantity;
        const quantityToBuy = prompt(`How many ${products[productIndex].name}(s) would you like to buy?`, 1);

        if (quantityToBuy !== null && !isNaN(quantityToBuy) && quantityToBuy > 0 && quantityToBuy <= availableQuantity) {
            products[productIndex].quantity -= quantityToBuy;

            // Save updated products array to local storage
            saveProductsToLocalStorage();

            if (products[productIndex].quantity <= 0) {
                row.remove();
            } else {
                // Update quantity cell in the table
                row.cells[2].textContent = products[productIndex].quantity;
            }

            alert(`You successfully bought ${quantityToBuy} ${products[productIndex].name}(s)!`);
        } else if (quantityToBuy !== null) {
            alert("Invalid quantity or quantity exceeds available stock!");
        }
        saveProductsToLocalStorage();
    }
}

// Function to filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );
    updateTable(filteredProducts);
}

// Call updateTable to initially populate the table with products
updateTable();
