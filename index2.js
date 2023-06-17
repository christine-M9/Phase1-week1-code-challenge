// The speed of the car
const speed = speed("speed of the car:");

// Change the input to a number
const speedNumber = Number(speed);

// Speed limit and points given
const speedLimit = 70;
const pointsGiven = 12;

// Calculating the demerit points
let demeritPoints = 0;
if (speedNumber > speedLimit) {
  const kmAboveLimit = speedNumber - speedLimit;
  demeritPoints = Math.floor(kmAboveLimit / 5);
}
// Output the demerit points
console.log("Points:", demeritPoints);

// Confirm if license to be suspended
if (demeritPoints > pointsGiven) {
  console.log("License suspended");
}