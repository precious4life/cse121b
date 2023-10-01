/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Precious Orugiengha",
    photo: "images/passport.jpg",
    favouriteFoods: ["yam","Beans","Chicken Pie"],
    hobbies: ["Singing", "coding", "Drawing", "photography"],
    placeLived: [],
};










/* Populate Profile Object with placesLive objects */

myProfile.placeLived.push({
    place: "Sagbama",
    length: "5 years",
});

myProfile.placeLived.push({
    place: "Uyo",
    length: "1 year",
});


/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */

document.querySelector("#name").textContent = myProfile.name;
let photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favouriteFoods.forEach(function(food){

let li = document.createElement("li");
li.textContent = food;
document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(function(hobby) {
    // Create a new <li> element
    const listItem = document.createElement("li");
    
    // Set the text content of the <li> element to the current hobby
    listItem.textContent = hobby;
    
    // Append the <li> element to the <ul> element
    hobbiesList.appendChild(listItem);
  });
  


/* Places Lived DataList */
// Assuming you have an object with a 'placesLived' property containing an array of objects

  
  // Get the <dl> element by its ID
  const placeLivedList = document.getElementById("places-lived");
  
  // Iterate over each object in the 'placesLived' array
  myProfile.placeLived.forEach(function(placeInfo) {
    // Create a new <dt> element
    const dtElement = document.createElement("dt");
    
    // Set the text content of the <dt> element to the 'place' property
    dtElement.textContent = placeInfo.place;
    
    // Create a new <dd> element
    const ddElement = document.createElement("dd");
    
    // Set the text content of the <dd> element to the 'length' property
    ddElement.textContent = placeInfo.length;
    
    // Append the <dt> and <dd> elements to the <dl> element
    placeLivedList.appendChild(dtElement);
    placeLivedList.appendChild(ddElement);
  });
  


