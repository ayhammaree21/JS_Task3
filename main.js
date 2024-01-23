document.addEventListener('DOMContentLoaded', () => {
    async function fetchDataAndDisplay() {
      const productContainers = document.querySelectorAll('.product-container');
  
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
  
        // Check if data.products is an array
        if (!Array.isArray(data.products)) {
          console.error('Products data is not an array. Data:', data);
          return;
        }
  
        data.products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
  
          const thumbnail = document.createElement('img');
          thumbnail.classList.add('product-image');
          thumbnail.src = product.thumbnail;
  
          const title = document.createElement('div');
          title.classList.add('product-title');
          title.textContent = product.title;
  
          const price = document.createElement('div');
          price.classList.add('product-price');
          price.textContent = `$${product.price.toFixed(2)}`;
  
          productCard.appendChild(thumbnail);
          productCard.appendChild(title);
          productCard.appendChild(price);
  
          productContainers.forEach(container => {
            const clonedProductCard = productCard.cloneNode(true);
            container.appendChild(clonedProductCard);
          });
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    // Call the function to initiate the process
    fetchDataAndDisplay();
  });
  