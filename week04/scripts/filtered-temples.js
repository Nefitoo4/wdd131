/*////////////////////////////////////////////////////////////////////////////////////////////////////////*/
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

/*////////////////////////////////////////////////////////////////////////////////////////////////////////*/
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

/*////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*Hamburger menu*/
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#hamburgerMenu");
const templeCards = document.querySelector(".temple-card");
const title = document.querySelector("#Title");

//Click Event Listener to the hamburger button and use a callback function that toggles the list
//element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

/*///////////////////////////////////////////////////////////////////////////////////////////////////*/

//Temples Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "San Salvador El Salvador",
    location: "San Salvador, El Salvador",
    dedicated: "2011, August, 21",
    area: 21986,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-salvador-el-salvador-temple/san-salvador-el-salvador-temple-7314.jpg",
  },
  {
    templeName: "Tegucigalpa Honduras Temple",
    location: "Tegucigalpa, Honduras",
    dedicated: "2013, March, 17",
    area: 28254,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878.jpg",
  },
  {
    templeName: "Guatemala city Guatemala",
    location: "Guatemala city, Guatemala",
    dedicated: "1984, December, 14",
    area: 11610,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6407.jpg",
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-45812.jpg",
  },
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2011, December, 11",
    area: 21085,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-3957.jpg",
  },
];

/*///////////////////////////////////////////////////////////////////////////////////////////////////*/
//Temple filters functions
function oldTemples() {
  return temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1990
  );
}

function newTemples() {
  return temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );
}

function largeTemples() {
  return temples.filter((temple) => temple.area > 90000);
}

function smallTemples() {
  return temples.filter((temple) => temple.area < 10000);
}

//show the card temples selected from the nav menu or ham menu
showTemples(temples);

document.getElementById("old-temple").addEventListener("click", () => {
  showTemples(oldTemples());
});

document.getElementById("new-temple").addEventListener("click", () => {
  showTemples(newTemples());
});

document.getElementById("large-temple").addEventListener("click", () => {
  showTemples(largeTemples());
});

document.getElementById("small-temple").addEventListener("click", () => {
  showTemples(smallTemples());
});

document.getElementById("home-temple").addEventListener("click", () => {
  showTemples(temples);
});

//filter temples function aplication using DOM
function showTemples(filteredTemples) {
  const templeContainer = document.querySelector(".container-title");
  templeContainer.innerHTML = "";

  //for each arrow function aplication the card images
  filteredTemples.forEach((temple) => {
    const card = document.createElement("div");
    card.className = "temple-card";

    card.innerHTML = `
      <h3>${temple.templeName}</3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="325" height="275"/>
      `;
    templeContainer.appendChild(card);
  });
}
