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
    header.style.display='none'

  })

  closeIcon.addEventListener('click', function () {
    barMenu.style.display = 'none';
    header.style.display='flex'


  })

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
    isFilterOpen=!isFilterOpen

  });


  //Search
  const show = document.querySelector('.show');
  const searchDiv = document.getElementById('searchDiv');
  const searchButton = document.querySelector('.search'); 
  const closeButton = document.getElementById('closeSearch'); 

  const view = document.querySelector('.view');
  const searchButtonRes= document.querySelector('.searchIcon'); 
  

  searchButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Hadisənin qabarmasını dayandırır
    searchDiv.style.display = 'block'; 
    show.style.opacity = '0';

  });

  closeButton.addEventListener('click', function () {
    searchDiv.style.display = 'none'; 
    show.style.opacity = '1';

  });

  searchButtonRes.addEventListener('click', function () {
    searchDiv.style.display = 'block'; 
    show.style.opacity = '1';

  });  



  ///ResFilter 
  const moto=document.getElementById('moto')
  const mainShow = document.querySelector('.main-show')
  const back = document.getElementById('back')

  moto.addEventListener('click', function () {
    mainShow.style.display='flex'
    
  })

  back.addEventListener('click', function(event){
    event.preventDefault()
    window.location.href='/index.html'
  })






})