/*
Create a script that reads a person's day, month and year of birth and displays a message with the formatted date
*/

const day = prompt("What is your day of birth?");
const month = prompt("What is your month of birth?");
const year = prompt("What is your year of birth?");

const elementDate = document.querySelector(".formatted_date");

elementDate.innerHTML = `
  <h1>You were born in ${day}/${month}/${year}</h1>
`;
