/* W05: Programming Tasks */

/* Declare and initialize global variables */

//Declare a const variable named templesElement that references the HTML div
//element that eventually will be populated with temple data.

const templesElement = document.querySelector("#temples");

//Declare a global empty array variable to store a list of temples named templeList.

let templeList = [];


/* async displayTemples Function */

//This function will build a temple display "card" 
//for each item in the temple list passed to the function.

const dispalyTemples = (temples) =>{
    temples.forEach((temple) => {
        //Create an HTML <article> element (createElement).

        const article = document.createElement("article");

        //Create an HTML <h3> element and add the temple's templeName property to this new element.

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        //Create an HTML <img> element and add the temple's imageUrl property 
        //to the src attribute and the temple's location property to the alt attribute.

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.imageLocation;

        //Append the <h3> element and the <img> element 
        //to the <article> element as children. (appendChild)

        article.appendChild(h3);
        article.appendChild(img);


        //Append the <article> element to the global templesElement variable declared in Step 2
        templesElement.appendChild(article);

        
    });
}





/* async getTemples Function using fetch()*/

const getTemples = async () =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    if (response.ok){
        const data = await response.json();
        templeList.push(data);

        data.forEach((temple) => {
            const article = document.createElement("article");
            const h3 = document.createElement("h3");
            h3.textContent = temple.templeName;
            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.imageLocation;

            article.appendChild(h3);
            article.appendChild(img);
            templesElement.appendChild(article);
            
        });
    }else{
        console.error("could not fetch");

    }
}

/* reset Function */

const reset = () =>{

    // Get all the <article> elements within the templesElement

    const templeArticles = templesElement.querySelectorAll("article");

     // Remove each <article> element

    templeArticles.forEach((article) =>{
        templeElement.removeChild(article)
    })

};


/* sortBy Function */

//Declare a function expression named sortBy.
//The function should accept a argument in a parameter named temples.
const sortBy = (temples) =>{

    //In this function, first call the reset function to clear the output.
    reset();

    //Define a variable named filter that obtains the value of the HTML 
    //element with the ID of sortBy (The pull-down menu).
    const filterSelect = document.querySelector("#sortBy");
    const filter = filterSelect.value;

    //Use a switch statement that uses the filter 
    //value as the selector responding to four (4) cases.
    switch(filter){
        case "utah":
            dispalyTemples(temples.filter((temple)=>temple.location.includes("utah")));
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
document.querySelector("#sortBy").addEventListener("change", ()=>{sortBy(templeList)});
getTemples()

