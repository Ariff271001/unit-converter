/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

btn.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue) {
    const meterToFeet = (inputValue * 3.281).toFixed(3);
    const feetToMeter = (inputValue / 3.281).toFixed(3);
    const litersToGallons = (inputValue * 0.264).toFixed(3);
    const gallonsToLiters = (inputValue / 0.264).toFixed(3);
    const kilosToPounds = (inputValue * 2.204).toFixed(3);
    const poundsToKilos = (inputValue / 2.204).toFixed(3);

    length.textContent = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter} meters`;
    volume.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;
    mass.textContent = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`;
  } else {
    const alertMessage = "Please insert the correct number to convert";
    alert(alertMessage);
    length.textContent = alertMessage;
    volume.textContent = alertMessage;
    mass.textContent = alertMessage;
  }
});
