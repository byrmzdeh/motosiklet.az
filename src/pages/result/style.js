const resultsContainer = document.getElementById('resultContainer');
const results = JSON.parse(localStorage.getItem('searchResults')) || [];

if (resultsContainer) {
  if (results.length > 0) {
    results.forEach(item => {
      const resultDiv = document.createElement('div');
      resultDiv.className = 'result-item';
      resultDiv.textContent = item.name;
      resultsContainer.appendChild(resultDiv);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found</p>';
  }
}
