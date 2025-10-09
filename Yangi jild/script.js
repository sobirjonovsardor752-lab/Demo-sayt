const container = document.getElementById('photo-container');

const API_URL = 'https://picsum.photos/v2/list?page=2&limit=12';

async function getPhotos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Serverda xatolik yuz berdi');

        const data = await response.json();

        container.innerHTML = '';

        data.forEach(photo => {
            const card = document.createElement('div');
            card.classList.add('photo-card');

            // Rasm
            const img = document.createElement('img');
            img.src = photo.download_url;
            img.alt = `Rasm muallifi: ${photo.author}`;
            img.classList.add('img');

            // Pastki info (ID va muallif)
            const info = document.createElement('div');
            info.classList.add('photo-info');

            const id = document.createElement('span');
            id.classList.add('photo-id');
            id.textContent = `ID: ${photo.id}`;

            const author = document.createElement('span');
            author.classList.add('photo-author');
            author.textContent = photo.author;

            info.append(id, author);
            card.append(img, info);

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Xatolik:', error);
        container.innerHTML = '<p>Xatolik yuz berdi, iltimos sahifani yangilang 😊</p>';
    }
}

getPhotos();
