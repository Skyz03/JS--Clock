const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");  // This one gets the DOM


function setDate() {

  const now = new Date();  // Function to get New Date
  const seconds = now.getSeconds();  //Fucntion to get every Seconds 
  const secondDegrees = ((seconds / 60) * 360) + 90;  //Calculation to change it into degree
  secondHand.style.transform = `rotate(${secondDegrees}deg)`; //DOM select plus style transform to apply rotate every 1second

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000); //Function which is being called every second.
