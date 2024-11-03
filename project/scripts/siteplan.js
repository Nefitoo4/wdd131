/*----HAMBURGER MENU----*/
document.addEventListener("DOMContentLoaded", () => {
  const hambutton = document.querySelector("#menu");
  const navigation = document.querySelector("nav");
  const logo = document.querySelector(".nav-logo");
  //Click Event Listener to the hamburger button and use a callback function that toggles the list
  //element's list of classes.
  hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
    logo.classList.toggle("open");
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

/*----MEAL SELECTION SET OF ARRAY METHODS WITH OBJECTS----*/
document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    {
      id: "breakfast-section",
      element: document.getElementById("breakfast-section"),
    },
    { id: "lunch-section", element: document.getElementById("lunch-section") },
    {
      id: "dinner-section",
      element: document.getElementById("dinner-section"),
    },
  ];

  //function that show one section and hide the rest
  function showSection(idToShow) {
    sections.forEach((section) => {
      if (section.id === idToShow) {
        section.element.style.display = "block";
      } else {
        section.element.style.display = "none";
      }
    });
  }

  //hide all the sections when loading the page
  showSection("breakfast-section");

  document
    .getElementById("breakfast")
    .addEventListener("click", () => showSection("breakfast-section"));
  document
    .getElementById("lunch")
    .addEventListener("click", () => showSection("lunch-section"));
  document
    .getElementById("dinner")
    .addEventListener("click", () => showSection("dinner-section"));
});

/*----RATING LOCALSTORAGE----*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rating-form");
  const ratingCountElement = document.getElementById("rating-count");
  const averageRatingElement = document.getElementById("average-rating");

  //Load rating data from LocalStorage
  let ratingCount = parseInt(localStorage.getItem("ratingCount"), 10) || 0;
  let totalRating = parseInt(localStorage.getItem("totalRting"), 10) || 0;

  //Update display count and average
  ratingCountElement.textContent = `${ratingCount}`;
  averageRatingElement.textContent = ratingCount
    ? `${(totalRating / ratingCount).toFixed(1)}`
    : "0";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const rating = form.querySelector('input[name="rating"]:checked');
    if (rating) {
      const ratingValue = parseInt(rating.value, 10);

      //Increment rating count and update total rating
      ratingCount++;
      totalRating += ratingValue;

      //Update LocalStorage
      localStorage.setItem("ratingCount", `${ratingCount}`);
      localStorage.setItem("totalRating", `${totalRating}`);

      //Update displayed count and average
      ratingCountElement.textContent = `${ratingCount}`;
      averageRatingElement.textContent = `${(totalRating / ratingCount).toFixed(
        1
      )}`;

      //Reset form
      form.reset();
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});

//Reset ratings button
document.getElementById("reset-ratings").addEventListener("click", () => {
  localStorage.removeItem("ratingCount"); //remove ratingCount from localStorage
  localStorage.removeItem("totalRating"); //remove totalRating from localStorage

  //Update the interface
  document.getElementById("rating-count").textContent = "0";
  document.getElementById("average-rating").textContent = "0";

  alert("Ratings reset");
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
