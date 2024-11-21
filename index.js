console.log("Hai! Welcome to the console, happy debugging! :3");

import { validateForm } from "./validateForm.js";
import { calculateCosts } from "./calculateCosts.js";

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;

  // Get the user's level - userLevel (string)
  let userLevel = document.querySelector("#level").value;

  // Get the user's hours of study - userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  const result = validateForm({ userEmail, userLevel, userHours });

  console.log({ result });

  if (result) {
    // Calculate the total cost
    const output = calculateCosts(result);
    console.log({ output });
  }
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
