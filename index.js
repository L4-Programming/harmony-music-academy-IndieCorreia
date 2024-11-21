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
  let errors = {};

  // Helper function to add error messages
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Check if the user has provided an email address
  if (userEmail === "") {
    addError("email", "Please enter your email address.");
  }

  // Check if the user has selected a level - check against allowed level
  if (userLevel === "") {
    addError("level", "Please select a level of study.");
  }

  // Check if the user has specified at least one hour of study
  if (isNaN(userHours) || userHours < 1) {
    addError("hoursPerWeek", "Please enter at least 1 hour of study.");
  }

  //Is userlevel valid?
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "Invalid level of study selected");
  }

  //Is userHours within range?
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `Users who are ${userLevel} can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }

  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }

    // Populate the error message div with an unordered list of error messages
    let errorDiv = document.querySelector(`#${field}-error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");

      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }

  // Return early if there are any errors
  if (Object.keys(errors).length > 0) {
    return;
  }

  console.log({ errors });
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
