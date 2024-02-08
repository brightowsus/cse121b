/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile = {
    name: 'Bright Owusu',
    photo: 'images/mypic.jpeg',
    favouriteFoods: [
        'Rice',
        'Banku',
        'Kenkey'
    ],
    hobbies: [
        "Reading",
        'Swimming',
        'Coding'
    ],
    placesLived:[
        
    ]
};

/* Populate Profile Object with placesLive objects */
myprofile.placesLived.push(
    {
        place: 'Ghana, Accra',
        length: '1 year'
    },
    {
        place: 'Nigeria',
        length: '6 months'
    },
    {
        place: 'London',
        length: '18 months'
    }
);


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent= myprofile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myprofile.photo;
document.querySelector('#photo').alt = myprofile.name;

/* Favorite Foods List*/
myprofile.favouriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myprofile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
});

/* Places Lived DataList */
myprofile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
});

