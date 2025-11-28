export const LANDMARKS = [
  {
    name: "Christ the Redeemer",
    img: "photos/riodejaneiro.jpeg",
    continent: "South America",
    country: "Brazil",
    city: "Rio de Janeiro",
  },
  {
    name: "Machu Picchu",
    img: "photos/MachuPicchu.jpeg",
    continent: "South America",
    country: "Peru",
    city: "Cusco",
  },
  {
    name: "Eiffel Tower",
    img: "photos/paris.jpeg",
    continent: "Europe",
    country: "France",
    city: "Paris",
  },
  {
    name: "Louvre",
    img: "photos/paris2.avif",
    continent: "Europe",
    country: "France",
    city: "Paris",
  },
  {
    name: "Sydney Opera House",
    img: "photos/sydney.jpeg",
    continent: "Australia",
    country: "Australia",
    city: "Sydney",
  },
  {
    name: "Great Wall",
    img: "photos/Beijing.jpeg",
    continent: "Asia",
    country: "China",
    city: "Beijing",
  },
  {
    name: "Taj Mahal",
    img: "photos/agra.avif",
    continent: "Asia",
    country: "India",
    city: "Agra",
  },
  {
    name: "Great Pyramids of Giza",
    img: "photos/cairo.jpeg",
    continent: "Africa",
    country: "Egypt",
    city: "Cairo",
  },
  {
    name: "Capadocia",
    img: "photos/capadocia.avif",
    continent: "Asia",
    country: "Turkey",
    city: "Capadocia",
  },
  {
    name: "Big ben",
    img: "photos/london.jpeg",
    continent: "Europe",
    country: "UK",
    city: "London",
  },
  {
    name: "Ferris Wheel",
    img: "photos/london2.avif",
    continent: "Europe",
    country: "UK",
    city: "London",
  },
  {
    name: "New York",
    img: "photos/newyork.jpeg",
    continent: "North America",
    country: "USA",
    city: "New York",
  },
  {
    name: "Colosseum",
    img: "photos/rome.jpeg",
    continent: "Europe",
    country: "Italy",
    city: "Rome",
  },
  {
    name: "Stonehenge",
    img: "photos/salisbury.avif",
    continent: "Europe",
    country: "UK",
    city: "Salisbury",
  },
  {
    name: "Azadi Tower",
    img: "photos/tehran.avif",
    continent: "Asia",
    country: "Iran",
    city: "Tehran",
  },
  {
    name: "Plaza De Toros",
    img: "photos/valencia.avif",
    continent: "Europe",
    country: "Spain",
    city: "Valencia",
  },
];

export const CONTINENTS = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Australia",
];

export const AFRICAN_COUNTRIES = [
  "Nigeria",
  "Egypt",
  "South Africa",
  "Kenya",
  "Ghana",
  "Ethiopia",
  "Morocco",
  "Senegal",
  "Uganda",
  "Tanzania",
  "Algeria",
  "Angola",
  "Zimbabwe",
  "Rwanda",
  "Namibia",
  "Mozambique",
  "Sudan",
  "Botswana",
  "Côte d’Ivoire",
  "Tunisia",
];

export const AFRICAN_CITIES = [
  "Lagos", // Nigeria
  "Cairo", // Egypt
  "Nairobi", // Kenya
  "Johannesburg", // South Africa
  "Accra", // Ghana
  "Addis Ababa", // Ethiopia
  "Casablanca", // Morocco
  "Dakar", // Senegal
  "Kampala", // Uganda
  "Tunis", // Tunisia
  "Windhoek", // Namibia
  "Harare", // Zimbabwe
  "Kigali", // Rwanda
  "Luanda", // Angola
  "Maputo", // Mozambique
  "Algiers", // Algeria
  "Khartoum", // Sudan
  "Gaborone", // Botswana
  "Abidjan", // Côte d’Ivoire
  "Dar es Salaam", // Tanzania
];

export const ASIAN_CITIES = [
  "Tokyo", // Japan
  "Seoul", // South Korea
  "Beijing", // China
  "Shanghai", // China
  "Bangkok", // Thailand
  "Singapore", // Singapore
  "Jakarta", // Indonesia
  "Kuala Lumpur", // Malaysia
  "Manila", // Philippines
  "Hanoi", // Vietnam
  "New Delhi", // India
  "Mumbai", // India
  "Islamabad", // Pakistan
  "Dhaka", // Bangladesh
  "Kathmandu", // Nepal
  "Riyadh", // Saudi Arabia
  "Dubai", // United Arab Emirates
  "Tehran", // Iran
  "Istanbul", // Turkey (partly in Asia)
  "Jerusalem", // Israel
];

//VALUE FOR EACH IMG START
/*All images have been given a value which will have to go inside the fuctions on (utils.js).
The number of continent/country/city is the corresponding index of their position in the array */
export const images = {
  "photos/agra.avif": {
    continent: 3,
    country: 5,
    city: 5,
  },
  "photo/Beijing.jpeg": {
    continent: 3,
    country: 4,
    city: 4,
  },
  "photo/cairo.jpeg": {
    continent: 6,
    country: 6,
    city: 6,
  },
  "photo/capadocia.avif": {
    continent: 3,
    country: 7,
    city: 7,
  },
  "photo/london.jpeg": {
    continent: 2,
    country: 8,
    city: 8,
  },
  "photo/london2.avif": {
    continent: 2,
    country: 8,
    city: 8,
  },
  "photo/MachuPicchu.jpeg": {
    continent: 1,
    country: 1,
    city: 1,
  },
  "photo/newyork.jpeg": {
    continent: 0,
    country: 9,
    city: 9,
  },
  "photo/paris.jpeg": {
    continent: 2,
    country: 2,
    city: 2,
  },
  "photo/paris2.avif": {
    continent: 2,
    country: 2,
    city: 2,
  },
  "photo/riodejaneiro.jpeg": {
    continent: 1,
    country: 0,
    city: 0,
  },
  "photo/rome.jpeg": {
    continent: 2,
    country: 10,
    city: 10,
  },
  "photo/salisbury.avif": {
    continent: 2,
    country: 8,
    city: 11,
  },
  "photo/sydney.jpeg": {
    continent: 4,
    country: 3,
    city: 3,
  },
  "photo/tehran.avif": {
    continent: 3,
    country: 11,
    city: 12,
  },
  "photo/valencia.avif": {
    continent: 2,
    country: 12,
    city: 13,
  },
};

export const GEOGRAPHY_DATA = {
  Africa: {
    Egypt: [
      "Cairo",
      "Alexandria",
      "Giza",
      "Luxor",
      "Aswan",
      "Port Said",
      "Suez",
      "Mansoura",
      "Tanta",
      "Ismailia",
    ],
  },
  Asia: {
    China: [
      "Beijing",
      "Shanghai",
      "Chongqing",
      "Guangzhou",
      "Shenzhen",
      "Tianjin",
      "Wuhan",
      "Chengdu",
      "Xi'an",
      "Hangzhou",
    ],
    India: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Jaipur",
      "Surat",
      "Agra",
    ],
    Iran: [
      "Tehran",
      "Mashhad",
      "Isfahan",
      "Karaj",
      "Shiraz",
      "Tabriz",
      "Qom",
      "Ahvaz",
      "Kermanshah",
      "Yazd",
    ],
    Turkey: [
      "Istanbul",
      "Ankara",
      "Izmir",
      "Bursa",
      "Antalya",
      "Konya",
      "Adana",
      "Gaziantep",
      "Sanliurfa",
      "Kayseri",
    ],
  },
  Europe: {
    France: [
      "Paris",
      "Marseille",
      "Lyon",
      "Toulouse",
      "Nice",
      "Nantes",
      "Strasbourg",
      "Montpellier",
      "Bordeaux",
      "Lille",
    ],
    Italy: [
      "Rome",
      "Milan",
      "Naples",
      "Turin",
      "Palermo",
      "Genoa",
      "Bologna",
      "Florence",
      "Bari",
      "Catania",
    ],
    Spain: [
      "Madrid",
      "Barcelona",
      "Valencia",
      "Seville",
      "Zaragoza",
      "Malaga",
      "Murcia",
      "Palma de Mallorca",
      "Bilbao",
      "Alicante",
    ],
    UK: [
      "London",
      "Birmingham",
      "Manchester",
      "Glasgow",
      "Liverpool",
      "Leeds",
      "Sheffield",
      "Edinburgh",
      "Bristol",
      "Nottingham",
    ],
  },
  "North America": {
    USA: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ],
  },
  "South America": {
    Brazil: [
      "São Paulo",
      "Rio de Janeiro",
      "Brasília",
      "Salvador",
      "Fortaleza",
      "Belo Horizonte",
      "Manaus",
      "Curitiba",
      "Recife",
      "Porto Alegre",
    ],
    Peru: [
      "Lima",
      "Arequipa",
      "Trujillo",
      "Chiclayo",
      "Piura",
      "Iquitos",
      "Cusco",
      "Huancayo",
      "Tacna",
      "Callao",
    ],
  },
  Australia: {
    Australia: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Gold Coast",
      "Canberra",
      "Newcastle",
      "Wollongong",
      "Hobart",
    ],
  },
};
