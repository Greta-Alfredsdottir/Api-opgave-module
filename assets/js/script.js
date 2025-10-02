// her er vores main javascript
// Her skal vi samle sammen alle vores moduler


import getDogImages from "./module/api.js"
// Importerer funktionen getDogImages fra din api.js modulfil.

getDogImages(12)
.then((data)=>{
  view(data)
})
// Kalder getDogImages med tallet 12 (henter 12 billeder).
// Når billederne er hentet, kaldes view-funktionen med dataen.

function view(data) {
  const output = document.getElementById('output');
  output.innerHTML = data
    .map((url, i) => {
      // Finder HTML-elementet med id 'output'.

      // Udtræk racen fra URL'en
      const match = url.match(/breeds\/([a-zA-Z-]+)\//);
      const breed = match ? match[1].replace('-', ' ') : 'Ukendt';
        // Finder racen i URL'en med et regulært udtryk.
      // Erstatter evt. bindestreg med mellemrum.
      // Hvis ingen race findes, bruges 'Ukendt'.

      // her kalder vi efter navn på breed
      return `
        <div class="img-container">
          <img src="${url}" alt="Dog image">
          <div class="img-text">${breed.charAt(0).toUpperCase() + breed.slice(1)}</div> 
        </div>
      `;
       // Returnerer HTML for hvert billede og race-navn.
    })
    .join('');
     // Samler alle HTML-strenge til én stor streng og indsætter i output-elementet.
}