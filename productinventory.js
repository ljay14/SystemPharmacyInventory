let productIdCounter = 1; // Initial ID counter
const products = []; // Array to store products
const rowMap = {};

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

    // Create a new row in the table
    const table = document.querySelector("table tbody");
    const newRow = table.insertRow(-1);

    // Insert cells with product information
    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const priceCell = newRow.insertCell(3);
    const dateCell = newRow.insertCell(4);
    const actionCell = newRow.insertCell(5);

    // Assign values to cells
    idCell.textContent = productId;
    nameCell.textContent = productName;
    quantityCell.textContent = quantity;
    priceCell.textContent = unitPrice;
    dateCell.textContent = expireDate;

    // Add Buy button with event listener
    const buyButton = document.createElement("button");
    buyButton.textContent = "Buy";
    buyButton.onclick = function (id, row) {
        return function () {
            buyProduct(id, row);
        };
    }(productId, newRow);
    actionCell.appendChild(buyButton);

    // Clear the input fields
    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("unitPrice").value = "";
    document.getElementById("expireDate").value = "";
}


function filterProducts() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );

    // Update the table with filtered products
    updateTable(filteredProducts);
}

function updateTable(productsToDisplay = products) {
    const tableBody = document.getElementById("productTableBody");
    // Clear existing rows
    tableBody.innerHTML = " ";

    // Re-populate the table with product information
    productsToDisplay.forEach(product => {
        const newRow = tableBody.insertRow(0);
        const idCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const quantityCell = newRow.insertCell(2);
        const priceCell = newRow.insertCell(3);
        const dateCell = newRow.insertCell(4);
        const actionCell = newRow.insertCell(5);

        idCell.textContent = product.id;
        nameCell.textContent = product.name;
        quantityCell.textContent = product.quantity;
        priceCell.textContent = product.price;
        dateCell.textContent = product.expireDate;


        // Add Buy button with event listener
        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.onclick = function () {
            buyProduct(product.id);
        };
        actionCell.appendChild(buyButton);
    });

}


updateTable();


function buyProduct(productId, row) {
    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        const availableQuantity = products[productIndex].quantity;
        const quantityToBuy = prompt(`How many ${products[productIndex].name}(s) would you like to buy?`, 1);

        if (quantityToBuy !== null && !isNaN(quantityToBuy) && quantityToBuy > 0 && quantityToBuy <= availableQuantity) {
            products[productIndex].quantity -= quantityToBuy;

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
    }
}
