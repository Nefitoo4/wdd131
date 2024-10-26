/*----HAMBURGER MENU----*/
document.addEventListener("DOMContentLoaded", () => {
  const mainnav = document.querySelector(".nav");
  const hambutton = document.querySelector("#hamburger");

  //Click Event Listener to the hamburger button and use a callback function that toggles the list
  //element's list of classes.
  hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
  });
});

/*----FAQ SECTION----*/
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");
  });
});

/*----BACK TO HOME BUTTON----*/
//Show the button when page is scroll down
window.onscroll = function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

//function to scroll up the Home page
document.getElementById("scrollToTop").addEventListener("click", function () {
  document.body.scrollTop = 0; //Safari Browsers
  document.documentElement.scrollTop = 0; //Chrome, Firefox, Internet Explorer, Microsoft Edge, Opera
});

/*----FOOTER LAST MODIFICATION----*/
//Obtain the element of the footer ID.
const lastModified = document.getElementById("lastModified");

//Obtain the current Date
const currentDate = new Date();

//Format the date as "dd/mm/yyyy"
const formattedDate = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

//Update the content of the element with the formatted date
lastModified.textContent = `Last Modification: ${formattedDate}`;
