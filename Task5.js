let allProducts = [];
const container = document.getElementById('productContainer');

// 1. API Integration & Error Handling
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (!response.ok) throw new Error('Network response was not ok');
        
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        container.innerHTML = `<p class="status-msg">Failed to load data. Please try again later.</p>`;
        console.error('Fetch Error:', error);
    }
}

// 2. Dynamic UI Rendering
function displayProducts(products) {
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p>No products found.</p>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Requirements: Max 50 chars for title, 60 for description
        const shortTitle = product.title.length > 50 ? product.title.substring(0, 47) + '...' : product.title;
        const shortDesc = product.description.length > 60 ? product.description.substring(0, 57) + '...' : product.description;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${shortTitle}</h3>
            <p>${shortDesc}</p>
            <p class="price">$${product.price}</p>
            <button class="btn-view" onclick="viewDetails(${product.id})">View More</button>
            <button class="btn-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// 3. Functional Requirements (View More & Add to Cart)
function viewDetails(id) {
    const item = allProducts.find(p => p.id === id);
    alert(`PRODUCT DETAILS:\n\n${item.title}\n\nDescription: ${item.description}\n\nPrice: $${item.price}`);
}

function addToCart(id) {
    const item = allProducts.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.title} added to cart!`);
}

// 4. Intermediate & Advanced Features (Search, Filter, Sort)
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sortOrder = document.getElementById('sortPrice').value;

    let filtered = allProducts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || p.category === category;
        return matchesSearch && matchesCategory;
    });

    if (sortOrder === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

// Event Listeners
document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('sortPrice').addEventListener('change', applyFilters);

// Initial Fetch
fetchProducts();