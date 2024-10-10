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

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*WindChill factor calculation*/
function calcWindChill(temp, windSpeed) {
  if (temp <= 10 && windSpeed > 4.8) {
    let windChill =
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2); //Round to 2 decimals
  } else {
    return "N/A"; //No applicable if the conditions are not met
  }
}

//Variables for the calculation of the windChill factor.
let temp = 19; //Celsius grades
let windSpeed = 18; // Km/h
let windChillFactor = calcWindChill(temp, windSpeed);

//content application into the HTML label
document.getElementById("windChill").innerText = `${windChillFactor} °C`;
