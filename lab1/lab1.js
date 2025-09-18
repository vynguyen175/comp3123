"use strict";

// Exercise 1
function titleCase(str) {
  return String(str)
    .toLowerCase()
    .replace(/\b[a-z]/g, c => c.toUpperCase());
}
console.log(titleCase("the quick brown fox")); 

// Exercise 2
function max(a, b, c) {
  return Math.max(a, b, c);
}
console.log(max(1, 0, 1));        
console.log(max(0, -10, -20));   
console.log(max(1000, 510, 440));

// Exercise 3
function right(str) {
  str = String(str);
  return str.length < 3 ? str : str.slice(-3) + str.slice(0, -3);
}
console.log(right("Python"));     
console.log(right("JavaScript")); 
console.log(right("Hi"));         

// Exercise 4
function angle_Type(angle) {
  if (angle > 0 && angle < 90)   return "Acute angle";
  if (angle === 90)              return "Right angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180)             return "Straight angle";
  return "Invalid angle";
}
console.log(angle_Type(47));   
console.log(angle_Type(90));   
console.log(angle_Type(145));  
console.log(angle_Type(180)); 


