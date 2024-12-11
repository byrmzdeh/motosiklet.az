document.addEventListener('DOMContentLoaded', function () {
  //select option
  const dropdown = document.querySelector(".dropdown");
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownText = document.querySelector(".dropdown-text");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  let currentText = "Az";

  dropdownButton.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  dropdownMenu.addEventListener("click", (event) => {
    const clickedItem = event.target;

    if (clickedItem.tagName === "LI") {
      const newText = clickedItem.textContent;
      dropdownText.textContent = newText;

      const newListItem = document.createElement("li");
      newListItem.textContent = currentText;
      newListItem.setAttribute("data-value", currentText);

      currentText = newText;
      clickedItem.remove();
      dropdownMenu.appendChild(newListItem);
      dropdown.classList.remove("open");
    }
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
    }
  });



  //language Button
  const selectButtons = document.querySelectorAll('#select-buttons button')
  let activeButton = document.querySelector('#select-buttons button.active')
  selectButtons.forEach(button => {
    button.addEventListener('click', function () {
      if (activeButton) {
        activeButton.classList.remove('active')
      }

      button.classList.add('active')
      activeButton = button

    })
  })

  //barMenu

  const closeIcon = document.getElementById("close")
  const barMenu = document.getElementById('barMenu')
  const barIcon = document.getElementById("barIcon")
  const header = document.getElementById('header')

  barIcon.addEventListener('click', function () {
    barMenu.style.display = 'block';
    header.style.display = 'none'

  })

  closeIcon.addEventListener('click', function () {
    barMenu.style.display = 'none';
    header.style.display = 'flex'


  })


  //Searchconst searchDiv = document.getElementById('searchDiv');
  const searchButton = document.getElementById('search');
  const closeButton = document.getElementById('closeSearch');
  const inputSearch = document.getElementById('input');
  const searchName = document.getElementById('searchName');
  const searchDiv = document.getElementById('searchDiv'); 
  const resultContainerNull = document.getElementById('resultContainer')
  const readResultBtn = document.getElementById('readResultBtn')
  const resultButtons = document.querySelectorAll('#resultButtons button');
  const filtersResult = document.querySelector('.filtersResult select');



  const searchApi = '/src/data/all.json';
  
  // Axtarış div-i açmaq
  searchButton.addEventListener('click', function (event) {
    event.stopPropagation();
    searchDiv.style.display = 'block';
  });
  
  // Axtarış div-i bağlamaq
  closeButton.addEventListener('click', function () {
    searchDiv.style.display = 'none';
  });
  
  // Input-da axtarış sorğusunu izləmək
  inputSearch.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const query = inputSearch.value.trim(); 
  
      if (query) {
        // Sorğunu localStorage-da saxla
        localStorage.setItem('searchQuery', query);
  
        // Fetch ilə məlumatları API-dən əldə et
        fetch(searchApi)
          .then(response => response.json())
          .then((data) => {
            const results = data.filter(item => item.name && item.name.toLowerCase().includes(query.toLowerCase()));
  
            // Nəticələri saxla və nəticələr səhifəsinə yönləndir
            if (results.length > 0) {
              localStorage.setItem('searchResults', JSON.stringify(results));
              window.location.href = '/src/pages/result/index.html';
            } 
            else {
              confirm(`"${query}" üzrə axtarış nəticəsi tapılmadı`);
              searchName.textContent = `"${query}" üzrə axtarış nəticəsi tapılmadı`;
              resultContainerNull.style.display='none'
              readResultBtn.style.display='none'
              filtersResult.style.display = 'none'; // "Read More" düyməsini gizlət
              resultButtons.forEach(button => button.style.display = 'none'); // Buttons gizlədilir

            }
          })
          .catch((error) => {
            console.error('Fetch əməliyyatında problem oldu:', error);
          });
      }
    }
  });
  
  // Input dəyişildikdə axtarış başlığını yenilə
  inputSearch.addEventListener('input', () => {
    const query = inputSearch.value.trim(); // Axtarış sorğusunu əldə edirik
    
    if (query) {
      // Əgər axtarış sorğusu varsa
      searchName.textContent = `"${query}" üzrə axtarış nəticəsi`;
      searchName.style.display = 'block'; // Axtarış başlığını göstər
    } else {
      // Əgər axtarış sorğusu boşdursa
      searchName.textContent = `"${query}" üzrə axtarış nəticəsi tapılmadı`;
      searchName.style.display = 'block'; // Başlıq göstərilsin
      resultContainerNull.style.display = 'none'; // Nəticə konteynerini gizlət
      readResultBtn.style.display = 'none'; // "Read More" düyməsini gizlət
      filtersResult.style.display = 'none'; // "Read More" düyməsini gizlət
      resultButtons.forEach(button => button.style.display = 'none'); // Nəticə düymələrini gizlət
    }
  
    // Əgər query boşdursa, searchName gizlədilsin
    if (query === '') {
      searchName.style.display = 'none'; // Başlıq gizlədilsin
    }
  });
  
  


  
  
  

 ///Foot
 const footCards = document.getElementById('footCards');
 const footUrl = '/src/data/data.json';

 fetch(footUrl)
   .then(res => res.json())
   .then(data => {
     function renderCards() {
       let displayedData = data;

       if (window.innerWidth >= 324 && window.innerWidth <= 768) {
         displayedData = data.slice(0, 2); // Yalnız ilk 2 kart göstərilir
       }

       const cardsFoot = displayedData.map(item => `
                     <div class='card'>
                         <ul>
                             <li>${item.title1}</li>
                             <li>${item.title2}</li>
                             <li>${item.title3}</li>
                             <li>${item.title4}</li>
                             <li>${item.title5}</li>
                             <li>${item.title6}</li>
                             <li>${item.title7}</li>
                             <li>${item.title8}</li>
                             <li>${item.title9}</li>
                             <li>${item.title10}</li>
                             <li>${item.title11}</li>
                             <li>${item.title12}</li>
                         </ul>
                     </div>
                 `).join('');

       footCards.innerHTML = cardsFoot;
     }

     renderCards();

     window.addEventListener('resize', renderCards);
   })
   .catch(err => {
     console.error('Xəta baş verdi:', err);
     footCards.innerHTML = '<p>Fayl yüklənmədi. Zəhmət olmasa, sonra yenidən cəhd edin.</p>';
   });




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





})