/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Precious Orugiengha";
let currentYear = new Date().getFullYear();
let profilePicture = 'images/passport.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Sushi", "Burgers", "Tacos"]; // Your favorite foods array

// Join the favorite foods array into a single string with line breaks
const foodsString = favoriteFoods.join("<br>");

// Set the innerHTML property of the foodElement to display the favorite foods
foodElement.innerHTML = foodsString;

const newFavoriteFood = "Ice Cream";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Removes the first element from the favorite foods array.
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Removes the last element from the favorite foods array.
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
