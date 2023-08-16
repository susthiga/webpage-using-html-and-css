const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const sortCostlyBtn = document.getElementById('sortCostly');
const sortCheapestBtn = document.getElementById('sortCheapest');

let products = [];

const jsonData = [
  { name: 'THE HYDRATING ILLUMINATOR', price: 50, image: 'https://www.cremedelamer.com/media/export/cms/products/responsive/lm_sku_22TW01_4x5_0.png?width=900&height=1125' },
  { name: 'THE MIST', price: 30, image: 'https://www.cremedelamer.com/media/export/cms/products/responsive/lm_prod_26248_4x5_1.png?width=900&height=1125' },
  { name: 'THE LIP BALM', price: 80, image: 'https://www.cremedelamer.com/media/export/cms/products/responsive/lm_prod_64925_4x5_1.png?width=900&height=1125' },
  { name: 'THE CLEANSING FOAM', price: 70, image: 'https://www.cremedelamer.com/media/export/cms/products/responsive/lm_prod_26245_4x5_1.png?width=900&height=1125' },
  { name: 'THE CLEANSING MISELLAR WATER', price: 60, image: 'https://www.cremedelamer.com/media/export/cms/products/responsive/lm_prod_40981_4x5_1.png?width=900&height=1125' },
  { name: 'WATER FOUNDATION', price: 40, image: 'https://www.cremedelamer.com/media/export/cms/products/responsive/lm_sku_5FT222_4x5_0.png?width=900&height=1125' },
  
  
];

products = jsonData;

// Function to render products
function renderProducts() {
  productList.innerHTML = '';

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
    `;
    productList.appendChild(productDiv);
  });
}

renderProducts();

// Search functionality
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = jsonData.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );
  products = filteredProducts;
  renderProducts();
});

// Sorting functionality
sortCostlyBtn.addEventListener('click', () => {
  products.sort((a, b) => b.price - a.price);
  renderProducts();
});

sortCheapestBtn.addEventListener('click', () => {
  products.sort((a, b) => a.price - b.price);
  renderProducts();
});
