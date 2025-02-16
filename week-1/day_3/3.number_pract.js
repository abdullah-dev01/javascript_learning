day_3
{/* 
    <ol>
  <li>Write Program to Add Two Integers and store their sum in the third variable.</li>
  <li>Write Program to Multiply two decimal Point Numbers</li>
  <li>Write Program to Swap Values of Two Variables</li>
  <li>Write Program to Swap Values of Three variables like that. 
    <br>
    - Input : ( x = 3 , y = 4 , z = 5)
    - output : (x = 4 , y = 5 , z = 3)
  </li>
  <li>Write Program to convert feet to meter and meter into KM</li>
  <li>Write Program to convert celcius to farenheit. formula: (°C × 9/5) + 35</li>
  <li>Write Program to convert farenheit to celcius. formula: (°F − 32) × 5/9 </li>
  <li>Write Program to Calculate Area of Circle. formula A=πr2</li>
  <li>Write Program to Calculate Area of Square. formula A=a2</li>
  <li>Write Program to Calculate Area of Rectangle. A=wl</li>
  <li>Write Program to convert days to years and weeks</li> 
  
  */}

//1. Write Program to convert feet to meter and meter into KM.
// formula to convert feet to meter is 1 feet = 0.3048 meter and 1 meter = 0.001 KM

// function to convert feet to meter
function feetToMeter(feet){
    return feet /  3.2808;
}

// function to convert meter to KM
function meetToKm(meter){
    return meter  / 1000;
}

// function to convert KM to Feet
function kmToMeet(km){
    return  km * 1000;
}

// test the functions
console.log(feetToMeter(1)); // Output: 0.3048
console.log(meetToKm(1000)); // Output: 0.001
console.log(kmToMeet(1)); // Output: 1000

// 2. Write Program to convert celcius to farenheit. formula: (°C × 9/5) + 35

// function to convert celcius to farenheit
function celciusToFarenheit(celcius){
    return "Farenheit: " + (celcius * 9/5) + 35;
}
console.log(celciusToFarenheit(1)); // Output: 35

// 3. Write Program to convert farenheit to celcius. formula: (°F − 32) × 5/9

// done enough for today

