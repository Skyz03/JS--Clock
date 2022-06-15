
# JS Clock

This project is the second JS-30 challenge where I learned about ```DOM, Event Listner```, ```Get Dates``` and ```Getting Degree for Clock``` thing.


## Demo

[Click Here](https://skyz03.github.io/JS--Clock/)

## Features

- Getting DOM Elements
- Getting the Hour, Minutes, and Seconds.
- Converting the Time ==> Degress for Clock.

## Lessons Learned

```
CSS 
  transform-origin: 100%;
```

As this is one of the second JS challenge, here I first understood the loop of ```adding eventlisters.```

```DOM SELECTION => GET DATES/TIME => STYLES INTO DEGREE```.

```
function setDate() {

  const now = new Date();  // Function to get New Date
  const seconds = now.getSeconds();  //Fucntion to get every Seconds 
  const secondDegrees = ((seconds / 60) * 360) + 90;  //Calculation to change it into degree
  secondHand.style.transform = `rotate(${secondDegrees}deg)`; //DOM select plus style transform to apply rotate every 1second
}
setInterval(setDate, 1000); //Function which is being called every second.
```

Here, the code is getting the ```Seconds``` and converting it into Degrees & the setInterval for SetDate is coming every second.

1000 milliseconds = 1 second.

## Optimizations

Better background & the everysecond it is not constant and Resets everytime.

## Screenshots

![image](https://user-images.githubusercontent.com/42742924/152007140-40d476d0-ddbe-4dc0-8a03-87dc4f5aa04f.png)


## Tech Stack

**Client:** HTML, CSS/SCSS & JS

## Documentation

Pretty intresting challenge for making constant values.

# Notes 

Getting the elements selected, then getting the time as per the new Date() method. then converting them into degrees and making it into the clock. 
