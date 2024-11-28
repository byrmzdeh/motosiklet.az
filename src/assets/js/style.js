document.addEventListener('DOMContentLoaded', function(){
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
const selectButtons=document.querySelectorAll('#select-buttons button')
let activeButton = document.querySelector('#select-buttons button.active')
selectButtons.forEach(button=>{
    button.addEventListener('click', function () {
        if (activeButton) {
            activeButton.classList.remove('active')  
        }

        button.classList.add('active')
        activeButton=button
        
    })
})

const closeIcon = document.getElementById("close")
const barMenu = document.getElementById('barMenu')
const barIcon = document.getElementById("barIcon")

barIcon.addEventListener('click', function () {
  barMenu.style.display='block'
  
})

closeIcon.addEventListener('click', function(){
  barMenu.style.display='none'
})

})