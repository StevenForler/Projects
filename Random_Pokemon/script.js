

//     document.getElementById("pkmnNo").innerHTML = pkmnId;
// }


function generateRandomNumbers(count, min, max) {
  // 1: Create a `Set` object
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    // 2: Generate each random number
    uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  // 3: Immediately insert them numbers into the Set...
  return Array.from(uniqueNumbers);
}
// ...set how many numbers to generate from a given range
console.log(generateRandomNumbers(1026, 1, 1026));

//link https://www.smashingmagazine.com/2024/08/generating-unique-random-numbers-javascript-using-sets/



// pokeapi has a total of 1302 records and after number 1024 record(#1025) it starts on a new set of numbers for variations/ forms for record 1025 and on the ID number starts 10001