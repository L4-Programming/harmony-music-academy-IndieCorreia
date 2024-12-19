export function displayResults(output) {
  console.log("Displaying the final results...");

  let results = document.querySelector("#results");

  results.innerHTML = `
  <dl>
    <dt>Email</dt>
    <dd>${output.userEmail}</dd>
    
    <dt>Level</dt>
     <dd>${output.userLevel}</dd>

     <dt>Hours per week</dt>
     <dd>${output.userHours}</dd>

     <dt>Total cost</dt>
     <dd>£${output.totalCost}</dd>
  </dl>
`;
}
