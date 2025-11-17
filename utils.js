// Shuffles array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

//MIXING POSSIBLE ANSWERS START --TIP BY THE TA *WE CAN USE ^SET^ COLLECTION FOR THE WHILE and IF PART OF THE CODE--
//console.log(optionsContinent(2)); //Forced CORRECT answer (TESTING!!)
function optionsContinent(num){ //Parameter is the correct answer which later has to be shuffled (on a new function)
  let listContinents = ["North America", "South America", "Europe", "Asia", "Australia", "Antartica"] //List of all the continents
  let chosenContinents = [] //Array that weill contain the 3 random continents + the correct continent
  let indexChosen = [];  //Array that will contain the numerical value of all the continents in *ChosenContinents* (also makes sure that number are not repited.)
  chosenContinents.push(listContinents[num]) //Stores the new continent in the first place of the 4-slot Array.
  indexChosen.push(num) //Stores the numerical value of the CORRECT continent into the first slot of the Array.
  for (i=0;i<3;i++){ //Gives us 3 random continents to put in the answer buttons
    let randomIndex = Math.floor(Math.random()*6); //Chooses a random number from 0 to 6 (including 6).
      //If the number got from the random index is already been used before we have to change it.
      if (randomIndex == indexChosen[0] || randomIndex == indexChosen[1] || randomIndex == indexChosen[2] || randomIndex == indexChosen[3] || randomIndex == indexChosen[4] || randomIndex == indexChosen[5] || randomIndex == indexChosen[6]){
     //While the number we currently have to get does not become different from the previous used, we must continue calculating new indices.
      while (randomIndex == indexChosen[0] || randomIndex == indexChosen[1] || randomIndex == indexChosen[2] || randomIndex == indexChosen[3] || randomIndex == indexChosen[4] || randomIndex == indexChosen[5] || randomIndex == indexChosen[6]){
        randomIndex = Math.floor(Math.random()*6); 
      }
      indexChosen.push(randomIndex); //Found a new index, store the numerical value inside the indexChosen (So it will not be used again later).
      chosenContinents.push(listContinents[randomIndex]); //Store the name of the continent in the chosenContinent options.
    } 
    else{ //If the number from the random index has NOT been previously used then:
      indexChosen.push(randomIndex); //Found a new index, store the numerical value inside the indexChosen (So it will not be used again later).
      chosenContinents.push(listContinents[randomIndex]); //Store the name of the continent in the chosenContinent options.
  }
  }  

  let usedSet = new Set(); //Creates a set (that will contain all different values), to store the already used indeces.
  let shuffledAnswer = []; //Creates an array what will contain the shuffled answers.
  while (usedSet.size < chosenContinents.length){ //While the size of usedSet does not reach the length of chosenContinents: 
    let index = Math.floor(Math.random()*chosenContinents.length); //Calculates a random number (as big as the array length) to find a new index
    if (!usedSet.has(index)){ //Checks if the index was not used.
      usedSet.add(index); // Adds the new index into the variable of usedSet *indeces*.
      shuffledAnswer.push(chosenContinents[index]); //Pushes the name of the continent into the array.
    }
  }
  return shuffledAnswer; //Returns the shuffled answers containing the correct and wrong answers!
}
//MIXING POSSIBLE ANSWERS END
