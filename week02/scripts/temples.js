//Obtain the element of the footer ID.
const lastModified = document.getElementById("lastModified");

//Obtain the current Date
const currentDate = new Date();

//Format the date as "dd/mm/yyyy"
const formattedDate = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()}${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

//Update the content of the element with the formatted date
lastModified.textContent = `Last Modification: ${formattedDate}`;

/*Update the title in the main <h2> by clicking any option of the navigation menu*/
let optionSelected = "The most beautiful LDS Temples"; //Initial statement

function UpdateTitle(option) {
  optionSelected = option; //Update the statement

  document.getElementById("Title").textContent = optionSelected;
}

//Load the page, restablish the initial statement
window.onload = function () {
  document.getElementById("Title").textContent = optionSelected;
};

/*Hamburger menu*/
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#hamburgerMenu");

//Click Event Listener to the hamburger button and use a callback function that toggles the list
//element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});
