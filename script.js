
function showMessage() {
    alert("Welcome to AgriConnect! Registration is coming soon.");
}

function orderProduct(productName) {
    alert("You selected " + productName +
          ". Our ordering system is coming soon!");
}

function searchProducts() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        const productName = product.querySelector("h3")
                                    .textContent.toLowerCase();

        if (productName.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


const produceForm = document.getElementById("produceForm");

produceForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("produceName").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;

    const farmerProducts = document.getElementById("farmerProducts");

    const emptyMessage = farmerProducts.querySelector("p");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    const newProduct = document.createElement("div");

    newProduct.className = "product";

    newProduct.innerHTML = `
        <h3>${name}</h3>
        <p>Category: ${category}</p>
        <p>Price: KES ${price} per kg</p>
        <p>Quantity: ${quantity} kg</p>
        <p>Location: ${location}</p>
    `;

    farmerProducts.appendChild(newProduct);

    alert("Your produce has been added successfully!");

    produceForm.reset();
});
