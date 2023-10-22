// Define variables for DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateButton = document.getElementById('generate-button');

// Event listener for the "Generate Quote" button
generateButton.addEventListener('click', () => {
  // Disable the button while fetching a new quote
  generateButton.disabled = true;

  // Fetch a random quote from the Quotable API
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      // Update the DOM with the fetched quote
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;

      // Re-enable the button
      generateButton.disabled = false;
    })
    .catch((error) => {
      // Handle errors
      console.error('Error fetching quote:', error);

      // Re-enable the button in case of an error
      generateButton.disabled = false;
    });
});
