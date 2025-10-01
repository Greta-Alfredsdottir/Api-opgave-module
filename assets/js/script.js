// her er vores javascript

fetch('https://dog.ceo/api/breeds/image/random/50')
  .then(response => response.json())
  .then(data => {
    view(data);
  })
  .catch(error => {
    console.error('Fejl:', error);
  });

function view(data) {
  const output = document.getElementById('output');
  output.innerHTML = data.message
    .map((url, i) => {
      // Udtræk racen fra URL'en
      const match = url.match(/breeds\/([a-zA-Z-]+)\//);
      const breed = match ? match[1].replace('-', ' ') : 'Ukendt';
      return `
        <div class="img-container">
          <img src="${url}" alt="Dog image">
          <div class="img-text">${breed.charAt(0).toUpperCase() + breed.slice(1)}</div>
        </div>
      `;
    })
    .join('');
}