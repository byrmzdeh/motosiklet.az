document.addEventListener('DOMContentLoaded', () => {
    const oneAccordions = document.getElementById('oneAccordions');
    const twoAccordions = document.getElementById('twoAccordions');
    const accordionUrl = '/src/data/accordion.json';

    if (!oneAccordions || !twoAccordions) {
        console.error("One of the required elements ('oneAccordions' or 'twoAccordions') is missing.");
        return;
    }

    fetch(accordionUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            // İlk 4 elementi birinci hissəyə əlavə edirik
            const oneAccordion = data.slice(0, 4).map(item => `
                <div class="accordion">
                    <div class="question">
                        <p>${item.question}</p>
                        <img src="/src/assets/image/help/down.png" alt="err">
                    </div>
                    <div class="answer">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `).join('');

            // Qalan elementləri ikinci hissəyə əlavə edirik
            const twoAccordion = data.slice(4).map(item => `
                <div class="accordion">
                    <div class="question">
                        <p>${item.question}</p>
                        <img src="/src/assets/image/help/down.png" alt="err">
                    </div>
                    <div class="answer">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `).join('');

            oneAccordions.innerHTML = oneAccordion;
            twoAccordions.innerHTML = twoAccordion;

            const allAccordions = document.querySelectorAll('.accordion');

            allAccordions.forEach(accordion => {
                const question = accordion.querySelector('.question');
                const answer = accordion.querySelector('.answer');
                const img = question.querySelector('img');


                question.addEventListener('click', () => {
                    answer.classList.toggle('answerClick');

                    if (answer.classList.contains('answerClick')) {
                        img.src = '/src/assets/image/help/up.png'; 
                        img.alt = 'up-icon';
                    } else {
                        img.src = '/src/assets/image/help/down.png'; 
                        img.alt = 'down-icon';
                    }
                });
            });
        })
        .catch(err => {
            console.error('Failed to fetch data:', err);
        });
});
