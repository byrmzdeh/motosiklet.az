const resultButtons = document.querySelectorAll('#resultButtons button');

if (window.location.pathname === '/src/pages/result/index.html') {
  const resultsContainer = document.getElementById('resultContainer');
  const results = JSON.parse(localStorage.getItem('searchResults')) || [];
  const searchTitle = document.getElementById('searchName'); // Axtarış başlığı
  const readMoreButton = document.getElementById('readResultBtn'); // "Read More" düyməsi
  const searchQuery = localStorage.getItem('searchQuery') || '';

  // Axtarış başlığını yeniləyirik
  if (searchQuery) {
    searchTitle.textContent = `"${searchQuery}" üzrə axtarış nəticəsi` ;
    searchTitle.style.display = 'block'; // Başlıq göstərilir
  } else {
    searchTitle.style.display = 'none'; // Əgər boşsa, başlıq gizlənir
    readMoreButton.style.display = 'none';
    resultButtons.forEach(button => button.style.display = 'none'); // Buttons gizlədilir
  }

  // Nəticələr varsa, card-ları göstər
  if (resultsContainer) {
    if (results.length > 0) {
      let content = '';
      const cardsToShowInitially = 20;
      const visibleResults = results.slice(0, cardsToShowInitially);

      visibleResults.forEach(item => {
        content += `
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
        `;
      });

      resultsContainer.innerHTML = content;

      // "Read More" düyməsi yalnız daha çox nəticə varsa göstərilsin
      if (results.length > cardsToShowInitially && readMoreButton) {
        readMoreButton.style.display = 'block';
        readMoreButton.addEventListener('click', () => {
          let additionalContent = '';
          const remainingResults = results.slice(cardsToShowInitially);

          remainingResults.forEach(item => {
            additionalContent += `
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
            `;
          });

          resultsContainer.innerHTML += additionalContent;
          readMoreButton.style.display = 'none'; // Daha çox nəticə yükləndikdən sonra düyməni gizlət
        });
      }
    } else {
      // Nəticə tapılmadıqda resultButtons düymələrini gizlət
      resultButtons.forEach(button => button.style.display = 'none');
    }
  }
}

// Buttons part (səhifədəki düymələrin funksiyası)
resultButtons[0].classList.add('active');

// Başlanğıcda birinci düymənin 'lineBtn' elementini gizləyirik
const firstLine = resultButtons[0].querySelector('.lineBtn');
if (firstLine) {
  firstLine.style.display = 'none';
}

resultButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    resultButtons.forEach(btn => btn.classList.remove('active'));

    resultButtons.forEach(btn => {
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
      const secondButtonLine = resultButtons[1].querySelector('.lineBtn');
      if (secondButtonLine) {
        secondButtonLine.style.display = 'none';
      }
    }

    if (index === 1) {
      const oneButtonLine = resultButtons[0].querySelector('.lineBtn');
      const secondButtonLine = resultButtons[1].querySelector('.lineBtn');
      if (secondButtonLine, oneButtonLine) {
        oneButtonLine.style.display = 'none';
        secondButtonLine.style.display = 'none';
      }
    }

    // Klik olunan düyməyə 'active' sinfi əlavə edirik
    this.classList.add('active');
  });
});
