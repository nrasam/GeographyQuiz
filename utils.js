import { LANDMARKS, GEOGRAPHY_DATA, images } from "./landmarks.js";

/**
 *
 * @param {*} arr An array to shuffle
 * @returns The array with shuffled elements
 */
export function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 *
 * @param {*} arr The array to get a random element from
 * @returns A random element
 */
export function getRandomElementFromArray(arr) {
  // Get a random index
  let randomIndex = Math.floor(Math.random() * arr.length);

  // Use that index to access the element
  return arr[randomIndex];
}

/**
 *
 * @param {*} arr The array to insert into
 * @param {*} element The element to insert
 * @returns The array with the randomly inserted element
 */
function insertRandomly(arr, element) {
  let randomIndex = Math.floor(Math.random() * (arr.length + 1));
  // Insert element at random index
  arr.splice(randomIndex, 0, element);
  return arr;
}

/**
 *
 * @param {*} continent The correct answer
 * @returns An array of 4 random continents including the correct answer
 */
export function getContinentOptions(continent) {
  // Get list of continents
  let continents = Object.keys(GEOGRAPHY_DATA);
  //console.log("Continents", continents);
  // Filter out the correct answer
  continents = continents.filter((option) => option !== continent);
  //console.log("Continents with correct answer removed", continents);

  // Shuffle the continents list
  continents = shuffleArray(continents);
  //console.log("Continents shuffled", continents);

  // Retain only the first 3 elements
  continents = continents.slice(0, 3);
  //console.log("Continents spliced", continents);

  // Insert the correct answer randomly back into the list
  continents = insertRandomly(continents, continent);

  //console.log("Final options", continents);
  return continents;
}

//MIXING POSSIBLE ANSWERS START --TIP BY THE TA *WE CAN USE ^SET^ COLLECTION FOR THE WHILE and IF PART OF THE CODE--
/**
 *
 * @param {*} num the correct answer which later has to be shuffled (on a new function)
 * @returns the shuffled answers containing the correct and wrong answers!
 */
export function optionsContinent(num) {
  //Parameter is the correct answer which later has to be shuffled (on a new function)
  let listContinents = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Australia",
    "Antartica",
    "Africa",
  ]; //List of all the continents
  let chosenContinents = []; //Array that will contain the 3 random continents + the correct continent
  let indexChosen = []; //Array that will contain the numerical value of all the continents in *ChosenContinents* (also makes sure that number are not repited.)
  chosenContinents.push(listContinents[num]); //Stores the new continent in the first place of the 4-slot Array.
  indexChosen.push(num); //Stores the numerical value of the CORRECT continent into the first slot of the Array.
  for (let i = 0; i < 3; i++) {
    //Gives us 3 random continents to put in the answer buttons
    let randomIndex = Math.floor(Math.random() * 7); //Chooses a random number from 0 to 6 (including 6).
    //If the number got from the random index is already been used before we have to change it.
    if (
      randomIndex == indexChosen[0] ||
      randomIndex == indexChosen[1] ||
      randomIndex == indexChosen[2] ||
      randomIndex == indexChosen[3] ||
      randomIndex == indexChosen[4] ||
      randomIndex == indexChosen[5] ||
      randomIndex == indexChosen[6]
    ) {
      //While the number we currently have to get does not become different from the previous used, we must continue calculating new indices.
      while (
        randomIndex == indexChosen[0] ||
        randomIndex == indexChosen[1] ||
        randomIndex == indexChosen[2] ||
        randomIndex == indexChosen[3] ||
        randomIndex == indexChosen[4] ||
        randomIndex == indexChosen[5] ||
        randomIndex == indexChosen[6]
      ) {
        randomIndex = Math.floor(Math.random() * 7);
      }
      indexChosen.push(randomIndex); //Found a new index, store the numerical value inside the indexChosen (So it will not be used again later).
      chosenContinents.push(listContinents[randomIndex]); //Store the name of the continent in the chosenContinent options.
    } else {
      //If the number from the random index has NOT been previously used then:
      indexChosen.push(randomIndex); //Found a new index, store the numerical value inside the indexChosen (So it will not be used again later).
      chosenContinents.push(listContinents[randomIndex]); //Store the name of the continent in the chosenContinent options.
    }
  }

  let usedSet = new Set(); //Creates a set (that will contain all different values), to store the already used indeces.
  let shuffledAnswer = []; //Creates an array what will contain the shuffled answers.
  while (usedSet.size < chosenContinents.length) {
    //While the size of usedSet does not reach the length of chosenContinents:
    let index = Math.floor(Math.random() * chosenContinents.length); //Calculates a random number (as big as the array length) to find a new index
    if (!usedSet.has(index)) {
      //Checks if the index was not used.
      usedSet.add(index); // Adds the new index into the variable of usedSet *indeces*.
      shuffledAnswer.push(chosenContinents[index]); //Pushes the name of the continent into the array.
    }
  }
  return shuffledAnswer; //Returns the shuffled answers containing the correct and wrong answers!
}

//MIXING POSSIBLE ANSWERS START - COUNTRIES
function optionCountries(num) {
  let countries = [
    "Brazil",
    "Peru",
    "France",
    "Australia",
    "China",
    "India",
    "Egypt",
    "Turkey",
    "UK",
    "USA",
    "Italy",
    "Iran",
    "Spain",
  ]; //Array with all the countries
  let chosenCountries = []; //Array that will contain the correct answer, plus the 3 wrong answers
  let numberChosen = new Set(); //This set will avoid that the same country appears on the round.
  numberChosen.add(countries[num]); //Saves the first CORRECT country inside the set.
  chosenCountries.push(countries[num]); //Saves the first CORRECT country into the answers array.
  for (let i = 0; chosenCountries.length < 4; i++) {
    //Repeat this steps until the 4 spaces have been filled.
    let number = 0; //Let there be a variable to choose a random index.
    number = Math.floor(Math.random() * countries.length); //Let the variable number be an index from 0-13.
    if (numberChosen.has(countries[number])) {
      //If the country is already found inside the set then:
      while (numberChosen.has(countries[number])) {
        //Continue looking for a country until finding one that is NOT found inside the set.
        number = Math.floor(Math.random() * countries.length); //Continue calculating a random number between 0 and 13.
      }
    }
    numberChosen.add(countries[number]); //Add the new country inside the set.
    chosenCountries.push(countries[number]); //Add the new country inside the array.
  }
  //Random order -->
  let countriesNewOrder = []; //This array will contain the mixed order answers.
  let newSet = new Set(); //This set will make sure that the same answer is not repeated more then once.
  for (let i = 0; countriesNewOrder.length < chosenCountries.length; i++) {
    //Repeats this process until the length of the mixed array reaches the same length of the original answer array.
    let number = Math.floor(Math.random() * chosenCountries.length); //Let the variable number be an index from 0-3.
    if (newSet.has(number)) {
      //If the set already has this number:
      while (newSet.has(number)) {
        //Continue looking for a number that is NOT found inside the set.
        number = Math.floor(Math.random() * chosenCountries.length); //Continue calculating a random number between 0 and 3.
      }
    }
    newSet.add(number); //Add the new number inside the set.
    countriesNewOrder.push(chosenCountries[number]); //Add the selected country inside the new mixed array.
  }

  return countriesNewOrder; //Returns the mixed array.
}

//MIXING POSSIBLE ANSWERS START - CITIES
function optionCities(num) {
  let cities = [
    "Rio de Janeiro",
    "Cusco",
    "Paris",
    "Sydney",
    "Beijing",
    "Agra",
    "Cairo",
    "Capadocia",
    "London",
    "New York",
    "Rome",
    "Salisbury",
    "Tehran",
    "Valencia",
  ]; //Array of cities
  let chosenCities = []; //Array that will contain the correct answer, plus the 3 wrong answers
  let numberChosen = new Set(); //This set will avoid that the same city appears on the round.
  numberChosen.add(cities[num]); //Stores the city inside the set.
  chosenCities.push(cities[num]); //Stores the city inside the answers array.
  for (let i = 0; chosenCities.length < 4; i++) {
    //Repeat this steps until the 4 spaces have been filled.
    let number = 0; //Let there be a variable to choose a random index.
    number = Math.floor(Math.random() * cities.length); //Let the variable number be an index from 0-14.
    if (numberChosen.has(cities[number])) {
      //If the city is already found inside the set then:
      while (numberChosen.has(cities[number])) {
        //Continue looking for a city until finding one that is NOT found inside the set.
        number = Math.floor(Math.random() * cities.length); //Continue calculating a random number between 0 and 14.
      }
    }
    numberChosen.add(cities[number]); //Add the new city inside the set.
    chosenCities.push(cities[number]); //Add the new city inside the array.
  }
  //Random order -->
  let citiesNewOrder = []; //This array will contain the mixed order answers.
  let newSet = new Set(); //This set will make sure that the same answer is not repeated more then once.
  for (let i = 0; citiesNewOrder.length < chosenCities.length; i++) {
    //Repeats this process until the length of the mixed array reaches the same length of the original answer array.
    let number = Math.floor(Math.random() * chosenCities.length); //Let the variable number be an index from 0-3.
    if (newSet.has(number)) {
      //If the set already has this number:
      while (newSet.has(number)) {
        //Continue looking for a number that is NOT found inside the set.
        number = Math.floor(Math.random() * chosenCities.length); //Continue calculating a random number between 0 and 3.
      }
    }
    newSet.add(number); //Add the new number inside the set.
    citiesNewOrder.push(chosenCities[number]); //Add the selected city inside the new mixed array.
  }
  return citiesNewOrder;
}
