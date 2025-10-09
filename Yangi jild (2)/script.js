const container = document.getElementById('product-container');
const API_URL = 'https://fakestoreapi.com/products';

async function getProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Serverda xatolik yuz berdi');

    const data = await response.json();
    container.innerHTML = '';

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      // Rasm
      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.title;
      img.classList.add('product-img');

      // Pastki ma’lumotlar
      const info = document.createElement('div');
      info.classList.add('product-info');

      const id = document.createElement('p');
      id.classList.add('product-id');
      id.textContent = `ID: ${product.id}`;

      const title = document.createElement('p');
      title.classList.add('product-title');
      title.textContent =`Title: ${product.title}`;

      const desc = document.createElement('p');
      desc.classList.add('product-desc');
      desc.textContent =`Description: ${product.description}`;

      const price = document.createElement('button');
      price.classList.add('product-price');
      price.textContent = `Price: $${product.price}`;

      // Tartib bilan qo‘shish
      info.append(id, title, desc);
      card.append(img, info, price);
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Xatolik:', error);
    container.innerHTML = '<p>Xatolik yuz berdi, iltimos sahifani yangilang 😊</p>';
  }
}

getProducts();
