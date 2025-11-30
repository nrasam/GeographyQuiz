import { GEOGRAPHY_DATA } from "./landmarks.js";

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

  // Filter out the correct answer
  continents = continents.filter((option) => option !== continent);

  // Shuffle the continents list
  continents = shuffleArray(continents);

  // Retain only the first 3 elements
  continents = continents.slice(0, 3);

  // Insert the correct answer randomly back into the list
  continents = insertRandomly(continents, continent);

  return continents;
}

export function getCountryOptions(continent, country) {
  // Get list of countries
  let countries = Object.keys(GEOGRAPHY_DATA[continent]);
  console.log(countries);

  // Filter out the correct answer
  countries = countries.filter((option) => option !== country);

  // Shuffle the country list
  countries = shuffleArray(countries);

  // Retain only the first 3 elements
  countries = countries.slice(0, 3);

  // Insert the correct answer randomly back into the list
  countries = insertRandomly(countries, country);

  return countries;
}

export function getCityOptions(continent, country, city) {
  // Get list of cities
  let cities = GEOGRAPHY_DATA[continent][country];
  console.log(cities);

  // Filter out the correct answer
  cities = cities.filter((option) => option !== city);

  // Shuffle the city list
  cities = shuffleArray(cities);

  // Retain only the first 3 elements
  cities = cities.slice(0, 3);

  // Insert the correct answer randomly back into the list
  cities = insertRandomly(cities, city);

  return cities;
}
