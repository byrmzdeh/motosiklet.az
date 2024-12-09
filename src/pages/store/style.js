document.addEventListener('DOMContentLoaded', function () {
    const storeCards = document.getElementById('storeCards');
    const fetchUrlStore = '/src/data/store.json'; 
    const showMoreButton = document.getElementById('cardsMore'); 

    let fullData = []; 
    let itemsToShow = 14; 

    function displayCards() {
        const limitedData = fullData.slice(0, itemsToShow);
        storeCards.innerHTML = limitedData.map(item => `
           <a href='/src/companents/storeDetail/index.html?id=${item.id}'>
              <div class="salonCard" data-id=${item.id}>
                <img src="${item.img}" alt="err">
                <div class="write">
                    <h5>${item.name}</h5>
                    <p>${item.title}</p>
                    <span>${item.number} elan</span>
                </div>
            </div>
           </a>
        `).join('');

        showMoreButton.style.display = fullData.length > itemsToShow ? 'block' : 'none';
    }

    fetch(fetchUrlStore)
        .then(res => res.json())
        .then(data => {
            fullData = data;
            displayCards();
        })
        .catch(err => console.error('Xəta baş verdi:', err));

    showMoreButton.addEventListener('click', function () {
        itemsToShow += 6;
        displayCards();
    });
});
