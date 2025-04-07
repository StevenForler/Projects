async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){

            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
    }

    catch(error){
        console.error(error);
    }
}

// Pokemon stats sections. look into pulling multiple
// AI generated
// async function fetchData(urls) {
//     try {
//       const promises = urls.map(url => fetch(url).then(response => response.json()));
//       const results = await Promise.all(promises);
//       return results;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  
//   const apiBaseUrl = 'https://api.example.com';
//   const endpoints = ['/endpoint1', '/endpoint2', '/endpoint3'];
//   const urls = endpoints.map(endpoint => apiBaseUrl + endpoint);
  
//   fetchData(urls)
//     .then(data => {
//       console.log("Data from all endpoints:", data);
//     });

// pull stats from the pokemon being searched
// have random pokemon generator button