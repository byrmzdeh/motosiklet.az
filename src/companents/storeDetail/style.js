document.addEventListener('DOMContentLoaded', function () {
    const query = new URLSearchParams(window.location.search);
    const id = query.get('id');

    const salonDetail = document.getElementById('storeDetail');
    const name = document.getElementById('name');
    const fetchUrlSalon = '/src/data/store.json';

    // Validate id before proceeding
    if (!id || isNaN(Number(id))) {
        salonDetail.innerHTML = '<p>Keçərli bir ID təqdim edilmədi.</p>';
        return;
    }

    fetch(fetchUrlSalon)
        .then(res => {
            if (!res.ok) {
                throw new Error('Data yüklenemedi');
            }
            return res.json();
        })
        .then(data => {
            const salon = data.find(x => x.id === Number(id));

            if (salon) {
                salonDetail.innerHTML = `
                             <div class="detailCard">
                <img class='cardImg' src="${salon.img}" alt="err">
                <div class="write">
                    <h4>${salon.name}</h4>
                    <p>
                        <img src="/src/assets/image/salon/eye.png" alt="err">
                        <span>12345</span>
                    </p>
                    <span>${salon.moreTitle}</span>
                    <p>
                        <img src="/src/assets/image/salon/newspaper.png" alt="err">
                        <span>${salon.number} elan</span>
                    </p>

                </div>
            </div>

            <div class="locationCard">
                <h5>Əlaqə məlumatları</h5>
                <div>
                    <img src="/src/assets/image/salon/clock.png" alt="err">
                    <span>${salon.clock}</span>
                </div>
                <div>
                    <img src="/src/assets/image/salon/phone.png" alt="err">
                    <span>${salon.phone}</span>
                </div>
                <div>
                    <img src="/src/assets/image/salon/mail.png" alt="err">
                    <span>${salon.mail}</span>
                </div>
                <div>
                    <img src="/src/assets/image/salon/map.png" alt="err">
                    <span>${salon.location}</span>
                </div>
            </div>
                `;

                name.innerHTML = `
                    <p>${salon.name}</p>
                `;
            } else {
                salonDetail.innerHTML = '<p>Bu salon tapılmadı.</p>';
            }
        })
        .catch(err => {
            console.error('Xəta baş verdi:', err);
            salonDetail.innerHTML = '<p>Data yüklənərkən xəta baş verdi.</p>';
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
    
    

});
