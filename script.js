'use strict';
//1.Write a program to input 2 numbers and display the sum of the numbers to the console.
const num1=20;
const num2=40;

const sum=num1+num2;
console.log(sum);

//2.Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

const p=100;
const t=2;
const r=6;

const SI=(p*t*r)/100;

console.log('Simple interest:'+SI);

//3.Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

const m=5;
const v=3;

const KE=0.5*m*v;
console.log('Kinetic Energy:'+KE);

//4.Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: T = (T - 32) 9/5 'T' is the temperature on the Fahrenheit scale.

const fahrenheit= prompt("enter fahrenheit value: ");

const celsius= (fahrenheit - 32) / 1.8;
console.log('celsius: '+ celsius);

//5.Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

const squareLength = parseInt(prompt("Enter length of square:"));
const areaOfSquare = squareLength * squareLength;
console.log("Area of square is: " + areaOfSquare);
const perimeter = 4 * squareLength;
console.log("perimeter of square is: " + perimeter);

const surfaceAreaOfCube = 6 * squareLength;
console.log("surfaceArea of Cube: "+surfaceAreaOfCube);

const volumeOfCube = squareLength*squareLength*squareLength;
console.log("volume of Cube: "+volumeOfCube);

//6.Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const SP = prompt("Enter selling price: ");
const CP = prompt("Enter cost price: ");

const Profit = SP - CP;
console.log("Profit: "+Profit);

const loss = CP - SP;
console.log("loss: "+loss);

//7.Write a program to calculate sum of N natural digits, as input by the users?

const input = parseInt(prompt("Enter a number:"));
const result = input * (input + 1) / 2;
console.log(result);

//10.Write a JavaScript program that reverses a number.

let rev = 0;
const num = prompt("enter number: ");

rev = Number(String(num).split('').reverse().join(''));

console.log("Reverse number : "+rev);

//11.Write a Program to convert Decimal to Binary.





