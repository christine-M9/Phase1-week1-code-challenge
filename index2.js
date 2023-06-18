// The speed of the car[defining speed]
const speed = speed("car's speed");

// Change the input to a number[defining speedNumber]
const speedNumber = Number(speed);

// Speed limit and points given
const speedLimit = 70;
const pointsGiven = 12;

// Calculating the demerit points
let demeritPoints = 0;
if (speedNumber > speedLimit) {
  const speedAboveLimit = speedNumber - speedLimit;
  demeritPoints = Math.floor(speedAboveLimit / 5);
}
// Output the demerit points
console.log("Points:", demeritPoints);

// Confirm if license to be suspended
if (demeritPoints > pointsGiven) {
  console.log("License suspended");
}

// run node index2.js on the terminal