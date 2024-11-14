console.log("Hai! Welcome to the console, happy debugging! :3");

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  console.log({ userEmail });

  // Get the user's level - userLevel (string)
  let userLevel = document.querySelector("#level").value;
  console.log({ userLevel });

  // Get the user's hours of study - userHours (number)
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log({ userHours });
});

// Capture users input on form submission
// Get the user's email address - userEmail (string)
// Get the user's level - userLevel (string)
// Get the user's hours of study - userHours (number)

// Validate the user's input
// Check if the user has selected a level - check against allowed level
// Check if the user has provided an email address
// Check if the user has specified at least one hour of study - cannot be negative- must be >= 1 and <= the max number allowed for level
// Check if the number of hours requested is within the allowed range

// Calculate the total cost
// Display the total cost to the user
