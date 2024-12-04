
document.addEventListener('DOMContentLoaded', function () {

    ///Two

    const twoCards = document.getElementById('twoCards');
    const premiumFetch = '/src/data/premium.json';

    fetch(premiumFetch)
        .then(res => res.json())
        .then(data => {
            const premiumCard = `
                <div class="special">
                    <img src="/src/assets/image/home/premiumColor.png" alt="err">
                    <p>Öz elanını premium et</p>
                    <span>7 AZN-dan başlayaraq</span>
                    <button>Premium et</button>
                </div>
            `;

            const regularCards = data.slice(0, 15).map(item => `
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

            const combinedCards = premiumCard + regularCards;

            twoCards.innerHTML = combinedCards;
        })
        .catch(err => {
            console.error('Xəta baş verdi:', err);
            twoCards.innerHTML = '<p>Fayl yüklənmədi. Zəhmət olmasa, sonra yenidən cəhd edin.</p>';
        });


    ///Three
    const threeCards = document.getElementById('threeCards');
    const vipFetch = '/src/data/vip.json';

    fetch(vipFetch)
        .then(res => res.json())
        .then(data => {
            const vipCards = `
                    <div class="special">
                        <img src="/src/assets/image/home/vipColor.png" alt="err">
                        <p>Öz elanını VIP et</p>
                        <span>3 AZN-dan başlayaraq</span>
                        <button>Premium et</button>
                    </div>
                `;

            const apiCards = data.slice(0, 15).map(item => `
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

            const matchCard = vipCards + apiCards;

            threeCards.innerHTML = matchCard;
        })
        .catch(err => {
            console.error('Xəta baş verdi:', err);
            threeCards.innerHTML = '<p>Fayl yüklənmədi. Zəhmət olmasa, sonra yenidən cəhd edin.</p>';
        });


    ///Four
    const fourCards = document.getElementById('fourCards');
    const all = '/src/data/all.json';

    fetch(all)
        .then(res => res.json())
        .then(data => {
            const allCards = data.slice(0, 24).map(item => `
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


            fourCards.innerHTML = allCards;
        })
        .catch(err => {
            console.error('Xəta baş verdi:', err);
            fourCards.innerHTML = '<p>Fayl yüklənmədi. Zəhmət olmasa, sonra yenidən cəhd edin.</p>';
        });


    ///Five
    const fiveCards = document.getElementById('fiveCards');
    const partsUrl = '/src/data/parts.json';

    fetch(partsUrl)
        .then(res => res.json())
        .then(data => {
            const partCards = data.slice(0, 8).map(item => `
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


            fiveCards.innerHTML = partCards;
        })
        .catch(err => {
            console.error('Xəta baş verdi:', err);
            fiveCards.innerHTML = '<p>Fayl yüklənmədi. Zəhmət olmasa, sonra yenidən cəhd edin.</p>';
        });


  
});
