// her laver vi vores moduler 

export default async function getDogImages(count){  //Her får vi tal fra script, hvor mange billeder vi får
    return fetch('https://dog.ceo/api/breeds/image/random/'+ count) 
  .then(response => response.json()) // Når vi får svar, konverterer vi det til JSON
  .then(data => {
    return data.message;  // her laver vi return i stefet for view, sender data ud igen
  })
  .catch(error => {
    console.error('Fejl:', error);  // Hvis der opstår fejl, vises den i konsollen
  });
}