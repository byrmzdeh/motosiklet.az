document.addEventListener('DOMContentLoaded', function () {
    const salonCards = document.getElementById('salonCards');
    const fetchUrlSalon = '/src/data/salons.json'; 
    const categoryButtons = document.querySelectorAll('.categoryButtons button');
    const showMoreButton = document.getElementById('cardsMore'); 

    let fullData = []; 
    let activeCategory = 'Salonlar'; 
    let itemsToShow = 14; 

    function filterAndDisplay(category) {
        const filteredData = fullData.filter(item => item.category === category);
        const limitedData = filteredData.slice(0, itemsToShow);
        salonCards.innerHTML = limitedData.map(item => `
           <a href='/src/companents/salonDetail/index.html?id=${item.id}'>
              <div class="salonCard" data-id=${item.id}>
                <img src="/src/assets/image/salon/api.png" alt="err">
                <div class="write">
                    <h5>${item.name}</h5>
                    <p>${item.title}</p>
                    <span>${item.number} elan</span>
                </div>

            </div>
           </a>
        `).join('');

        showMoreButton.style.display = filteredData.length > itemsToShow ? 'block' : 'none';
    }

    fetch(fetchUrlSalon)
        .then(res => res.json())
        .then(data => {
            fullData = data;
            filterAndDisplay(activeCategory);
        })
        .catch(err => console.error('Xəta baş verdi:', err));

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            activeCategory = this.textContent;
            itemsToShow = 14;
            filterAndDisplay(activeCategory);

            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    showMoreButton.addEventListener('click', function () {
        itemsToShow += 6;
        filterAndDisplay(activeCategory);
    });
});
