/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName ='Bright Owusu';
const currentYear = new Date().getFullYear();
let mypic='images/mypic.jpeg'



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profilePicture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
document.querySelector('img').setAttribute('src',mypic)


/* Step 5 - Array */
const favoriteFoods = ['Pizza', 'Sushi', 'Burgers'];

/* Display favorite foods in the HTML element with id 'food' */
foodElement.innerHTML = favoriteFoods.join('<br>');

/* Declare and instantiate a variable to hold another single favorite food item */
const newFavoriteFood = 'Chocolate';

/* Add the new favorite food item to the array */
favoriteFoods.push(newFavoriteFood);

/* Append the updated array to the displayed content in the HTML element with id 'food' */
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

/* Remove the first element in the favorite food array */
favoriteFoods.shift();

/* Append the updated array after removing the first element */
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

/* Remove the last element in the favorite food array */
favoriteFoods.pop();

/* Append the final modified array to the displayed content */
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;







