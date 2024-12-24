let pkmnId;

document.getElementById("rollPkmn").onclick = function(){
    pkmnId = Math.floor(Math.random() * 1025) +1;

    document.getElementById("pkmnNo").innerHTML = pkmnId;
}

// const uniqueNumbers = new Set(); 

// while (uniqueNumbers.size < 10000) { 
//   let randomNum = Math.floor(Math.random() * 10000) + 1; 
//   uniqueNumbers.add(randomNum); 
// }

// console.log([uniqueNumbers]);


// function getRandomKey(collection) {
//     let keys = Array.from(collection.keys());
//     return keys[Math.floor(Math.random() * keys.length)];
// }
// https://stackoverflow.com/questions/42739256/how-get-random-item-from-es6-map-or-set