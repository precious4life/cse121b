/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare a const variable named templesElement that references the HTML div
// element that will eventually be populated with temple data.
const templesElement = document.querySelector("#temples");

// Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

/* async displayTemples Function */

// This function will build a temple display "card" 
// for each item in the temple list passed to the function.
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    // Create an HTML <article> element (createElement).
    const article = document.createElement("article");

    // Create an HTML <h3> element and add the temple's templeName property to this new element.
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create an HTML <img> element and add the temple's imageUrl property 
    // to the src attribute and the temple's location property to the alt attribute.
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.imageLocation; // Fixed a typo here

    // Append the <h3> element and the <img> element 
    // to the <article> element as children. (appendChild)
    article.appendChild(h3);
    article.appendChild(img);

    // Append the <article> element to the global templesElement variable declared in Step 2.
    templesElement.appendChild(article);
  });
}

/* async getTemples Function using fetch() */

const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

  if (response.ok) {
    const data = await response.json();
    templeList = data; // Assign the data directly to templeList

    // Clear the existing list of temples
    reset();

    // Display the updated list of temples
    displayTemples(templeList);
  } else {
    console.error("Could not fetch");
  }
}

/* reset Function */

const reset = () => {
  // Get all the <article> elements within the templesElement
  const templeArticles = templesElement.querySelectorAll("article");

  // Remove each <article> element
  templeArticles.forEach((article) => {
    templesElement.removeChild(article); // Fixed a typo in this line (templeElement -> templesElement)
  });
};

/* sortBy Function */

// Declare a function expression named sortBy.
// The function should accept an argument in a parameter named temples.
const sortBy = (temples) => {
  // In this function, first call the reset function to clear the output.
  reset();

  // Define a variable named filter that obtains the value of the HTML
  // element with the ID of sortBy (The pull-down menu).
  const filterSelect = document.querySelector("#sortBy");
  const filter = filterSelect.value;

  // Use a switch statement that uses the filter
  // value as the selector responding to four (4) cases.
  switch (filter) {
    case "utah":
      // Filter for temples located in Utah
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case 'nonutah':
      // Filter for temples located outside of Utah
      displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
      break;
    case 'older':
      // Filter for temples built before 1950
      displayTemples(temples.filter((temple) => new Date(temple.dedicated).getTime() < new Date(1950, 0, 1).getTime()));
      break;
    case 'all':
    default:
      // No filter, display all temples
      displayTemples(temples);
      break;
  }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});
getTemples();
