document.addEventListener('DOMContentLoaded', function () {
    const openFilter = document.getElementById('openFilter');
    const filterMain = document.querySelector('.filter-main');

    openFilter.addEventListener('click', function () {
        const spanText = openFilter.querySelector('span');
        if (filterMain.style.display === 'block') {
            filterMain.style.display = 'none';
            spanText.textContent = 'Filteri aç';
        } else {
            filterMain.style.display = 'block';
            spanText.textContent = 'Filteri bağla';
        }
    });


    const fiveCards = document.getElementById('fiveCards');
    const partsUrl = '/src/data/parts.json';
    const readMore = document.getElementById('readMore')

    fetch(partsUrl)
        .then(res => res.json())
        .then(data => {

            const regularCards = data.slice(0, 24).map(item => `
                 <div class="card">
                            <div class="imgDiv">
                                <img class="imgMoto img1" src="${item.img.img1}" alt="err">
                                <img class="imgMoto img2" src="${item.img.img2}" alt="err">
                                <div class="heart">
                                    <img src="/src/assets/image/home/heart.png" alt="err">
                                </div>
                                <div class="crown">
                                    <img src="/src/assets/image/home/crown.png" alt="">
                                </div>
                                <div class="premiumIcon">
                                    <img src="/src/assets/image/home/cardPre.png" alt="err">
                                </div>
                            </div>
                            <div class="information">
                                <p class="name">${item.name}</p>
                                <span>${item.type}</span>
                                <h5>${item.price} AZN</h5>
                            </div>
                        </div>
            `).join('');


            fiveCards.innerHTML =  regularCards;

            readMore.addEventListener('click', function () {
                const remainingCard = data.slice(24).map(item => `
                         <div class="card">
                            <div class="imgDiv">
                                <img class="imgMoto img1" src="${item.img.img1}" alt="err">
                                <img class="imgMoto img2" src="${item.img.img2}" alt="err">
                                <div class="heart">
                                    <img src="/src/assets/image/home/heart.png" alt="err">
                                </div>
                                <div class="crown">
                                    <img src="/src/assets/image/home/crown.png" alt="">
                                </div>
                                <div class="premiumIcon">
                                    <img src="/src/assets/image/home/cardPre.png" alt="err">
                                </div>
                            </div>
                            <div class="information">
                                <p class="name">${item.name}</p>
                                <span>${item.type}</span>
                                <h5>${item.price} AZN</h5>
                            </div>
                        </div>
                    `).join('')

                fiveCards.innerHTML += remainingCard;

                readMore.style.display = 'none';

            })


        })
        .catch(err => {
            console.error('Xəta baş verdi:', err);
            premiumCards.innerHTML = '<p>Fayl yüklənmədi. Zəhmət olmasa, sonra yenidən cəhd edin.</p>';
        });



})