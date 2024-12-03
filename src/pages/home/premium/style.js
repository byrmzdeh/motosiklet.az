document.addEventListener('DOMContentLoaded', function () {
    const openFilter = document.getElementById('openFilter');
    const filterMain = document.querySelector('.filter-main');

    openFilter.addEventListener('click', function() {
        if (filterMain.style.display === 'block') {
            filterMain.style.display = 'none';
            openFilter.textContent = 'Filteri ac';
        } else {
            filterMain.style.display = 'block';
            openFilter.textContent = 'Filteri bagla';
        }
    });


})