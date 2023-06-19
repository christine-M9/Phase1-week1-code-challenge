// The speed of the car
const speed = speed("car's speed");

//defining speedPace;
const speedPace = Number(speed);

// Speed limit and points given;
const speedLimit = 70;
const pointsGiven = 12;

// Calculating the demerit points;
let demeritPoints = 0;

if (speedPace < 70)   {
      console.log( "0K");
}
   else  if (speedPace > speedLimit) {
         const speedAboveLimit = speedPace - speedLimit;
         demeritPoints = Math.floor(speedAboveLimit / 5);
}

// Output the demerit points;
      console.log("Points:", demeritPoints);

// Confirm if license to be suspended;
if (demeritPoints > pointsGiven) {
         console.log("License suspended");
}

// run node index2.js on the terminal