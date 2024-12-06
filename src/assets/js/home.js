
document.addEventListener('DOMContentLoaded', function () {
      //more filter
  const readMoreFilter = document.getElementById('more');
  const openFilter = document.querySelector(".selects-open");

  let isFilterOpen = false;

  readMoreFilter.addEventListener('click', function () {
    if (isFilterOpen) {
      openFilter.style.height = '0';
      openFilter.style.opacity = '0';
      readMoreFilter.textContent = 'Daha çox filter';

    } else {
      openFilter.style.height = 'auto';
      openFilter.style.opacity = '1';
      readMoreFilter.textContent = 'Daha az filter';
    }
    isFilterOpen = !isFilterOpen

  });


  ///ResFilter 
  const etrafli = document.getElementById('etrafli')
  const mainShow = document.querySelector('.main-show')
  const eBack = document.getElementById('eBack')

  etrafli.addEventListener('click', function () {
    mainShow.style.display = 'flex'

  })

  eBack.addEventListener('click', function () {
    mainShow.style.display = 'none'

  })



  const moto = document.getElementById('moto')
  const mainShowMoto = document.querySelector('.main-showMoto')
  const eMoto = document.getElementById('eMoto')

  moto.addEventListener('click', function () {
    mainShowMoto.style.display = 'flex'

  })

  eMoto.addEventListener('click', function () {
    mainShowMoto.style.display = 'none'
  })

  const buttonOne = document.querySelectorAll('#buttons-one button');
  const buttonTwo = document.querySelectorAll('#buttons-two button');

  // Başlanğıcda birinci düyməyə 'active' sinfi əlavə edilir
  buttonOne[0].classList.add('active');
  buttonTwo[0].classList.add('mactive');

  // Başlanğıcda birinci düymənin 'lineBtn' elementini gizləyirik
  const firstButtonLine = buttonOne[0].querySelector('.lineBtn');
  if (firstButtonLine) {
    firstButtonLine.style.display = 'none';
  }

  buttonOne.forEach((button, index) => {
    button.addEventListener('click', function () {
      // Bütün düymələrdən 'active' sinfini silirik
      buttonOne.forEach(btn => btn.classList.remove('active'));

      // Bütün 'lineBtn' elementlərini idarə edirik
      buttonOne.forEach(btn => {
        const line = btn.querySelector('.lineBtn');
        if (line) {
          if (btn === this) {
            // Klik olunan düymənin 'lineBtn' elementini gizləyirik
            line.style.display = 'none';
          } else {
            // Digər düymələrdəki 'lineBtn' elementlərini göstəririk
            line.style.display = 'block';
          }
        }
      });

      // Əgər 3-cü düyməyə klik olunubsa, 2-ci düymənin 'lineBtn' elementini gizləyirik
      if (index === 2) {
        const secondButtonLine = buttonOne[1].querySelector('.lineBtn');
        if (secondButtonLine) {
          secondButtonLine.style.display = 'none';
        }
      }


      if (index === 1) {
        const oneButtonLine = buttonOne[0].querySelector('.lineBtn');
        const secondButtonLine = buttonOne[1].querySelector('.lineBtn');
        if (secondButtonLine, oneButtonLine) {
          oneButtonLine.style.display = 'none';
          secondButtonLine.style.display = 'none';
        }
      }

      // Klik olunan düyməyə 'active' sinfi əlavə edirik
      this.classList.add('active');
    });
  });

  buttonTwo.forEach(button => {
    button.addEventListener('click', function () {
      // Bütün düymələrdən 'mactive' sinfini silirik
      buttonTwo.forEach(btn => btn.classList.remove('mactive'));

      // Klik olunan düyməyə 'mactive' sinfi əlavə edirik
      this.classList.add('mactive');
    });
  });




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
