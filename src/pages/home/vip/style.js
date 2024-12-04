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


    const threeCards = document.getElementById('threeCards');
    const vipFetch = '/src/data/vip.json';
    const readMore = document.getElementById('readMore')

    fetch(vipFetch)
        .then(res => res.json())
        .then(data => {
            const vipCard = `
                 <div class="special">
                        <img src="/src/assets/image/home/vipColor.png" alt="err">
                        <p>Öz elanını VIP et</p>
                        <span>3 AZN-dan başlayaraq</span>
                        <button>Premium et</button>
                    </div>
            `;

            const regularCards = data.slice(0, 35).map(item => `
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
                        <div class="title">
                            <p>${item.year}</p>
                            <div class="line"></div>
                            <p>${item.liter} L</p>
                            <div class="line"></div>
                            <p>${item.kilometer} km</p>
                        </div>
                        <h5>${item.price} AZN</h5>
                    </div>
                </div>
            `).join('');


            threeCards.innerHTML = vipCard + regularCards;

            readMore.addEventListener('click', function () {
                const remainingCard = data.slice(35).map(item => `
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
                        <div class="title">
                            <p>${item.year}</p>
                            <div class="line"></div>
                            <p>${item.liter} L</p>
                            <div class="line"></div>
                            <p>${item.kilometer} km</p>
                        </div>
                        <h5>${item.price} AZN</h5>
                    </div>
                </div>
                    `).join('')

                threeCards.innerHTML += remainingCard;

                readMore.style.display = 'none';

            })


        })
        .catch(err => {
            console.error('Xəta baş verdi:', err);
            premiumCards.innerHTML = '<p>Fayl yüklənmədi. Zəhmət olmasa, sonra yenidən cəhd edin.</p>';
        });



})