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

/*----DATA SOURCE----*/
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "wrap equalizer", averagerating: 5.0 },
];

//populate select options
window.onload = function () {
  const productSelect = document.getElementById("productName");

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id; //use the id as the value
    option.textContent = product.name; //display the name
    productSelect.appendChild(option);
  });
};

//handle form submission and increment counter
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    //prevent the default form submission behavior
    event.preventDefault();

    //increment the review counter
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    console.log("Review Count after increment: ", reviewCount);

    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    console.log("Review Count after increment: ", reviewCount);

    //redirect to the confirmation page
    window.location.href = this.action;
  });
