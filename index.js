console.log("Hai! Welcome to the console, happy debugging! :3");

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;

  // Get the user's level - userLevel (string)
  let userLevel = document.querySelector("#level").value;

  // Get the user's hours of study - userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  // Check if the user has provided an email address
  if (userEmail === "") {
    alert("Please enter your email address.");

    return;
  }

  // Check if the user has selected a level - check against allowed level
  if (userLevel === "") {
    alert("Please select a level of study.");

    return;
  }

  // Check if the user has specified at least one hour of study
  if (isNaN(userHours) || userHours < 1) {
    alert("Please enter at least 1 hour of study.");

    return;
  }

  //Is userlevel valid?
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    alert("Invalid level of study selected");

    return;
  }

  //Is userHours within range?
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    alert(`You can only study a maximum of ${maxAllowedHours} hours per week.`);

    return;
  }

  console.log({ userEmail, userLevel, userHours });
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
